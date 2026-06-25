import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

export { gsap, ScrollTrigger };

/** Fade-and-rise reveal for every [data-reveal] element inside scope. */
export function revealChildren(scope: HTMLElement) {
  scope.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
    gsap.fromTo(
      el,
      { y: 26, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        delay: parseFloat(el.dataset.delay ?? "0"),
        scrollTrigger: { trigger: el, start: "top 86%", once: true },
      }
    );
  });
}

/** Prepare an SVG path for draw-on animation and return its length. */
export function primePath(path: SVGPathElement | SVGPolylineElement) {
  const len = (path as SVGPathElement).getTotalLength();
  path.style.strokeDasharray = `${len}`;
  path.style.strokeDashoffset = `${len}`;
  return len;
}
