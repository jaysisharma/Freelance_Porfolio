"use client";

import { FormEvent, useEffect, useRef } from "react";
import { gsap, revealChildren, primePath } from "@/lib/anim";

const EMAIL = "jaisysharma9817@gmail.com";
// TODO(Jaysi): put your real WhatsApp number here in international format,
// digits only — e.g. "9779812345678"
const WHATSAPP = "977XXXXXXXXXX";

export default function Contact() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      revealChildren(root.current!);
      const path = root.current!.querySelector<SVGPathElement>(".contact-underline path");
      if (path) {
        primePath(path);
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: { trigger: path, start: "top 85%", once: true },
        });
      }
    }, root);
    return () => ctx.revert();
  }, []);

  // No backend needed: compose the inquiry into the visitor's mail client.
  // Swap for a Formspree/API endpoint later if you want server-side handling.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Project inquiry — ${data.get("type")} (${data.get("name")})`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email / phone: ${data.get("contact")}`,
      `Project type: ${data.get("type")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="contact-section" ref={root}>
      <div className="container">
        <div className="contact-card" data-reveal>
          <span className="section-tag" style={{ justifyContent: "center" }}>
            Let&apos;s talk
          </span>
          <h2>Have a project in mind?</h2>
          <svg className="contact-underline" width="220" height="14" viewBox="0 0 220 14" aria-hidden="true">
            <path d="M4 9C44 3 96 2 216 8" />
          </svg>
          <p>
            Tell me about your idea and I&apos;ll get back to you{" "}
            <strong>within 24 hours</strong> with a plan, a timeline, and an
            honest opinion.
          </p>

          <form className="contact-form" onSubmit={onSubmit}>
            <input name="name" type="text" placeholder="Your name" required />
            <input name="contact" type="text" placeholder="Email or phone" required />
            <select name="type" defaultValue="Business website" required>
              <option>Business website</option>
              <option>Mobile app</option>
              <option>SaaS / web platform</option>
              <option>Ongoing maintenance / retainer</option>
              <option>Something else</option>
            </select>
            <textarea name="message" rows={4} placeholder="What are you trying to build? A sentence or two is plenty." required />
            <div className="contact-actions">
              <button className="btn btn-primary" type="submit">
                Send inquiry
              </button>
              <a
                className="btn btn-whatsapp"
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Jaysi, I have a project in mind…")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.6.2-.8l.4-.5c.1-.2.2-.3.3-.5v-.5c0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3a3 3 0 0 0-1 2.2c0 1.3 1 2.6 1.1 2.8.1.2 1.9 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2 0-.1-.2-.2-.4-.3z" />
                </svg>
                WhatsApp me
              </a>
            </div>
          </form>

          <div className="contact-alt">
            or email directly: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
          <div className="contact-quote">
            &quot;Creating scalable digital products that empower businesses
            through modern technology.&quot;
          </div>
        </div>
      </div>
    </section>
  );
}
