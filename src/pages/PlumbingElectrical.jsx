import React, { useState, useRef } from "react";

/** Lightweight Carousel (no deps) */
function Carousel({ images = [], aspect = "16/9", alt = "photo" }) {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef(null);

  const go = (d) => {
    const n = images.length;
    if (n === 0) return;
    setIdx((i) => (i + d + n) % n);
  };

  // swipe
  let startX = 0, deltaX = 0;
  const onTouchStart = (e) => { startX = e.touches[0].clientX; };
  const onTouchMove = (e) => { deltaX = e.touches[0].clientX - startX; };
  const onTouchEnd = () => {
    if (Math.abs(deltaX) > 40) go(deltaX < 0 ? 1 : -1);
    startX = 0; deltaX = 0;
  };

  return (
    <div className="relative rounded-xl overflow-hidden shadow-md" style={{ aspectRatio: aspect }}>
      <img
        key={idx}
        src={`/services/plumbing-electrical/${images[idx]}`}
        alt={alt}
        className="w-full h-full object-cover transition-opacity duration-300"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      />
      {images.length > 1 && (
        <>
          <button
            aria-label="prev"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full w-9 h-9 grid place-items-center"
          >‹</button>
          <button
            aria-label="next"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full w-9 h-9 grid place-items-center"
          >›</button>
        </>
      )}
    </div>
  );
}

const red = "#8B0D0F";

export default function PlumbingElectrical() {
  const sections = [
    {
      title: "Electrical Upgrades & Rewiring",
      text: "From full rewiring to additional power points, lighting layouts and load balancing for high‑power appliances or EV chargers. We redesign circuits for safety, efficiency and future expansion.",
      images: ["slide-01.jpg","slide-02.jpg","slide-03.jpg"]
    },
    {
      title: "Plumbing Works & Water Systems",
      text: "Hot and cold water lines, pipe replacement, concealed routing, bathroom and kitchen plumbing, water heaters and pressure management with neat finishes and durable fittings.",
      images: ["slide-04.jpg","slide-05.jpg"]
    },
    {
      title: "Smart, Safety & Compliance",
      text: "DB box upgrades, surge protection, smart switches/sensors, RCD/ELCB protection and proper earthing. We build to code and can assist with inspections and documentation.",
      images: ["slide-06.jpg","slide-07.jpg"]
    },
    {
      title: "Maintenance & Emergency Support",
      text: "Leak detection, choked lines, faulty circuits and troubleshooting. Preventive maintenance plans available to keep your home systems reliable and worry‑free.",
      images: ["slide-08.jpg","slide-09.jpg"]
    }
  ];

  return (
    <main className="container-xl px-4 md:px-6 lg:px-8 py-12">
      <header className="text-center mb-10 md:mb-14">
        <h1 className="nav-serif text-4xl md:text-6xl font-semibold mb-4" style={{ color: red }}>
          Plumbing & Electrical
        </h1>
        <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
          Reliable plumbing and safe electrical systems are the backbone of a comfortable home.
          We design, install and maintain end‑to‑end solutions with neat workmanship and strict safety practices.
        </p>
      </header>

      {/* Intro banner (optional image) */}
      <section className="mb-16">
        <div className="rounded-2xl overflow-hidden shadow">
          <img
            src="/services/plumbing-electrical/slide-01.jpg"
            alt="Plumbing and Electrical banner"
            className="w-full h-[38vh] md:h-[52vh] object-cover"
          />
        </div>
      </section>

      {/* Sections */}
      <div className="space-y-12 md:space-y-20">
        {sections.map((s, i) => (
          <section key={s.title} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <h2 className="nav-serif text-3xl md:text-4xl font-semibold text-slate-800 mb-4">{s.title}</h2>
              <p className="text-slate-700 leading-7">{s.text}</p>
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <Carousel images={s.images} alt={s.title} />
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="mt-16 md:mt-24 text-center">
        <p className="text-slate-600 mb-6">
          Planning a renovation or need urgent troubleshooting? Tell us your timeline and requirements —
          we’ll recommend a practical plan and quote.
        </p>
        <a
          href="https://wa.me/6596423573"
          className="inline-block px-6 py-3 rounded-full text-white"
          style={{ backgroundColor: red }}
        >
          WhatsApp Us
        </a>
      </section>
    </main>
  );
}
