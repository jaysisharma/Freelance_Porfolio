// Stylized line-art stand-ins for products without a public site to screenshot
export default function AppMock({ variant }: { variant: "phone" | "dashboard" }) {
  if (variant === "dashboard") {
    return (
      <svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dashboard mockup">
        <rect width="480" height="270" fill="var(--bg)" />
        <rect x="60" y="28" width="360" height="242" rx="12" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2" />
        <line x1="60" y1="58" x2="420" y2="58" stroke="var(--ink)" strokeWidth="2" />
        <circle cx="80" cy="43" r="4" fill="var(--accent)" />
        <circle cx="95" cy="43" r="4" fill="var(--ink)" opacity="0.25" />
        <rect x="78" y="74" width="80" height="11" rx="5.5" fill="var(--accent)" />
        <rect x="78" y="98" width="100" height="64" rx="10" fill="var(--accent-soft)" />
        <rect x="90" y="110" width="48" height="9" rx="4.5" fill="var(--accent)" />
        <rect x="90" y="128" width="66" height="7" rx="3.5" fill="var(--line)" />
        <rect x="190" y="98" width="100" height="64" rx="10" fill="var(--bg)" stroke="var(--line)" />
        <rect x="302" y="98" width="100" height="64" rx="10" fill="var(--bg)" stroke="var(--line)" />
        <polyline
          points="84,234 130,206 176,220 230,186 286,200 340,176 398,188"
          stroke="var(--accent)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <rect x="78" y="180" width="60" height="8" rx="4" fill="var(--line)" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mobile app mockup">
      <rect width="480" height="270" fill="var(--bg)" />
      <g>
        <rect x="148" y="26" width="120" height="280" rx="22" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2.5" />
        <rect x="186" y="38" width="44" height="6" rx="3" fill="var(--line)" />
        <rect x="162" y="58" width="92" height="48" rx="10" fill="var(--accent-soft)" />
        <rect x="172" y="69" width="48" height="9" rx="4.5" fill="var(--accent)" />
        <rect x="172" y="86" width="62" height="6" rx="3" fill="var(--line)" />
        <rect x="162" y="116" width="42" height="42" rx="9" fill="var(--bg)" stroke="var(--line)" />
        <rect x="212" y="116" width="42" height="42" rx="9" fill="var(--bg)" stroke="var(--line)" />
        <rect x="162" y="168" width="92" height="8" rx="4" fill="var(--line)" />
        <rect x="162" y="184" width="70" height="8" rx="4" fill="var(--line)" opacity="0.6" />
        <rect x="162" y="208" width="92" height="28" rx="14" fill="var(--accent)" />
        <rect x="190" y="218" width="36" height="8" rx="4" fill="#fff" />
      </g>
      <g>
        <rect x="282" y="64" width="110" height="250" rx="20" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2" opacity="0.9" />
        <rect x="296" y="84" width="82" height="40" rx="9" fill="var(--bg)" stroke="var(--line)" />
        <rect x="296" y="132" width="82" height="40" rx="9" fill="var(--bg)" stroke="var(--line)" />
        <rect x="296" y="180" width="82" height="8" rx="4" fill="var(--line)" />
        <rect x="296" y="204" width="82" height="26" rx="13" fill="var(--ink)" />
        <rect x="318" y="213" width="38" height="8" rx="4" fill="var(--cream)" />
      </g>
      <circle cx="108" cy="200" r="26" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2" />
      <path d="M96 200l8 8 16-16" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
