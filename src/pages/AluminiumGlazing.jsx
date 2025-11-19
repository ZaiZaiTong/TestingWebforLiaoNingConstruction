import React, { useState, useMemo } from "react";

/**
 * Lightweight Carousel with no external dependencies.
 * - arrows only
 * - swipe on mobile
 * usage: <Carousel images={["/path/a.jpg","/path/b.jpg"]} alt="Decorative Screens" />
 */
function Carousel({ images = [], alt = "", className = "" }) {
  const [idx, setIdx] = useState(0);
  const total = images.length;
  const clamp = (n) => (n + total) % total;

  const go = (step) => setIdx((i) => clamp(i + step));

  // swipe support
  const [touchStart, setTouchStart] = useState(null);
  const onTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStart == null) return;
    const delta = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(delta) > 40) {
      go(delta > 0 ? -1 : 1);
    }
    setTouchStart(null);
  };

  if (!total) return null;

  return (
    <div
      className={
        "relative overflow-hidden rounded-2xl bg-neutral-900/5 " + className
      }
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <img
        src={images[idx]}
        alt={alt}
        className="w-full h-full object-cover block"
        loading="lazy"
      />

      {/* left arrow */}
      <button
        onClick={() => go(-1)}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-neutral-800 w-9 h-9 rounded-full grid place-items-center shadow"
      >
        ‹
      </button>
      {/* right arrow */}
      <button
        onClick={() => go(1)}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-neutral-800 w-9 h-9 rounded-full grid place-items-center shadow"
      >
        ›
      </button>
    </div>
  );
}

const H2 = ({ children, align = "left" }) => (
  <h2
    className={
      "nav-serif text-4xl md:text-5xl font-semibold mb-6 text-slate-800 " +
      (align === "center" ? "text-center" : "")
    }
    style={{ letterSpacing: ".02em" }}
  >
    {children}
  </h2>
);

const P = ({ children, className = "" }) => (
  <p className={"text-slate-600 leading-relaxed " + className}>{children}</p>
);

// Section block (alternating layout)
function Section({ title, text, images = [], reverse = false }) {
  return (
    <section className="container-xl py-14 md:py-20">
      <div
        className={
          "grid md:grid-cols-2 gap-10 md:gap-14 items-center " +
          (reverse ? "md:[&>*:first-child]:order-2" : "")
        }
      >
        <div>
          <H2>{title}</H2>
          <P className="mb-4">{text}</P>
        </div>
        <Carousel images={images} alt={title} className="aspect-[4/3]" />
      </div>
    </section>
  );
}

export default function AluminiumGlazing() {
  // all image urls served from /public
  const img = (name) => "/services/aluminium-glazing/" + name;

  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="container-xl pt-8 md:pt-12">
        <h1
          className="nav-serif text-center text-5xl md:text-6xl font-semibold mb-4"
          style={{ color: "#8B0D0F", letterSpacing: ".02em" }}
        >
          Aluminium & Glazing Works
        </h1>
        <p className="text-center text-lg md:text-xl text-slate-600 max-w-4xl mx-auto">
          Arsea Group companies specialise in the design, fabrication and
          installation of high‑quality, secure, and durable aluminium door and
          window systems, crafted with meticulous care and an attention to
          detail.
        </p>

        <div className="mt-10 rounded-2xl overflow-hidden shadow-sm">
          <img
            src={img("banner.jpg")}
            alt="Aluminium & Glazing banner"
            className="w-full h-[46vh] md:h-[62vh] object-cover"
          />
        </div>
      </section>

      {/* Sections */}
      <Section
        title="Decorative Screens"
        text="Tailor‑made with intricate designs that balance privacy and daylight, these pieces add a finishing touch to your home."
        images={[img("decorative-01.jpg"), img("decorative-02.jpg"), img("decorative-03.jpg")]}
      />

      <Section
        reverse
        title="Dashing Driveway Gates"
        text="Automatic or manual swing, sliding, folding or telescopic – designed to enhance curb appeal and improve security."
        images={[img("driveway-01.jpg"), img("driveway-02.jpg"), img("driveway-03.jpg")]}
      />

      <Section
        title="Made‑To‑Order Doors"
        text="From sliding to foldable doors, we customise to complement the concept and theme of your home."
        images={[img("door-01.jpg"), img("door-02.jpg"), img("door-03.jpg")]}
      />

      <Section
        reverse
        title="Bespoke Windows"
        text="Strategically designed for optimal ventilation and daylight. From seamless glass to unique window styles."
        images={[img("window-01.jpg"), img("window-02.jpg"), img("window-03.jpg")]}
      />

      <Section
        title="Stylish Shower Screens"
        text="From sliding to L‑shaped frameless screens – we turn bathrooms into aesthetically pleasing décor pieces."
        images={[img("shower-01.jpg"), img("shower-02.jpg"), img("shower-03.jpg")]}
      />

      <Section
        reverse
        title="Sleek Safety Barriers"
        text="Glass balustrades with stainless‑steel or wooden capping for balconies and pool areas, indoors or outdoors."
        images={[img("barrier-01.jpg"), img("barrier-02.jpg"), img("barrier-03.jpg")]}
      />

      <Section
        title="Contemporary Trellises"
        text="Pre‑made or custom frameworks for privacy, pergolas, patios or as garden features to support climbing plants."
        images={[img("trellis-01.jpg"), img("trellis-02.jpg"), img("trellis-03.jpg")]}
      />
    </main>
  );
}