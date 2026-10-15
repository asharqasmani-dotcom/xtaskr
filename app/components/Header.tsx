import { navigation } from "../navigation";

export default function Header() {
  return (
    <div
      data-elementor-type={"wp-post"}
      data-elementor-id={"178"}
      className={"elementor elementor-178 header-absolute"}
    >
      <div
        className={
          "elementor-element elementor-element-55f915d e-flex e-con-boxed e-con e-parent e-lazyloaded"
        }
        data-id={"55f915d"}
      >
        <div className={"e-con-inner"}>
          <div
            className={
              "elementor-element elementor-element-1a8c78e e-con-full e-flex e-con e-child"
            }
            data-id={"1a8c78e"}
          >
            <div
              className={
                "elementor-element elementor-element-92780f0 elementor-widget elementor-widget-site-logo"
              }
              data-id={"92780f0"}
            >
              <div className={"elementor-widget-container"}>
                <div className={"hfe-site-logo"}>
                  <a
                    data-elementor-open-lightbox={""}
                    className={"elementor-clickable"}
                    href={"#home"}
                  >
                    <div className={"hfe-site-logo-set"}>
                      <div className={"hfe-site-logo-container"}>
                        <img
                          className={"xtaskr-logo"}
                          src={"/assets/xtaskr-light.svg"}
                          alt={"XTASKR"}
                          width={"220"}
                          height={"45"}
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className={
                "elementor-element elementor-element-c1c93df e-con-full e-flex e-con e-child"
              }
              data-id={"c1c93df"}
            >
              <div
                className={
                  "elementor-element elementor-element-3bce511 elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile elementor-widget elementor-widget-mechorix-nav-menu"
                }
                data-id={"3bce511"}
              >
                <div className={"elementor-widget-container"}>
                  <div className={"elementor-nav-menu-wrapper"}>
                    <nav className={"main-navigation"}>
                      <div className={"primary-navigation"}>
                        <ul id="menu-1-3bce511" className="menu">
                          {navigation.map(([label, id]) => (
                            <li key={id} className="menu-item menu-item-type-custom">
                              <a href={`#${id}`} title={id === "solutions" ? "Product Details" : undefined}>
                                <span className="hover-text" data-name={label}><span>{label}</span></span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
              <div
                className={
                  "elementor-element elementor-element-07eecf5 enable-button-effect-yes elementor-widget elementor-widget-button"
                }
                data-id={"07eecf5"}
              >
                <a
                  className={
                    "elementor-button elementor-button-link elementor-size-sm"
                  }
                  href={"#contact"}
                >
                  <span className={"elementor-button-content-wrapper"}>
                    <span className={"elementor-button-icon"}>
                      <i
                        aria-hidden={"true"}
                        className={
                          "mechorix-icon- mechorix-icon-arrow-right-dot"
                        }
                      ></i>
                    </span>
                    <span className={"elementor-button-text"}>
                      {"get a quote"}
                    </span>
                  </span>
                </a>
              </div>
              <div
                className={
                  "elementor-element elementor-element-b5a08dd elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra mechorix-canvas-menu-layout-2 elementor-widget elementor-widget-mechorix-menu-canvas"
                }
                data-id={"b5a08dd"}
              >
                <div className={"elementor-widget-container"}>
                  <div className={"elementor-canvas-menu-wrapper"}>
                    <a
                      href={"#home"}
                      className={"menu-mobile-nav-button"}
                      aria-label={"Open navigation"}
                      data-menu={"true"}
                    >
                      <span className={"toggle-text screen-reader-text"}>
                        {"Menu"}
                      </span>
                      <div className={"mechorix-icon"}>
                        <span className={"icon-1"}></span>
                        <span className={"icon-2"}></span>
                        <span className={"icon-3"}></span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
