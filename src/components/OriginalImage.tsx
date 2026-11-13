import { useState } from "react";
import manifestJson from "../data/imageManifest.json";

interface ManifestEntry {
  dir: string;
  url: string;
}

const manifest = manifestJson as Record<string, ManifestEntry>;

interface OriginalImageProps {
  name: string;
  alt: string;
  className?: string;
}

/**
 * Shows an original sclogistics.in image.
 * It first tries the local copy in public/assets (see "npm run download-images").
 * If the local file is not there yet, it falls back once to the original URL.
 */
export default function OriginalImage({ name, alt, className }: OriginalImageProps) {
  const entry = manifest[name];
  const [useRemote, setUseRemote] = useState(false);

  if (!entry) {
    return null;
  }

  const src = useRemote ? entry.url : `/assets/${entry.dir}/${name}`;

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setUseRemote(true)}
    />
  );
}
