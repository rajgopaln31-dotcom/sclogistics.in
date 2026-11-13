import { useEffect, useState } from "react";
import { X } from "lucide-react";
import OriginalImage from "./OriginalImage";
import "../styles/Gallery.css";

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <>
      <div className="gallery-grid">
        {images.map((name, index) => (
          <button
            key={name}
            type="button"
            className="gallery-item"
            onClick={() => setSelected(name)}
            aria-label={`Open gallery photo ${index + 1}`}
          >
            <OriginalImage name={name} alt={`SCL gallery photo ${index + 1}`} />
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            aria-label="Close photo"
            onClick={() => setSelected(null)}
          >
            <X size={28} />
          </button>
          <OriginalImage name={selected} alt="SCL gallery enlarged" />
        </div>
      )}
    </>
  );
}
