"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Swiper from "swiper";
import { Navigation, Keyboard, A11y } from "swiper/modules";

import { navigation } from "../navigation";

export default function Motion() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const lenis = reduce
      ? null
      : new Lenis({ duration: 1.25, smoothWheel: true, anchors: true });
    const tick = (time: number) => lenis?.raf(time * 1000);
    lenis?.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(tick);
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add(
        "(min-width: 992px) and (prefers-reduced-motion: no-preference)",
        () => {
          document
            .querySelectorAll<HTMLElement>(".solution-item.solution-style-1")
            .forEach((el) => {
              gsap.fromTo(
                el,
                { rotationX: -84, transformOrigin: "50% 0%" },
                {
                  rotationX: 0,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    end: "bottom 80%",
                    scrub: 4,
                    invalidateOnRefresh: true,
                    onRefresh: (st) => {
                      st.animation?.progress(st.progress);
                    },
                  },
                },
              );
            });
          document
            .querySelectorAll<HTMLElement>("[data-motion]")
            .forEach((el) => {
              const settings = JSON.parse(el.dataset.motion || "{}");
              if (settings.motion_fx_translateX_effect) {
                gsap.fromTo(
                  el,
                  { x: -75 },
                  {
                    x: 75,
                    ease: "none",
                    scrollTrigger: {
                      trigger: el.parentElement,
                      start: "top bottom",
                      end: "bottom top",
                      scrub: 1,
                    },
                  },
                );
              }
              if (settings.motion_fx_rotateX_effect) {
                gsap.fromTo(
                  el,
                  {
                    rotationX: 45,
                    transformOrigin: "50% 0%",
                    transformPerspective: 1200,
                  },
                  {
                    rotationX: 0,
                    ease: "none",
                    scrollTrigger: {
                      trigger: el,
                      start: "top bottom",
                      end: "center center",
                      scrub: 1,
                    },
                  },
                );
              }
            });
          gsap.fromTo(
            '[data-id="c0ab43d"]',
            { backgroundPositionY: "0%" },
            {
              backgroundPositionY: "65%",
              ease: "none",
              scrollTrigger: {
                trigger: "#contact",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        },
      );
    });

    const counters = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          counters.unobserve(entry.target);
          const el = entry.target as HTMLElement;
          const end = Number(
            el.dataset.toValue || el.textContent?.replace(/,/g, "") || 0,
          );
          const count = { value: Number(el.dataset.fromValue || 0) };
          gsap.to(count, {
            value: end,
            duration: reduce ? 0 : 2,
            ease: "power2.out",
            onUpdate: () => {
              const decimals = Number(el.dataset.decimalPlaces || 0);
              el.textContent = count.value.toLocaleString("en-US", {
                minimumIntegerDigits: Number(el.dataset.minDigits || 1),
                maximumFractionDigits: decimals,
                minimumFractionDigits: decimals,
              });
            },
          });
        });
      },
      { threshold: 0.3 },
    );
    document
      .querySelectorAll(".elementor-counter-number")
      .forEach((el) => counters.observe(el));

    const swipers: Swiper[] = [];
    document.querySelectorAll<HTMLElement>(".swiper").forEach((el) => {
      const isNews = el.classList.contains("elementor-post-wrapper");
      const owner = el.closest(".elementor-widget") as HTMLElement | null;
      swipers.push(
        new Swiper(el, {
          modules: [Navigation, Keyboard, A11y],
          speed: reduce ? 0 : 500,
          loop: !isNews,
          slidesPerView: isNews ? 1.2 : 1,
          spaceBetween: isNews ? 20 : 0,
          keyboard: { enabled: true, onlyInViewport: true },
          navigation: {
            nextEl:
              owner?.querySelector<HTMLElement>(
                ".elementor-swiper-button-next",
              ) || undefined,
            prevEl:
              owner?.querySelector<HTMLElement>(
                ".elementor-swiper-button-prev",
              ) || undefined,
          },
          breakpoints: isNews
            ? { 768: { slidesPerView: 2.2 }, 1025: { slidesPerView: 3 } }
            : {},
        }),
      );
    });

    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".elementor-case-study-effect-yes .grid-item",
      ),
    );
    if (cards[0]) cards[0].classList.add("is-active");
    const activateCard = (event: Event) => {
      if (!window.matchMedia("(min-width: 1025px)").matches) return;
      cards.forEach((card) =>
        card.classList.toggle("is-active", card === event.currentTarget),
      );
    };
    cards.forEach((card) => {
      card.addEventListener("mouseenter", activateCard);
      card.addEventListener("focusin", activateCard);
    });

    const testimonials = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".layout-2 .elementor-testimonial-item",
      ),
    );
    const timeline = () => {
      let active = 0;
      testimonials.forEach((el, i) => {
        if (el.getBoundingClientRect().top <= window.innerHeight / 2) active = i;
      });
      testimonials.forEach((el, i) =>
        el.classList.toggle("timeline-active", i === active),
      );
    };
    lenis?.on("scroll", timeline);
    window.addEventListener("scroll", timeline, { passive: true });
    window.addEventListener("resize", timeline);
    timeline();

    const click = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>(
        "a, button",
      );
      if (!target) return;
      if (target.matches("[data-menu]")) {
        event.preventDefault();
        previousFocus.current = target;
        setMenuOpen(true);
      }
      if (
        target.matches("[data-video], .elementor-video-popup, .video-popup")
      ) {
        event.preventDefault();
        previousFocus.current = target;
        setVideoOpen(true);
      }
    };
    const submit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement;
      if (!form.matches("[data-local-form]")) return;
      event.preventDefault();
      let feedback = form.querySelector<HTMLElement>(".form-feedback");
      if (!feedback) {
        feedback = document.createElement("span");
        feedback.className = "form-feedback";
        feedback.setAttribute("role", "status");
        form.appendChild(feedback);
      }
      feedback.textContent =
        "This is a local preview. Email subscriptions are not connected.";
    };
    document.addEventListener("click", click);
    document.addEventListener("submit", submit);
    const refresh = () => ScrollTrigger.refresh();
    document.fonts.ready.then(refresh);
    window.addEventListener("load", refresh);
    const refreshTimer = window.setTimeout(refresh, 600);
    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener("load", refresh);
      document.removeEventListener("click", click);
      document.removeEventListener("submit", submit);
      window.removeEventListener("scroll", timeline);
      window.removeEventListener("resize", timeline);
      counters.disconnect();
      swipers.forEach((s) => s.destroy(true, true));
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", activateCard);
        card.removeEventListener("focusin", activateCard);
      });
      media.revert();
      context.revert();
      gsap.ticker.remove(tick);
      lenis?.destroy();
    };
  }, []);

  useEffect(() => {
    if (videoOpen) dialogRef.current?.showModal();
    else dialogRef.current?.close();
  }, [videoOpen]);

  useEffect(() => {
    if (
      !videoOpen ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const timer = window.setInterval(
      () => setGalleryIndex((index) => (index + 1) % 3),
      4000,
    );
    return () => window.clearInterval(timer);
  }, [videoOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const menu = menuRef.current;
    menu?.querySelector<HTMLButtonElement>("button")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        previousFocus.current?.focus();
      }
      if (event.key === "Tab" && menu) {
        const items = Array.from(
          menu.querySelectorAll<HTMLElement>("a,button"),
        );
        const first = items[0],
          last = items.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        }
        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <Script src="/motion/reveal.js" strategy="afterInteractive" />
      {menuOpen && (
        <div
          className="local-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          ref={menuRef}
        >
          <button
            onClick={() => {
              setMenuOpen(false);
              previousFocus.current?.focus();
            }}
            aria-label="Close navigation"
          >
            ✕
          </button>
          {navigation.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => {
                setMenuOpen(false);
                previousFocus.current?.focus();
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
      <dialog
        ref={dialogRef}
        className="video-dialog"
        aria-label="XtaskR field imagery"
        onCancel={() => setVideoOpen(false)}
        onClose={() => {
          setVideoOpen(false);
          previousFocus.current?.focus();
        }}
      >
        <button
          aria-label="Close imagery viewer"
          onClick={() => setVideoOpen(false)}
        >
          ✕
        </button>
        {videoOpen && (
          <div className="rover-gallery" data-lenis-prevent>
            {["approach-harvest", "approach-field", "approach-orchard"].map(
              (asset, index) => (
                <img
                  key={asset}
                  src={`/assets/xtaskr/${asset}.webp`}
                  alt="XtaskR rover supporting outdoor agricultural work"
                  className={index === galleryIndex ? "gallery-active" : ""}
                />
              ),
            )}
            <div className="gallery-controls">
              <button
                type="button"
                aria-label="Previous product image"
                onClick={() => setGalleryIndex((index) => (index + 2) % 3)}
              >
                ←
              </button>
              <span>{galleryIndex + 1} / 3</span>
              <button
                type="button"
                aria-label="Next product image"
                onClick={() => setGalleryIndex((index) => (index + 1) % 3)}
              >
                →
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
