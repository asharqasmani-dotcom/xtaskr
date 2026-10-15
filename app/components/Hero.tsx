import { existsSync } from "node:fs";
import path from "node:path";

const videoFile = "assets/xtaskr/hero-action.mp4";
const mobileVideoFile = "assets/xtaskr/hero-action-mobile.mp4";

export default function Hero() {
  // A client image remains visible until the actual action video has been produced.
  // Rebuild after adding the approved MP4 to public/assets/xtaskr/.
  const hasVideo = existsSync(path.join(process.cwd(), "public", videoFile));
  const hasMobileVideo = hasVideo && existsSync(path.join(process.cwd(), "public", mobileVideoFile));

  return (
    <div
      className="elementor-element elementor-element-28af341 e-flex e-con-boxed e-con e-parent hero-product"
      data-id="28af341"
      id="home"
    >
      <div className="hero-product-media" aria-hidden="true">
        <picture>
          <source media="(max-width: 767px)" srcSet="/assets/xtaskr/approach-field-mobile.webp" />
          <img src="/assets/xtaskr/approach-platform-full.webp" width={1920} height={1072} alt="" fetchPriority="high" decoding="async" />
        </picture>
        {hasVideo && (
          <video
            className="hero-action-video"
            role="presentation"
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
            poster="/assets/xtaskr/approach-platform-full.webp"
          >
            {hasMobileVideo && <source media="(max-width: 767px)" src={`/${mobileVideoFile}`} type="video/mp4" />}
            <source src={`/${videoFile}`} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="hero-product-shade" aria-hidden="true" />
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-0eed875 e-con-full e-flex e-con e-child hero-product-copy" data-id="0eed875">
          <p className="hero-product-eyebrow">AUTONOMOUS ROBOTICS FOR REAL WORK</p>
          <div className="elementor-element elementor-element-d3d069b elementor-widget__width-initial elementor-widget elementor-widget-heading" data-id="d3d069b">
            <h1 className="elementor-heading-title elementor-size-default">Move More.<br />Carry Less.</h1>
          </div>
          <p className="hero-product-description">A rugged autonomous work rover that carries loads and equipment across demanding outdoor environments.</p>
          <div className="hero-product-actions">
            <div className="elementor-element elementor-element-3aa3c37 enable-button-effect-yes elementor-widget elementor-widget-button" data-id="3aa3c37">
              <a className="elementor-button elementor-button-link elementor-size-sm" href="#solutions">
                <span className="elementor-button-content-wrapper">
                  <span className="elementor-button-icon"><i aria-hidden="true" className="mechorix-icon- mechorix-icon-arrow-right-dot" /></span>
                  <span className="elementor-button-text">EXPLORE T100</span>
                </span>
              </a>
            </div>
            <div className="elementor-widget elementor-widget-button enable-button-effect-yes">
              <a className="elementor-button elementor-button-link hero-product-secondary" href="#contact">
                <span className="elementor-button-content-wrapper">
                  <span className="elementor-button-text">REQUEST A QUOTE</span>
                  <span className="elementor-button-icon"><i aria-hidden="true" className="mechorix-icon- mechorix-icon-arrow-right-dot" /></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
