"use client";

import { useEffect, useRef } from "react";
import { gsap, revealChildren } from "@/lib/anim";

const services = [
  {
    title: "Mobile App Development",
    desc: "Cross-platform Flutter apps for Android & iOS — customer apps, vendor apps, internal tools — built with Material Design and GetX.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10.5 18.5h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Website Design & Development",
    desc: "Modern, fast, responsive business websites that build your brand, present your services, and convert visitors into customers.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="2.5" y="4" width="19" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2.5 8.5h19M6 6.2h.01M8.5 6.2h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "SaaS & Business Digitalization",
    desc: "Replace paperwork and manual processes with cloud platforms — dashboards, multi-user workflows, analytics, and reporting, like my property management SaaS PropLog.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M7 17a4.5 4.5 0 1 1 .7-8.95A6 6 0 0 1 19 9.5 3.75 3.75 0 0 1 18 17H7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Backend & Integrations",
    desc: "Firebase authentication, database, storage, and push notifications — plus payments, maps, or your existing systems wired cleanly into your product.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l8 4-8 4-8-4 8-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M4 12l8 4 8-4M4 17l8 4 8-4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" opacity="0.55" />
      </svg>
    ),
  },
  {
    title: "Payment Integration",
    desc: "eSewa, Khalti, and international payments wired into your app or website — a secure, tested checkout your customers already know and trust.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="2.5" y="5" width="19" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2.5 9.5h19" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6 14.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Maintenance & Support",
    desc: "Your product stays fast, secure, and up to date after launch — bug fixes, app store updates, monitoring, and new features on a simple monthly plan.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l7 3v5c0 4.6-3 8.6-7 10-4-1.4-7-5.4-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 11.5l2 2 4-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Services() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => revealChildren(root.current!), root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={root}>
      <div className="container">
        <div data-reveal>
          <span className="section-tag">Services</span>
          <h2 className="section-title">What I can do for your business</h2>
          <p className="section-lead">
            One freelancer, full coverage — from the first sketch to a product
            running in production.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service" key={s.title} data-reveal data-delay={(i % 3) * 0.1}>
              <div className="s-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
