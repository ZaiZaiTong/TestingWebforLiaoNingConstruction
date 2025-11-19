
import React, { useMemo, useEffect, useState } from "react";
import "../index.css";

const asset = (p) => new URL(p, import.meta.url).href;

export default function Renovation() {
  const bannerDesktop = asset("../services/major-works/banner-desktop.jpg");
  const bannerMobile  = asset("../services/major-works/banner-mobile.jpg");
  const feature1 = asset("../services/major-works/renovation-01.jpg");
  const feature2 = asset("../services/major-works/renovation-02.jpg");

  const slides = useMemo(() => (
    Array.from({length: 10}).map((_,i)=> asset(`../services/major-works/slide-${String(i+1).padStart(2,"0")}.jpg`))
  ), []);

  useEffect(() => { window.scrollTo({top:0, behavior:"smooth"}); }, []);

  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => (i-1+slides.length)%slides.length);
  const next = () => setIdx(i => (i+1)%slides.length);

  return (
    <main className="pb-10">
      <section className="container-xl pt-14 md:pt-20">
        <h1 className="text-center nav-serif text-[clamp(32px,6vw,80px)] leading-tight font-semibold" style={{color:"#8B0D0F"}}>
          Major Works
        </h1>
        <p className="text-center uppercase tracking-[0.28em] text-xs md:text-sm text-[#8B0D0F] mb-4">
          Transform your property with our end-to-end team — curate your bespoke, inspiring sanctuary.
        </p>

        <picture className="block mt-8">
          <source media="(max-width: 768px)" srcSet={bannerMobile} />
          <img src={bannerDesktop} alt="Renovation banner" className="w-full rounded-xl shadow-sm" />
        </picture>
      </section>
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

      <section className="container-xl mt-16 grid md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-3">
          <img src={feature1} alt="Renovation" className="w-full rounded-xl shadow-md" />
        </div>
        <div className="md:col-span-2">
          <h2 className="nav-serif text-3xl md:text-4xl text-slate-800 mb-3">Renovation</h2>
          <p className="text-slate-600 leading-relaxed">
            A&A for landed or apartment units, customisation, and reconstruction of existing homes. 
            We coordinate approvals and execution with award-winning architects and professional engineers.
          </p>
        </div>
      </section>

      <section className="container-xl mt-16 grid md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-2 order-2 md:order-1">
          <h2 className="nav-serif text-3xl md:text-4xl text-slate-800 mb-3">Design & Build</h2>
          <p className="text-slate-600 leading-relaxed">
            End‑to‑end solutions from concept to handover, with a lump‑sum quotation option so you
            understand total approximate construction and consultants’ cost.
          </p>
        </div>
        <div className="md:col-span-3 order-1 md:order-2">
          <img src={feature2} alt="Design & Build" className="w-full rounded-xl shadow-md" />
        </div>
      </section>

      <section className="container-xl mt-16">
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img key={idx} src={slides[idx]} alt={`Slide ${idx+1}`} className="w-full aspect-[16/9] object-cover transition-opacity duration-300" />
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow">‹</button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow">›</button>
          <div className="absolute left-4 top-3 text-white/80 text-xs">Slide {idx+1} / {slides.length}</div>
        </div>
      </section>

      <section className="container-xl mt-16">
        <h3 className="nav-serif text-4xl text-slate-900 text-center mb-4">A Legacy In The Making</h3>
        <p className="text-center text-slate-600 max-w-3xl mx-auto">
          No project is too big or small for us. Sit back and watch your home unveil before you.
        </p>
      </section>
    </main>
  );
}
