# XTASKR homepage

A local Next.js recreation of the Mechorix homepage for scroll-video recording. Uses the supplied XTASKR logo, brand palette, Helvetica Now and Poppins, and locally stored imagery. The hero is unchanged; every image below it now comes from the client rover folder, with edited backgrounds and compositions.

## Run

```bash
npm install
npm run dev -- --port 3001
```

Open http://127.0.0.1:3001. For the smoothest recording, use the optimized production server:

```bash
npm run build
npm run start -- --port 3001
```

Stop an existing server on the same port before starting another. Use a desktop window around 1440–1920 px wide, return to the top, reload, and let the introductory animation finish before scrolling.

## Edit

- `app/components/Hero.tsx`, `About.tsx`, `Solutions.tsx`, etc.: section content and imagery.
- `app/globals.css`: XTASKR colors, font declarations, responsive overrides.
- `app/reference.css`: pared-down reference layout and hover effects.
- `app/components/Motion.tsx`: smooth scrolling, 3D panel reveals, animated counters, parallax, carousel, case-study expansion, testimonial timeline, mobile navigation, and the rover-image viewer.
- `public/motion/reveal.js`: reference heading/text decode animations.
- `public/assets`: local images, video and cropped logo variants; originals retained alongside optimized WebP versions.
- `public/fonts`: local webfonts from the supplied archive, subset for the English preview.

Only the homepage is implemented. Navigation links jump to homepage sections. Below-hero copy describes XtaskR and its proposed application areas. The original testimonial rows now present platform principles, and the partner-logo strip now shows product themes rather than third-party endorsements. Subscriptions are a local preview interaction and do not transmit or store an email. No WordPress, Elementor JavaScript, jQuery, external asset requests, database or API keys are required at runtime.

## Validation

```bash
npm run typecheck
npm run build
```

## Client image set

- Source: `matejgutman-attachments.zip` (13 supplied images, source archive untouched).
- `public/assets/xtaskr/`: optimized WebP assets consumed by the site.
- `output/imagegen/`: full-resolution selected PNGs, including portrait mobile variants.
- `output/imagegen/manifest.json`: source-to-output mapping and the full final prompt set used with the built-in image-generation tool.

Images are composed for their existing media boxes. Floating product views use transparent backgrounds and `object-fit: contain`; photographic cards use responsive crops with protected product focal positions. The approach slider displays complete landscape photos at their natural proportions, with copy alongside on desktop and below on mobile. Its heading stays outside the carousel. The footer loads a separate portrait composition below 768 px. No raster image uses stretching.

The hero component, video, poster, contact image, content and layout have been retained as requested. The supporting lower-page play control opens an animated gallery of the client-derived field scenes, since the client folder contains photos rather than rover video.

### Latest homepage refinements

Application cards use six category-specific XtaskR images with a subtle orange hover/focus overlay; their grid, dimensions and copy are unchanged. The ten platform cards retain their layout while their product images scale up to 128 px tall on desktop, with responsive sizing on mobile. The testimonial timeline matches the reference's scroll-triggered full-opacity active item and dimmed inactive items.

Desktop, mobile, and footer navigation share the requested page labels and link to existing homepage sections. These are section links; separate product/about/technology pages have not been created. The footer credit links Owlistic Studio to https://www.owlisticstudio.com/.

Category image source files and final built-in imagegen prompts are recorded in `output/imagegen/categories-manifest.json`. The hero action video remains pending a video-generation connection or approved footage; see `output/hero-video-brief.md`.
