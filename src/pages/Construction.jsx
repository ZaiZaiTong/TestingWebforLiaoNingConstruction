
import React, { useEffect, useRef } from "react";

/**
 * Construction, Design & Build page
 * Images live in: /public/services/construction/
 */
export default function Construction() {
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let idx = 0;
    const slides = track.querySelectorAll("[data-slide]");
    const go = () => {
      idx = (idx + 1) % slides.length;
      track.style.transform = `translateX(-${idx * 100}%)`;
    };
    intervalRef.current = setInterval(go, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const jump = (delta) => {
    clearInterval(intervalRef.current);
    const track = trackRef.current;
    const slides = track.querySelectorAll("[data-slide]");
    const tr = track.style.transform || "translateX(0%)";
    const match = /translateX\(-?(\d+(?:\.\d+)?)%\)/.exec(tr);
    const cur = match ? parseFloat(match[1]) : 0;
    const idx = Math.round(cur / 100);
    const nextIdx = (idx + delta + slides.length) % slides.length;
    track.style.transform = `translateX(-${nextIdx * 100}%)`;
  };

  const Section = ({ title, body, img, flip=false }) => (
    <section className="py-10 lg:py-16">
      <div className="container-xl grid lg:grid-cols-12 gap-8 items-center">
        <div className={"lg:col-span-7 " + (flip ? "lg:order-2" : "")}>
          <img src={img} alt={title} className="w-full h-auto rounded-xl shadow-sm" loading="lazy" />
        </div>
        <div className={"lg:col-span-5 " + (flip ? "lg:order-1" : "")}>
          <h2 className="font-['Playfair_Display'] text-3xl lg:text-4xl font-semibold mb-4">{title}</h2>
          <p className="text-lg leading-relaxed text-slate-700 whitespace-pre-line">{body}</p>
        </div>
      </div>
    </section>
  );

  return (
    <main className="bg-white">
      <section className="container-xl pt-14 md:pt-20">
        <p className="text-center uppercase tracking-[0.28em] text-xs md:text-sm text-[#8B0D0F] mb-4">
          SERVICES · Design & Build
        </p>

        <h1
          className="text-center nav-serif text-[44px] md:text-[54px] leading-tight font-semibold tracking-wide"
          style={{ color: "#8B0D0F" }}
        >
          Design & Build
        </h1>

        <p className="text-center text-neutral-600 text-lg md:text-xl mt-6 max-w-4xl mx-auto">
          One team to design, coordinate and deliver your bespoke landed home.
        </p>
      </section>

      <figure className="mt-10">
        <img src="/services/construction/banner-desktop.jpg" alt="Construction banner" className="hidden sm:block w-full h-auto" />
        <img src="/services/construction/banner-mobile.jpg" alt="Construction banner mobile" className="block sm:hidden w-full h-auto" />
      </figure>

      <Section
        title="Design"
        img="/services/construction/construction-01.jpg"
        body={`We shape your home with thoughtful planning and clear coordination.
Our team works with architects and engineers to produce compliant, build-ready designs—ensuring each decision is practical, aligned with your lifestyle and approved without delays.`}
      />

      <Section
        title="Build"
        img="/services/construction/construction-02.jpg"
        flip
        body={`From structural works to final finishes, our team manages the full construction process.
We coordinate all consultants and trades, maintain strict supervision on-site, and deliver your home with predictable timelines, cost clarity and quality workmanship.`}
      />

      <section className="pt-10 lg:pt-20">
        <div className="container-xl">
          <div className="relative overflow-hidden rounded-xl">
            <div ref={trackRef} className="flex transition-transform duration-700 ease-out" style={{ transform: "translateX(0%)" }}>
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="min-w-full" data-slide>
                  <img src={`/services/construction/slide-${String(i+1).padStart(2, "0")}.jpg`} alt={`Slide ${i+1}`} className="w-full h-auto block" loading="lazy" />
                </div>
              ))}
            </div>
            <button onClick={() => jump(-1)} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full px-3 py-2 shadow">‹</button>
            <button onClick={() => jump(1)} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full px-3 py-2 shadow">›</button>
          </div>
        </div>
      </section>
    </main>
  );
}
