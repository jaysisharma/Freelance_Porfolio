"use client";

import { useEffect, useRef } from "react";
import { gsap, revealChildren } from "@/lib/anim";

const faqs = [
  {
    q: "How much does a website or app cost?",
    a: "It depends on scope — a business website is a much smaller project than a two-sided mobile app. After a free discovery call I'll send you a fixed written quote, so there are no surprises and no hourly meter running.",
  },
  {
    q: "How long will my project take?",
    a: "A typical business website takes 2–4 weeks. Mobile apps usually run 6–10 weeks depending on features. You'll get a timeline with milestones before we start, and weekly demos so you can see progress yourself.",
  },
  {
    q: "I'm not technical — is that a problem?",
    a: "Not at all; most of my clients aren't. We talk about your business and your customers, in plain language. I handle the technical decisions and explain the trade-offs only when they affect your budget or timeline.",
  },
  {
    q: "What happens after launch?",
    a: "I don't disappear. Every project includes post-launch support for bug fixes, and I offer ongoing maintenance for updates, new features, hosting, and app store releases.",
  },
  {
    q: "How do we communicate during the project?",
    a: "Whatever works for you — WhatsApp, email, or calls. You'll hear from me at least weekly with a demo or progress update, and I reply to messages within 24 hours.",
  },
];

export default function Faq() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => revealChildren(root.current!), root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" className="faq-section" ref={root}>
      <div className="container">
        <div data-reveal>
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">Questions businesses ask me</h2>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details className="faq-item" key={f.q} data-reveal data-delay={i * 0.06}>
              <summary>
                {f.q}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
