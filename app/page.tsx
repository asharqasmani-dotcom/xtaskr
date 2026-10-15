import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Solutions from "./components/Solutions";
import Industries from "./components/Industries";
import Approach from "./components/Approach";
import CaseStudies from "./components/CaseStudies";
import Transition from "./components/Transition";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";
import News from "./components/News";
import Footer from "./components/Footer";
import Motion from "./components/Motion";

export default function Home() {
  return (
    <>
      <div id="page" className="hfeed site">
        <header id="masthead">
          <Header />
        </header>
        <div id="content" className="site-content-page clear">
          <div className="col-fluid">
            <div id="primary" className="content-area">
              <main id="main" className="site-main">
                <div className="elementor elementor-137">
                  <Hero />
                  <About />
                  <Solutions />
                  <Industries />
                  <Approach />
                  <CaseStudies />
                  <Transition />
                  <WhyUs />
                  <Testimonials />
                  <Partners />
                  <News />
                </div>
              </main>
            </div>
          </div>
        </div>
        <footer id="colophon">
          <div className="footer-width-fixer">
            <Footer />
          </div>
        </footer>
      </div>
      <Motion />
    </>
  );
}
