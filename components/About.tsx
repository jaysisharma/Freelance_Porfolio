"use client";

import { useEffect, useRef } from "react";
import { gsap, revealChildren } from "@/lib/anim";

const industries = [
  "Event Management",
  "Research Organizations",
  "Property Management",
  "Food & Grocery Delivery",
  "Business Services",
  "SaaS Platforms",
];

export default function About() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => revealChildren(root.current!), root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={root}>
      <div className="container about-grid">
        <div className="about-photo" data-reveal>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/me.png" alt="Jaysi Sharma" />
          <div className="about-loc">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            Based in Nepal · working worldwide
          </div>
        </div>
        <div className="about-text">
          <div data-reveal>
            <span className="section-tag">About me</span>
            <h2 className="section-title">The person behind the projects</h2>
          </div>
          <p data-reveal>
            I&apos;m <strong>Jaysi Sharma</strong>, a freelance Flutter and Full
            Stack developer. I&apos;ve worked with organizations, research
            institutes, and startups to establish their digital presence and
            streamline operations through technology — turning ideas into
            scalable products that solve real problems.
          </p>
          <p data-reveal>
            When you hire me, you work with me directly — the person who
            designs, builds, and ships your product. No handoffs, no agencies,
            no telephone game.
          </p>
          <div data-reveal>
            <div className="industries">
              {industries.map((ind) => (
                <span className="industry" key={ind}>
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
