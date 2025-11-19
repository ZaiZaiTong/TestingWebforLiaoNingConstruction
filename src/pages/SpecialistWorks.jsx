import React, { useRef, useState, useEffect } from "react";

/** Lightweight Carousel (no deps) */
function Carousel({ images, className = "" }) {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef(null);
  const clamp = (n) => (n + images.length) % images.length;
  const go = (n) => setIdx((i) => clamp(i + n));

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let x0 = null;
    const onDown = (e) => (x0 = e.touches ? e.touches[0].clientX : e.clientX);
    const onUp = (e) => {
      if (x0 === null) return;
      const x1 = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
      const dx = x1 - x0;
      if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
      x0 = null;
    };
    el.addEventListener("pointerdown", onDown, { passive: true });
    el.addEventListener("pointerup", onUp, { passive: true });
    el.addEventListener("touchstart", onDown, { passive: true });
    el.addEventListener("touchend", onUp, { passive: true });
    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("touchstart", onDown);
      el.removeEventListener("touchend", onUp);
    };
  }, [images.length]);

  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-lg ${className}`}>
      <div ref={trackRef} className="aspect-[4/3] bg-[#2f0f0f]">
        <img
          key={images[idx]}
          src={images[idx]}
          alt=""
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
      <button
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/80 hover:bg-white text-black flex items-center justify-center"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/80 hover:bg-white text-black flex items-center justify-center"
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}

const H1 = ({ children }) => (
  <h1 className="text-center nav-serif text-[44px] md:text-[54px] leading-tight font-semibold tracking-wide" style={{ color: '#8B0D0F' }}>
    {children}
  </h1>
);
const P = ({ children, className="" }) => (
  <p className={`text-[18px] leading-8 text-neutral-700 ${className}`}>{children}</p>
);

const heroText = "Precision-driven construction works requiring specialist skills, certified methods and technical coordination. From structural reinforcements to façade upgrades, we deliver safe, compliant and long-lasting solutions.";

const sectionData = [
  {
    title: "Structural Reinforcement",
    text: "Strengthening works for landed homes and low-rise buildings, including beam enhancements, column jacketing, removal of load-bearing walls, and preparation for extensions. All designs are vetted by Qualified Professionals and executed to structural safety standards.",
    images: ["slide-01.jpg", "slide-02.jpg", "slide-03.jpg"]
  },
  {
    title: "Façade & Envelope Works",
    text: "External walls, claddings and weatherproofing solutions to rejuvenate existing homes. We handle re-cladding, insulation upgrades, moisture protection and architectural detailing for long-term performance.",
    images: ["slide-04.jpg", "slide-05.jpg"]
  },
  {
    title: "Roofing & Waterproofing",
    text: "Complete roofing solutions including metal roofs, tile replacement, membrane waterproofing and drainage redesign. Our systems withstand heavy tropical rainfall and ensure long-term leak protection.",
    images: ["slide-06.jpg", "slide-07.jpg"]
  },
  {
    title: "Metal Fabrication",
    text: "Precision-made steel, aluminium and mild-steel works — staircases, railings, gates, pergolas, structural frames and architectural features. Fabricated in-house and installed with exact tolerances.",
    images: ["slide-08.jpg", "slide-09.jpg"]
  },
  {
    title: "External & Landscape Structures",
    text: "Retaining walls, drainage upgrades, external staircases, car porches, driveways and garden structures. Built to withstand ground movement and heavy use.",
    images: ["slide-10.jpg", "slide-11.jpg"]
  },
];

const img = (name) => `/services/specialist-works/${name}`;

export default function MetalRoofing() {
  return (
    <main className="pb-20">
      <section className="container-xl pt-14 md:pt-20">
        <p className="text-center uppercase tracking-[0.28em] text-xs md:text-sm text-[#8B0D0F] mb-4">
          SERVICES · Specialist Works
        </p>
        <H1>Specialist Works</H1>
        <p className="text-center text-neutral-600 text-lg md:text-xl mt-6 max-w-4xl mx-auto">
          {heroText}
        </p>
      </section>

      <section className="container-xl mt-12 md:mt-16 space-y-20">
        {sectionData.map((s, i) => (
          <div
            key={s.title}
            className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 ? "md:flex-row-reverse" : ""}`}
          >
            <div className={`${i % 2 ? "md:order-2" : ""}`}>
              <h2 className="nav-serif text-3xl md:text-4xl mb-4 text-neutral-900">{s.title}</h2>
              <P>{s.text}</P>
            </div>
            <div className={`${i % 2 ? "md:order-1" : ""}`}>
              <Carousel images={s.images.map(img)} />
            </div>
          </div>
        ))}
      </section>

      <section className="container-xl mt-16">
        <h3 className="nav-serif text-2xl mb-3 text-neutral-900">Useful References</h3>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700">
          <li><a className="underline hover:text-neutral-900" href="https://www1.bca.gov.sg/" target="_blank" rel="noreferrer">BCA (Building and Construction Authority)</a></li>
          <li><a className="underline hover:text-neutral-900" href="https://www.ura.gov.sg/" target="_blank" rel="noreferrer">URA Guideline Portal</a></li>
        </ul>
      </section>
    </main>
  );
}