# XtaskR hero action video — production brief

Status: awaiting a connected reference-image video generator or supplied footage. No action video has been generated. The website currently uses a product photo fallback.

## Source references

- Primary product/worker reference: tmp/xtaskr-client/farmer_loading_blueberries_32312_Nano_Banana_2.png
- Loading gesture reference: tmp/xtaskr-client/farmer_loading_blueberries_63987_Nano_Banana_2.png
- Existing desktop fallback: public/assets/xtaskr/approach-platform-full.webp
- Mobile composition reference: public/assets/xtaskr/approach-field-mobile.webp

## Generation prompt

Create an eight-second, photorealistic continuous looping shot for the XtaskR homepage. Use the supplied client photo as the strict reference for the actual rover, worker and blueberry farm. Preserve the green body, original chassis silhouette, wheels, front lights, cargo platform, green produce crates, controls and materials. No redesigned components, added robotic arms, new sensors, futuristic elements, branding invented on the product, or changed colors.

In a real blueberry row, the worker actively picks ripe berries, turns naturally toward the rover, and visibly deposits the berries into its open cargo crate. At the same time the rover creeps forward autonomously beside the worker, with grounded wheel rotation and natural contact shadows. The camera tracks slowly alongside them at the same pace, keeping the worker's head, hands, feet, rover chassis, cargo crates and all wheels inside the frame. The action should show a clear harvest-to-cargo workflow, not a posed photograph or camera zoom on a static frame. Natural hand anatomy and realistic berries are essential.

Place the worker and rover in the center-right/right half, with uncluttered plants in the left 40 percent for overlaid website copy. Use premium natural daylight, realistic foliage motion, restrained depth of field and documentary industrial photography. No text, graphics, audio, logos added to the footage, abrupt camera moves or transitions. Have the worker repeat a natural harvesting cycle so the ending hand/body/camera pose matches the beginning; do not reverse playback to manufacture the loop. Check product geometry and wheel motion frame by frame.

Deliver 1920×1080 landscape, 24–30 fps, eight seconds, muted H.264 MP4 with yuv420p and fast-start metadata. Prefer under 8 MB. Produce an optional 780×1440 mobile recomposition of the same action, with safe copy area above the subjects; never distort or cut off the product to fill the portrait crop.

## Integration

1. Save approved desktop footage as public/assets/xtaskr/hero-action.mp4.
2. Optionally save the mobile version as public/assets/xtaskr/hero-action-mobile.mp4.
3. Rebuild and restart the local server. Hero.tsx enables the video automatically when the file exists at build time.
4. Verify autoplay, muted, loop, playsInline, actual worker/rover action, natural loop transition, desktop/mobile composition and console/media errors. Reduced-motion visitors retain the image fallback.
