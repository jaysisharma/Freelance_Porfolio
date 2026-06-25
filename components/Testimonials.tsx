"use client";

import { useEffect, useRef } from "react";
import { gsap, revealChildren } from "@/lib/anim";

type Quote = {
  text: string;
  who: string;
  role: string;
  link?: string;
};

// TODO(Jaysi): These are PLACEHOLDER quotes — replace each with real words
// from your clients before publishing. Quotes that mention a specific result
// ("orders that took 20 minutes now take 2") persuade far more than praise.
const quotes: Quote[] = [
  {
    text: "Jaysi rebuilt our website from the ground up. It finally looks like the company we are — modern, fast, and easy for our customers to use.",
    who: "Event Solution Nepal",
    role: "Website redesign",
    link: "https://eventsolutionnepal.com.np",
  },
  {
    text: "Clear communication from day one. We saw designs before any code was written, and the site launched exactly as promised.",
    who: "Loud & Clear",
    role: "Business website",
    link: "https://loudandclear.com.np",
  },
  {
    text: "He understood that we needed more than a website — an organised platform for our research and publications. Delivered professionally.",
    who: "Eka Research",
    role: "Platform development",
    link: "https://ekaresearch.org",
  },
  {
    text: "Orders that took twenty minutes in a paper book now take two in the app — creation, scheduling, and reports, all in one place.",
    who: "Event Order App",
    role: "Business digitalization",
  },
  {
    text: "Months after launch he still answers within a day. Updates, fixes, small improvements — it feels like having a developer on the team.",
    who: "Retainer client",
    role: "Maintenance & support",
  },
];

function Card({ q }: { q: Quote }) {
  return (
    <figure className="testi-card">
      <blockquote className="testi-quote">{q.text}</blockquote>
      <figcaption className="testi-meta">
        <span className="testi-avatar" aria-hidden="true">
          {q.who.split(" ").map((w) => w[0]).slice(0, 2).join("")}
        </span>
        <div className="testi-id">
          <b>
            {q.link ? (
              // some clients prefer not to reveal the project — only link
              // the name when there's a public site to show
              <a href={q.link} target="_blank" rel="noopener noreferrer">
                {q.who}
              </a>
            ) : (
              q.who
            )}
          </b>
          <span>{q.role}</span>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => revealChildren(root.current!), root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" className="dark-section" ref={root}>
      <div className="container">
        <div data-reveal>
          <span className="section-tag">What clients say</span>
          <h2 className="section-title">Don&apos;t take my word for it</h2>
        </div>
      </div>
      <div className="testi-marquee" data-reveal>
        <div className="testi-track">
          {/* content is rendered twice for a seamless infinite loop */}
          <div className="testi-set">
            {quotes.map((q) => (
              <Card q={q} key={q.who} />
            ))}
          </div>
          <div className="testi-set" aria-hidden="true">
            {quotes.map((q) => (
              <Card q={q} key={`${q.who}-dup`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
