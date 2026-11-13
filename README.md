# Sri Chinimilli Logistics – React + TypeScript recreation

Recreation of https://sclogistics.in/ using React, TypeScript, Vite, React Router DOM, separate CSS files and Lucide icons.

## Run it

```bash
npm install
npm run download-images   # saves every original image into public/assets (needs internet)
npm run dev
npm run build
```

`npm run download-images` is optional for viewing: if a local image file is missing, the site automatically loads that same original image from sclogistics.in instead. Run it once so the images are stored locally in the project.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Us |
| `/solutions` | Solutions |
| `/services` | Services |
| `/infrastructure` | Infrastructure |
| `/contact` | Contact Us (also reached from "Get A Quote") |

## Project notes

- All images are the original files from sclogistics.in, listed in `src/data/imageManifest.json`.
- The contact form validates on the front end only. There is no backend: on a valid submit it opens the visitor's email app addressed to the company email.
- No inline CSS, no Tailwind. Each page and component has its own file in `src/styles/`.

## Known limitations (please read)

This project was written in a sandbox that could not reach sclogistics.in with a shell or install npm packages, so:

1. **Not built or run.** `npm install`, `npm run dev` and `npm run build` have NOT been run here. Please run them and report any error.
2. **Images not bundled.** The image files could not be downloaded in the sandbox, so `public/assets/` is empty. Use `npm run download-images`.
3. **Colors and fonts are approximations.** The original stylesheet could not be read, so the navy/amber palette and fonts are estimates, not exact matches.
4. **Hero slider backgrounds are missing.** The two background images of the home slider were not exposed in the page data, so the hero uses a plain gradient.
5. **Services page.** The original `/shuttle-services/` and `/contact/` pages returned errors to the fetch tool. The Services page was built from the original `/employee-transportation/` page text; the Contact page uses the contact details found in the header and footer. The original map embed, if any, is not included.
6. **Inner-page photos.** Images on About, Solutions, Services and Infrastructure were taken from the original homepage and gallery; their exact placement on the original inner pages could not be checked.
7. **Client logos** have no names in the original markup, so they carry generic alt text.
8. **Footer social icons** (Facebook, YouTube, Instagram) are left out because the original links were empty ("#").
9. The blog cards show the original three post titles/excerpts but do not link anywhere, since the post pages are not part of this recreation.
10. The About page testimonials use the original text; the original names/photos were not available.
