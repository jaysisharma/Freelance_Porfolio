"use client";

import { useEffect, useRef } from "react";
import { gsap, revealChildren } from "@/lib/anim";

const check = (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M2 8.5l4 4L14 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type Engagement = {
  name: string;
  tagline: string;
  idealFor: string;
  includes: string[];
  price: string;
  timeline: string;
  cta: string;
  featured?: boolean;
};

// TODO(Jaysi): these "from" prices are placeholder anchors — set them to your
// real floor for each engagement. An anchor filters out tire-kickers; the
// exact figure still comes from the fixed written quote.

const engagements: Engagement[] = [
  {
    name: "Business Website",
    tagline: "A fast, modern website that turns visitors into customers.",
    idealFor: "Companies that need a professional online presence — or a dated site brought up to standard.",
    includes: [
      "Design you approve in Figma first",
      "Responsive build — mobile to desktop",
      "Contact, WhatsApp & map integration",
      "SEO & performance optimization",
      "Hosting & domain setup",
      "30 days of post-launch fixes, free",
    ],
    price: "From $800",
    timeline: "Typically 2–4 weeks",
    cta: "Start a website project",
  },
  {
    name: "Mobile App or SaaS MVP",
    tagline: "Your product idea, designed, built, and live in stores.",
    idealFor: "Startups and businesses ready to digitalize operations or launch a product.",
    includes: [
      "Discovery call & scoped written plan",
      "UI/UX design in Figma",
      "Flutter app for Android & iOS",
      "Firebase backend, auth & notifications",
      "Play Store / App Store deployment",
      "Weekly demos — watch it take shape",
    ],
    price: "From $3,000",
    timeline: "Typically 6–10 weeks",
    cta: "Plan my app",
    featured: true,
  },
  {
    name: "Ongoing Partnership",
    tagline: "A developer on call, without hiring full-time.",
    idealFor: "Businesses with a live product that needs care, updates, and steady improvement.",
    includes: [
      "Monthly maintenance & monitoring",
      "New features, prioritized with you",
      "Bug fixes with priority response",
      "App store & dependency updates",
      "Monthly progress report",
      "Pause or stop any month — no lock-in",
    ],
    price: "From $400/mo",
    timeline: "Monthly retainer",
    cta: "Discuss a retainer",
  },
];

export default function Engagements() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => revealChildren(root.current!), root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="engagements" className="engage-section" ref={root}>
      <div className="container">
        <div data-reveal>
          <span className="section-tag">Work with me</span>
          <h2 className="section-title">Three ways to get started</h2>
          <p className="section-lead">
            Every engagement starts with a free discovery call and a fixed
            written quote — no hourly meter, no surprises.
          </p>
        </div>
        <div className="engage-grid">
          {engagements.map((e, i) => (
            <div
              className={`engage-card${e.featured ? " featured" : ""}`}
              key={e.name}
              data-reveal
              data-delay={i * 0.1}
            >
              {e.featured && <span className="engage-badge">Most requested</span>}
              <h3>{e.name}</h3>
              <p className="engage-tagline">{e.tagline}</p>
              <p className="engage-ideal">
                <b>Ideal for:</b> {e.idealFor}
              </p>
              <ul className="engage-list">
                {e.includes.map((item) => (
                  <li key={item}>
                    {check} {item}
                  </li>
                ))}
              </ul>
              <div className="engage-foot">
                <span className="engage-time">
                  <b className="engage-price">{e.price}</b> · {e.timeline}
                </span>
                <a
                  className={`btn ${e.featured ? "btn-primary" : "btn-ghost"}`}
                  href="#contact"
                >
                  {e.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="engage-note" data-reveal>
          Not sure which fits? <a href="#contact">Tell me what you&apos;re trying
          to do</a> — I&apos;ll recommend the simplest option, even if it&apos;s
          the smaller one.
        </p>
      </div>
    </section>
  );
}
