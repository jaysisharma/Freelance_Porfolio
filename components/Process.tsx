"use client";

import { useEffect, useRef } from "react";
import { gsap, revealChildren, primePath } from "@/lib/anim";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We talk about your business, goals, and users. I turn your idea into a clear, scoped plan.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Wireframes and UI design in Figma, so you see and approve the product before a line of code.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Clean, maintainable code with regular demos — you watch the product take shape week by week.",
  },
  {
    num: "04",
    title: "Launch & support",
    desc: "Deployment to stores, hosting, or your VPS — plus support and improvements after launch.",
  },
];

const stats = [
  { value: 100, suffix: "%", label: "Projects delivered & in production" },
  { value: 1, suffix: "", label: "Person, end to end — no handoffs" },
  { value: 24, suffix: "h", label: "Max. time to hear back" },
  { value: 6, suffix: "+", label: "Industries served" },
];

export default function Process() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealChildren(root.current!);

      // the connector line draws itself as the section scrolls into view
      const line = root.current!.querySelector<SVGPathElement>(".process-path");
      if (line) {
        primePath(line);
        gsap.to(line, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".process-grid",
            start: "top 80%",
            end: "top 35%",
            scrub: 1,
          },
        });
      }

      // counters tick up when the stats band enters
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        const suffix = el.dataset.suffix ?? "";
        const obj = { n: 0 };
        gsap.to(obj, {
          n: target,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
          onUpdate: () => {
            el.textContent = `${Math.round(obj.n)}${suffix}`;
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="process-section" ref={root}>
      <div className="container">
        <div data-reveal>
          <span className="section-tag">How I work</span>
          <h2 className="section-title">A simple, transparent process</h2>
          <p className="section-lead">
            You always know where your project stands — no surprises, no jargon.
          </p>
        </div>
        <div className="process-grid">
          <svg className="process-svg" viewBox="0 0 1000 4" preserveAspectRatio="none" aria-hidden="true">
            <path className="process-path" d="M0 2 H1000" fill="none" />
          </svg>
          {steps.map((s, i) => (
            <div className="step" key={s.num} data-reveal data-delay={i * 0.12}>
              <div className="step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="stats-band">
          {stats.map((s, i) => (
            <div className="stat" key={s.label} data-reveal data-delay={i * 0.08}>
              <b data-count={s.value} data-suffix={s.suffix}>
                0{s.suffix}
              </b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
