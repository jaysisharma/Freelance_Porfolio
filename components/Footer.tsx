// TODO(Jaysi): verify these are your real profile URLs before publishing —
// business clients will google you; broken or wrong links cost trust.
const socials = [
  ["GitHub", "https://github.com/jaysisharma"],
  ["LinkedIn", "https://www.linkedin.com/in/jaysisharma"],
  ["Email", "mailto:jaisysharma9817@gmail.com"],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Jaysi Sharma — Freelance Developer</span>
        <nav className="footer-links" aria-label="Profiles">
          {socials.map(([label, href]) => (
            <a
              key={label}
              href={href}
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {label}
            </a>
          ))}
        </nav>
        <span className="footer-stack">
          Built with: Flutter · Dart · Firebase · GetX · REST APIs · Next.js
        </span>
      </div>
    </footer>
  );
}
