import React, { useState, useMemo } from "react";

/** 
 * Marble Collection For Sale
 * - No external deps. Lightweight carousel used in each section.
 * - Image paths assume files live under: /services/materials-interior-solutions/
 */

const red = "#8B0D0F";

function Carousel({ images, alt, ratio = "56.25%" }) {
  const [i, setI] = useState(0);
  const n = images.length;
  const next = () => setI((i + 1) % n);
  const prev = () => setI((i - 1 + n) % n);

  // swipe
  const handlers = useMemo(() => {
    let x0 = 0;
    return {
      onTouchStart: (e) => (x0 = e.touches[0].clientX),
      onTouchEnd: (e) => {
        const dx = e.changedTouches[0].clientX - x0;
        if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
      },
    };
  }, [i, n]);

  return (
    <div className="relative rounded-2xl overflow-hidden bg-[#3f1b1b]/90" {...handlers}>
      <div style={{ position: "relative", paddingTop: ratio }}>
        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`${alt || "image"} ${idx + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: idx === i ? 1 : 0 }}
            loading="lazy"
          />
        ))}
      </div>
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full w-9 h-9 grid place-items-center"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full w-9 h-9 grid place-items-center"
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}

const sections = [
  {
    title: "Premium Slabs",
    text:
      "Curated slabs ready for fabrication. Choose from sought-after stones including Calacatta, Statuario, Arabescato, Nero Marquina and more. Ideal for kitchen islands, feature walls and bespoke furniture.",
    images: [
      "/services/materials-interior-solutions/slide-01.jpg",
      "/services/materials-interior-solutions/slide-02.jpg",
      "/services/materials-interior-solutions/slide-03.jpg",
    ],
  },
  {
    title: "Bookmatched Walls",
    text:
      "Bookmatching creates a mirrored vein pattern for dramatic, gallery-like statement walls. We help you select consecutive slabs and plan the vein layout for a seamless finish.",
    images: [
      "/services/materials-interior-solutions/slide-04.jpg",
      "/services/materials-interior-solutions/slide-05.jpg",
    ],
  },
  {
    title: "Vanity Tops",
    text:
      "Custom vanity tops with integrated or under-mount basins. Honed, leathered or polished finishes available. Edge profiles and splashbacks tailored to your design.",
    images: [
      "/services/materials-interior-solutions/slide-06.jpg",
      "/services/materials-interior-solutions/slide-07.jpg",
    ],
  },
  {
    title: "Stair Treads & Risers",
    text:
      "Structural and overlay solutions for staircases. Anti-slip treatments and rounded nosing details ensure daily usability without compromising on elegance.",
    images: [
      "/services/materials-interior-solutions/slide-08.jpg",
      "/services/materials-interior-solutions/slide-09.jpg",
    ],
  },
  {
    title: "Outdoor Pavers",
    text:
      "Weather-resistant pavers and coping stones for patios, pools and terraces. We advise on sealing and maintenance for Singapore’s tropical climate.",
    images: [
      "/services/materials-interior-solutions/slide-10.jpg",
      "/services/materials-interior-solutions/slide-11.jpg",
    ],
  },
];

export default function MarbleCollection() {
  return (
    <div className="pb-20">
      {/* Hero */}
      {/* Hero Section — same style as Specialist Works */}
      <section className="container-xl pt-14 md:pt-20">
        <p className="text-center uppercase tracking-[0.28em] text-xs md:text-sm text-[#8B0D0F] mb-4">
          SERVICES · Materials & Interior Solutions
        </p>

        <h1
          className="text-center nav-serif text-[44px] md:text-[54px] leading-tight font-semibold tracking-wide"
          style={{ color: "#8B0D0F" }}
        >
          Materials & Interior Solutions
        </h1>

        <p className="text-center text-neutral-600 text-lg md:text-xl mt-6 max-w-4xl mx-auto">
          Browse a hand-picked selection of natural stone and engineered quartz for your next project.
          Our team manages sourcing, fabrication and installation, ensuring perfect vein matching and
          long-lasting protection.
        </p>
      </section>

      {/* Banner */}
      <div className="container-wide mt-8">
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/services/materials-interior-solutions/banner.jpg"
            alt="Marble banner"
            className="w-full h-[36vh] md:h-[52vh] object-cover"
          />
        </div>
      </div>

      {/* Sections */}
      <div className="container-xl mt-14 space-y-16">
        {sections.map((s, idx) => (
          <div
            key={s.title}
            className={`grid md:grid-cols-2 gap-8 items-center ${idx % 2 ? "md:flex-row-reverse" : ""}`}
          >
            <div className={idx % 2 ? "order-2 md:order-1" : "order-1"}>
              <h2 className="nav-serif text-3xl md:text-4xl text-neutral-900">{s.title}</h2>
              <p className="mt-4 text-neutral-700 leading-relaxed">{s.text}</p>
            </div>
            <div className={idx % 2 ? "order-1 md:order-2" : "order-2"}>
              <Carousel
                images={s.images} 
                alt={s.title}
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="container-xl mt-20">
        <div className="rounded-2xl p-8 md:p-10 border text-center">
          <h3 className="nav-serif text-2xl md:text-3xl mb-2">See Something You Like?</h3>
          <p className="text-neutral-700 max-w-3xl mx-auto">
            Share your site measurements and preferred stone. We’ll check stock, advise slab counts,
            provide edge details and lead time, then arrange a showroom viewing.
          </p>
          <a
            href="/contact"
            className="inline-block mt-5 px-6 py-3 rounded-full text-white"
            style={{ backgroundColor: red }}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  );
}
