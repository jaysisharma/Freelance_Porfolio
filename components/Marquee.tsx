// Social proof strip — clients & shipped products, not tech jargon
const items = [
  "Event Solution Nepal",
  "Loud & Clear",
  "Eka Research",
  "PropLog",
  "Tukatuu",
  "Event Order App",
];

export default function Marquee() {
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee">
        {[...items, ...items, ...items].map((item, i) => (
          <span className="m-item" key={i}>
            <span className="m-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
