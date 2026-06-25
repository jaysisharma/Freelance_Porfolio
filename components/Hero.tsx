"use client";

import { useEffect, useRef } from "react";
import { gsap, primePath } from "@/lib/anim";

const check = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M2 8.5l4 4L14 4"
      stroke="#1d9e5f"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // intro: copy rises in
      gsap.fromTo(
        ".hero-copy > *",
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.09, duration: 0.85, ease: "power3.out" }
      );

      // draw the SVG strokes on load
      gsap.utils.toArray<SVGPathElement>(".draw").forEach((p, i) => {
        primePath(p);
        gsap.to(p, {
          strokeDashoffset: 0,
          duration: 1.4,
          ease: "power2.inOut",
          delay: 0.4 + i * 0.18,
        });
      });

      // idle float on the inner groups
      gsap.to(".float-a", { y: -12, duration: 3.2, yoyo: true, repeat: -1, ease: "sine.inOut" });
      gsap.to(".float-b", { y: -16, duration: 4, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 0.6 });
      gsap.to(".float-c", { y: -10, duration: 2.8, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 0.3 });

      // scroll-driven motion: layers drift apart as you scroll past the hero
      const scrub = {
        trigger: root.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      };
      gsap.to(".par-browser", { y: 70, x: -28, scrollTrigger: scrub });
      gsap.to(".par-phone", { y: -90, x: 24, rotate: 4, scrollTrigger: scrub });
      gsap.to(".par-code", { y: -140, scrollTrigger: scrub });
      gsap.to(".par-badges", { y: 110, scrollTrigger: scrub });
      gsap.to(".orbit", {
        rotate: 120,
        transformOrigin: "50% 50%",
        scrollTrigger: scrub,
      });
      gsap.to(".hero-copy", { y: 60, opacity: 0.25, scrollTrigger: scrub });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <header className="hero" id="top" ref={root}>
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="dot" /> Freelancer · Available for new projects
          </div>
          <h1>
            I help businesses go digital with{" "}
            <span className="accent">apps, websites &amp; SaaS</span>
          </h1>
          <p className="hero-sub">
            Hi, I&apos;m <strong>Jaysi Sharma</strong> — a freelance{" "}
            <strong>Flutter &amp; Full Stack developer</strong>. From idea to
            launch, I build the mobile apps, business websites, and cloud
            platforms that move your business forward.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Start a project
            </a>
            <a className="btn btn-ghost" href="#projects">
              See my work
            </a>
          </div>
          <div className="hero-trust">
            <div className="trust-item">{check} End-to-end delivery</div>
            <div className="trust-item">{check} Clear communication</div>
            <div className="trust-item">{check} Post-launch support</div>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <svg viewBox="0 0 560 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="browser-clip">
                <rect x="60" y="128" width="286" height="166" rx="12" ry="12" />
              </clipPath>
              <clipPath id="phone-clip">
                <rect x="340.5" y="172" width="141" height="246" rx="16" ry="16" />
              </clipPath>
            </defs>

            {/* orbit ring — rotates with scroll */}
            <g className="orbit">
              <circle
                cx="280"
                cy="250"
                r="218"
                stroke="var(--line)"
                strokeWidth="1.5"
                strokeDasharray="5 9"
              />
              <circle cx="280" cy="32" r="6" fill="var(--accent)" />
              <circle cx="486" cy="320" r="5" fill="var(--ink)" />
              <circle cx="76" cy="330" r="4" fill="var(--accent)" />
            </g>

            {/* browser window */}
            <g className="par-browser">
              <g className="float-a">
                <rect x="58" y="96" width="290" height="200" rx="14" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2" />
                <line x1="58" y1="126" x2="348" y2="126" stroke="var(--ink)" strokeWidth="2" />
                <circle cx="74" cy="111" r="4" fill="#ff5f56" />
                <circle cx="88" cy="111" r="4" fill="#ffbd2e" />
                <circle cx="102" cy="111" r="4" fill="#27c93f" />
                <rect x="122" y="104" width="206" height="14" rx="7" fill="var(--bg)" stroke="var(--line)" strokeWidth="1" />
                
                {/* Real dashboard image */}
                <foreignObject x="60" y="128" width="286" height="166" clipPath="url(#browser-clip)">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/hero_dashboard.png"
                    alt="SaaS Dashboard Screenshot"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </foreignObject>
              </g>
            </g>

            {/* phone */}
            <g className="par-phone">
              <g className="float-b">
                <rect x="338" y="148" width="146" height="280" rx="26" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2.5" />
                <rect x="386" y="158" width="50" height="6" rx="3" fill="var(--line)" />
                
                {/* Real phone UI image */}
                <foreignObject x="340.5" y="172" width="141" height="246" clipPath="url(#phone-clip)">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/hero_phone.png"
                    alt="Mobile App UI Screenshot"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </foreignObject>
              </g>
            </g>

            {/* code card */}
            <g className="par-code">
              <g className="float-c">
                <rect x="92" y="324" width="200" height="116" rx="14" fill="var(--ink)" />
                <rect x="112" y="346" width="56" height="10" rx="5" fill="var(--accent)" />
                <rect x="174" y="346" width="72" height="10" rx="5" fill="#5e5c52" />
                <rect x="128" y="366" width="80" height="10" rx="5" fill="var(--cream)" opacity="0.8" />
                <rect x="214" y="366" width="44" height="10" rx="5" fill="#5e5c52" />
                <rect x="128" y="386" width="52" height="10" rx="5" fill="var(--accent)" opacity="0.85" />
                <rect x="186" y="386" width="62" height="10" rx="5" fill="#5e5c52" />
                <rect x="112" y="406" width="38" height="10" rx="5" fill="#5e5c52" />
              </g>
            </g>

            {/* badges */}
            <g className="par-badges">
              <g className="float-b">
                <circle cx="470" cy="92" r="28" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2" />
                <path
                  className="draw"
                  d="M458 92l8 8 16-16"
                  stroke="var(--accent)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g className="float-a">
                <circle cx="62" cy="62" r="26" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2" />
                <path
                  d="M68 50L52 66l5 5 16-16-5-5zM57 71l5 5 11-11-5-5-11 11z"
                  fill="var(--accent)"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </header>
  );
}
