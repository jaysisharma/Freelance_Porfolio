"use client";

import { useEffect, useRef } from "react";
import { gsap, revealChildren } from "@/lib/anim";
import AppMock from "@/components/AppMock";

type Project = {
  kind: string;
  title: string;
  outcome: string;
  desc: string;
  tags: string[];
  img?: string;
  mock?: "phone" | "dashboard";
  link?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    kind: "Food & Grocery Delivery Platform",
    title: "Tukatuu",
    outcome: "One app for food and groceries — local commerce, end to end.",
    desc: "A comprehensive delivery platform combining food ordering and grocery shopping into one mobile ecosystem — separate customer and vendor apps, product & inventory management, authentication, order tracking, and real-time updates.",
    tags: ["Flutter", "Firebase", "GetX", "REST APIs", "Real-time"],
    mock: "phone",
    featured: true,
  },
  {
    kind: "Cloud SaaS Platform",
    title: "PropLog",
    outcome: "Property records that lived in spreadsheets, now one cloud dashboard.",
    desc: "A modern SaaS platform for property and asset management — cloud dashboard, centralized information, business workflow management, and a scalable architecture.",
    tags: ["SaaS", "Cloud Dashboard", "Property Management"],
    mock: "dashboard",
  },
  {
    kind: "Event Management App",
    title: "Event Order App",
    outcome: "Replaced paper order books for event teams.",
    desc: "A Flutter app that helps event businesses move to digital order creation, customer management, scheduling, tracking, and analytics — cutting manual processes and improving efficiency.",
    tags: ["Flutter", "Firebase", "GetX"],
    mock: "phone",
  },
  {
    kind: "Website Redesign",
    title: "Event Solution Nepal",
    outcome: "A modern online identity for an event company founded in 2014.",
    desc: "Redesigned and modernized the official website — modern responsive UI, performance optimization, mobile-friendly layouts, and improved navigation.",
    tags: ["Redesign", "Responsive UI", "Performance"],
    img: "/projects/eventsolutionnepal.jpg",
    link: "https://eventsolutionnepal.com.np",
  },
  {
    kind: "Business Website",
    title: "Loud & Clear",
    outcome: "Sound & lighting pros, presented as boldly as their shows.",
    desc: "Official business website focused on branding, service presentation, and accessibility — responsive design, service showcase, contact integration, and optimized performance.",
    tags: ["Branding", "Responsive", "Performance"],
    img: "/projects/loudandclear.jpg",
    link: "https://loudandclear.com.np",
  },
  {
    kind: "Brand & Website Development",
    title: "Eka Research",
    outcome: "A space-science organisation with a digital home to match.",
    desc: "Designed and developed the digital platform for Eka Research — presenting research initiatives, publications, and organizational information professionally, with thoughtful information architecture and performance optimization.",
    tags: ["Design", "Information Architecture", "Responsive"],
    img: "/projects/ekaresearch.jpg",
    link: "https://ekaresearch.org",
    featured: true,
  },
];

export default function Projects() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => revealChildren(root.current!), root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={root}>
      <div className="container">
        <div data-reveal>
          <span className="section-tag">Selected work</span>
          <h2 className="section-title">Real products, in production</h2>
          <p className="section-lead">
            Websites, apps, and platforms delivered for clients across event
            management, research, property, and delivery.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <div
              className={`project${p.featured ? " featured" : ""}`}
              key={p.title}
              data-reveal
            >
              <div className="project-media">
                {p.img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.img} alt={`${p.title} — website screenshot`} loading="lazy" />
                ) : (
                  <AppMock variant={p.mock!} />
                )}
              </div>
              <span className="project-kind">{p.kind}</span>
              <h3>{p.title}</h3>
              <p className="project-outcome">{p.outcome}</p>
              <p>{p.desc}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  className="project-link"
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.link.replace("https://", "")}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
