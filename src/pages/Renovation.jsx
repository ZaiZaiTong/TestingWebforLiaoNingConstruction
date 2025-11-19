// src/pages/Renovation.jsx  （Major Works）

import React, { useMemo, useEffect, useState } from "react";
import "../index.css";

const asset = (p) => new URL(p, import.meta.url).href;

export default function Renovation() {
  // 仍然沿用你现有的图片文件
  const bannerDesktop = asset("../services/major-works/banner-desktop.jpg");
  const bannerMobile = asset("../services/major-works/banner-mobile.jpg");
  const feature1 = asset("../services/major-works/renovation-01.jpg");
  const feature2 = asset("../services/major-works/renovation-02.jpg");

  const slides = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) =>
        asset(
          `../services/major-works/slide-${String(i + 1).padStart(2, "0")}.jpg`
        )
      ),
    []
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIdx((i) => (i + 1) % slides.length);

  return (
    <main className="pb-20">
      {/* HERO：标题 + 大图 */}
      <section className="container-xl pt-14 md:pt-20">
        <p className="text-center uppercase tracking-[0.28em] text-xs md:text-sm text-[#8B0D0F] mb-4">
          SERVICES · MAJOR WORKS
        </p>

        <h1
          className="text-center nav-serif text-[44px] md:text-[54px] leading-tight font-semibold tracking-wide"
          style={{ color: "#8B0D0F" }}
        >
          Major Works
        </h1>

        <p className="text-center text-neutral-600 text-lg md:text-xl mt-6 max-w-4xl mx-auto">
          Structural alterations, extensions and deep upgrades for landed homes
        and apartments—delivered as a coordinated, end-to-end service.
        </p>
      </section>
      
      <picture className="block mt-8">
        <source media="(max-width: 768px)" srcSet={bannerMobile} />
        <img
          src={bannerDesktop}
          alt="Major works banner"
          className="w-full rounded-xl shadow-sm"
        />
      </picture>

      {/* 概览 + Scope of Works */}
      <section className="container-xl mt-14 grid md:grid-cols-2 gap-10 text-slate-700">
        {/* 左侧：简介 */}
        <div>
          <h2 className="nav-serif text-2xl md:text-3xl text-slate-900 mb-4">
            What We Mean by “Major Works”
          </h2>
          <p className="leading-relaxed mb-4">
            Major works typically go beyond cosmetic renovation. They involve
            structural interventions, changes to layout, and upgrades to the
            building envelope and services.
          </p>
          <p className="leading-relaxed">
            Our team plans, engineers and supervises these works in close
            collaboration with architects and professional engineers, ensuring
            your home remains safe, compliant and future-ready throughout the
            transformation.
          </p>
        </div>

        {/* 右侧：Scope 列表 */}
        <div>
          <h3 className="nav-serif text-xl md:text-2xl text-slate-900 mb-3">
            Scope of Major Works
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-[15px] md:text-[16px]">
            <li>Structural alterations, strengthening and new beams/columns</li>
            <li>Extensions, mezzanine &amp; attic additions</li>
            <li>Reconfiguration of layouts, walls, staircases &amp; openings</li>
            <li>Roofing, waterproofing &amp; full building envelope upgrades</li>
            <li>M&amp;E rerouting, new services shafts &amp; system upgrades</li>
            <li>Full façade refresh, new materials, windows &amp; doors</li>
          </ul>
        </div>
      </section>

      {/* 轮播图：案例图集 */}
      <section className="container-xl mt-18 md:mt-20">
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            key={idx}
            src={slides[idx]}
            alt={`Major works gallery slide ${idx + 1}`}
            className="w-full aspect-[16/9] object-cover transition-opacity duration-300"
          />
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
          >
            ›
          </button>
          <div className="absolute left-4 top-3 text-white/80 text-xs">
            Slide {idx + 1} / {slides.length}
          </div>
        </div>

        <p className="mt-6 text-center text-slate-600 text-[15px] md:text-[16px] max-w-3xl mx-auto">
          Each project is tailored to the existing structure, regulations and
          your family’s way of living. Speak with us early in the planning
          stage, and our team can help you understand feasibility, sequencing
          and budget before you commit to major works.
        </p>
      </section>
    </main>
  );
}
