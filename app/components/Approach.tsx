const slides = [
  {
    label: "Platform",
    title: "One platform. Multiple possibilities.",
    image: "approach-platform-full.webp",
    width: 1920,
    height: 1072,
    alt: "A farmer standing beside the complete green XtaskR rover in a blueberry field",
  },
  {
    label: "Purpose",
    title: "Useful technology for everyday work",
    image: "approach-field.webp",
    width: 1920,
    height: 1080,
    alt: "A farmer harvesting blueberries beside the complete XtaskR rover",
  },
  {
    label: "Direction",
    title: "Built to grow across applications",
    image: "approach-orchard.webp",
    width: 1920,
    height: 1080,
    alt: "A farmer and the complete XtaskR rover carrying fruit in an orchard",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="approach-section" aria-labelledby="approach-title">
      <div className="approach-carousel elementor-widget">
        <div className="approach-heading-row">
          <div>
            <p className="approach-eyebrow">The XtaskR way</p>
            <h2 id="approach-title">Our approach</h2>
          </div>
          <div className="approach-controls" aria-label="Approach slideshow controls">
            <button type="button" className="elementor-swiper-button elementor-swiper-button-prev" aria-label="Previous approach slide">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6" /></svg>
            </button>
            <button type="button" className="elementor-swiper-button elementor-swiper-button-next" aria-label="Next approach slide">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
            </button>
          </div>
        </div>
        <div className="approach-swiper swiper" dir="ltr">
          <div className="swiper-wrapper">
            {slides.map((slide, index) => (
              <div className="swiper-slide approach-slide" key={slide.label} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}`}>
                <div className="approach-copy">
                  <p className="approach-label"><span aria-hidden="true" />{slide.label}</p>
                  <h3>{slide.title}</h3>
                  <p className="approach-description">
                    XtaskR brings different outdoor workflows together through one clear platform, with applications and modules that build on the same practical foundation.
                  </p>
                  <div className="approach-step" aria-hidden="true"><span>0{index + 1}</span><span className="approach-step-line" /><span>03</span></div>
                </div>
                <figure className="approach-photo">
                  {/* Preserve the entire frame without cropping, overlays, or image zoom. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/assets/xtaskr/${slide.image}`} width={slide.width} height={slide.height} alt={slide.alt} loading="lazy" decoding="async" />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
