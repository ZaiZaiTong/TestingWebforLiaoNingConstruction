// src/pages/Home.jsx
import React from "react";

export default function Home() {
  // TODO：这里可以从你的 properties 数据里选出 3 个项目来替换
  const featuredProjects = [
    {
      id: "chiselhurst63",
      title: "No. 63 Chiselhurst Grove",
      subtitle: "2-storey semi-detached with attic & basement",
      district: "District 19 · Serangoon Garden",
      image: "/assets/properties/chiselhurst63.jpg",
    },
    {
      id: "crowhurst57",
      title: "No. 57 Crowhurst Drive",
      subtitle: "Corner semi-detached with mezzanine & pool",
      district: "District 19 · Serangoon Garden",
      image: "/assets/properties/crowhurst57.jpg",
    },
    {
      id: "farleigh81",
      title: "No. 81 Farleigh Ave",
      subtitle: "Bespoke family home for multi-generational living",
      district: "District 19 · Serangoon Garden",
      image: "/assets/properties/farleigh81.jpg",
    },
  ];

  return (
    <div className="bg-white text-neutral-900">
      {/* HERO 区：大图 + Slogan */}
      <section className="relative overflow-hidden">
        {/* 背景图：请替换为你自己的 hero 图 */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/home/hero-landed.jpg')",
          }}
        />
        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/60 to-black/75" />

        <div className="relative container-xl py-24 md:py-32 lg:py-36 text-white">
          <div className="max-w-3xl">
            <p className="nav-serif tracking-[0.35em] text-xs md:text-sm uppercase mb-4 text-[#8C0303]">
              Bespoke Landed Homes
            </p>

            <h1 className="font-serif text-3xl md:text-5xl lg:text-[52px] leading-tight mb-5">
              Warm, Crafted Homes
              <span className="block text-[#8C0303]">
                for Multi-Generational Living
              </span>
            </h1>

            <p className="max-w-xl text-sm md:text-[15px] leading-relaxed text-neutral-100 mb-8">
              Liao Ning Construction (also known as <strong>Liaoning Construction</strong>) designs and builds bespoke landed homes
              with structural integrity, thoughtful layouts and enduring
              craftsmanship — so families can live comfortably together under
              one roof.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/properties"
                className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm md:text-[15px] font-medium bg-[#8C0303] hover:bg-[#c90010] transition-colors"
              >
                View Our Projects
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm md:text-[15px] font-medium border border-white/70 text-white hover:bg-white hover:text-neutral-900 transition-colors"
              >
                Discuss Your Home
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FACTS：数字区块 */}
      <section className="py-14 md:py-16 bg-[#FAFAFA]">
        <div className="container-xl">
          <div className="text-center mb-10">
            <p className="nav-serif tracking-[0.3em] text-xs uppercase text-[#8C0303] mb-2">
              Key Facts
            </p>
            <h2 className="font-serif text-2xl md:text-3xl">
              Building Homes with Experience & Care
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-[#8C0303] mb-2">
                20+
              </p>
              <p className="text-[13px] md:text-[14px] font-semibold uppercase tracking-wide text-neutral-700">
                Years of Experience
              </p>
              <p className="mt-2 text-[13px] text-neutral-500">
                In landed homes, additions & alterations and structural works.
              </p>
            </div>

            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-[#8C0303] mb-2">
                20+
              </p>
              <p className="text-[13px] md:text-[14px] font-semibold uppercase tracking-wide text-neutral-700">
                Completed Projects
              </p>
              <p className="mt-2 text-[13px] text-neutral-500">
                Across Serangoon Garden, Teacher&apos;s Estate and more.
              </p>
            </div>

            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-[#8C0303] mb-2">
                80%+
              </p>
              <p className="text-[13px] md:text-[14px] font-semibold uppercase tracking-wide text-neutral-700">
                Repeat & Referral
              </p>
              <p className="mt-2 text-[13px] text-neutral-500">
                Long-term relationships with families and consultants.
              </p>
            </div>

            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-[#8C0303] mb-2">
                One
              </p>
              <p className="text-[13px] md:text-[14px] font-semibold uppercase tracking-wide text-neutral-700">
                Integrated Team
              </p>
              <p className="mt-2 text-[13px] text-neutral-500">
                From design coordination to structural build and aftercare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-16 md:py-20">
        <div className="container-xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="nav-serif tracking-[0.3em] text-xs uppercase text-[#8C0E14] mb-2">
                Featured Projects
              </p>
              <h2 className="font-serif text-2xl md:text-3xl mb-2">
                Selected Landed Homes
              </h2>
              <p className="max-w-xl text-[14px] md:text-[15px] text-neutral-600">
                A small selection of homes we have built for families across
                Singapore — each tailored to site, lifestyle and long-term
                needs.
              </p>
            </div>

            <a
              href="/properties"
              className="text-[14px] md:text-[15px] font-medium text-[#8C0303] hover:text-[#E60012] underline-offset-4 hover:underline"
            >
              View all projects
            </a>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <a
                key={project.id}
                href={`/properties/${project.id}`}
                className="group rounded-2xl overflow-hidden border border-neutral-200/80 hover:border-[#E60012]/40 shadow-sm hover:shadow-md transition-all bg-white flex flex-col"
              >
                <div className="relative h-56 md:h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-serif text-lg md:text-xl text-white mb-1">
                      {project.title}
                    </p>
                    <p className="text-[12px] text-neutral-100">
                      {project.district}
                    </p>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-[13px] md:text-[14px] text-neutral-600 mb-4">
                    {project.subtitle}
                  </p>
                  <span className="mt-auto inline-flex items-center text-[13px] font-medium text-[#8C0E14] group-hover:text-[#E60012]">
                    View project details
                    <span className="ml-1 group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CORE EXPERTISE */}
      <section className="py-16 md:py-20 bg-[#FAFAFA]">
        <div className="container-xl">
          <div className="text-center mb-10">
            <p className="nav-serif tracking-[0.3em] text-xs uppercase text-[#8C0303] mb-2">
              Our Expertise
            </p>
            <h2 className="font-serif text-2xl md:text-3xl">
              Design & Build for Landed Homes
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            <div className="text-center md:text-left">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#E60012]/10 text-[#E60012] mb-4">
                🧱
              </div>
              <h3 className="font-serif text-lg md:text-xl mb-3">
                Integrated Design & Build
              </h3>
              <p className="text-[14px] md:text-[15px] text-neutral-600">
                We coordinate with architects, engineers and specialists to
                translate concepts into safe, buildable and efficient homes.
              </p>
            </div>

            <div className="text-center md:text-left">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#E60012]/10 text-[#E60012] mb-4">
                🏡
              </div>
              <h3 className="font-serif text-lg md:text-xl mb-3">
                Multi-Generational Living
              </h3>
              <p className="text-[14px] md:text-[15px] text-neutral-600">
                Flexible layouts, lift provisions, privacy zoning and storage
                planning — designed so three generations can live comfortably
                together.
              </p>
            </div>

            <div className="text-center md:text-left">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#E60012]/10 text-[#E60012] mb-4">
                📐
              </div>
              <h3 className="font-serif text-lg md:text-xl mb-3">
                Structural Integrity & Detailing
              </h3>
              <p className="text-[14px] md:text-[15px] text-neutral-600">
                Strong RC works, careful detailing and experienced site
                management to ensure your home is safe, durable and easy to
                maintain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-20">
        <div className="container-xl">
          <div className="text-center mb-10">
            <p className="nav-serif tracking-[0.3em] text-xs uppercase text-[#8C0303] mb-2">
              Why Liao Ning
            </p>
            <h2 className="font-serif text-2xl md:text-3xl">
              A Builder Families Can Trust
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="font-serif text-lg md:text-xl mb-3">
                Craftsmanship with Care
              </h3>
              <p className="text-[14px] md:text-[15px] text-neutral-600">
                We treat each home as if it were our own — paying attention to
                joinery, finishes and the small details that make daily living
                comfortable.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg md:text-xl mb-3">
                Transparent, Practical Advice
              </h3>
              <p className="text-[14px] md:text-[15px] text-neutral-600">
                We give honest views on budget, buildability and priorities, so
                you can make informed decisions at every stage of the project.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg md:text-xl mb-3">
                Long-Term Relationships
              </h3>
              <p className="text-[14px] md:text-[15px] text-neutral-600">
                Many clients return to us for second homes or refer friends and
                family — we stay available even after handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-14 md:py-16 bg-[#8C0303] text-white">
        <div className="container-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl mb-2">
              Planning a new landed home?
            </h2>
            <p className="text-[14px] md:text-[15px] text-white/85 max-w-xl">
              Share your site and family needs with us. We can help you think
              through structure, layout and phasing — before you commit to a
              full build.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm md:text-[15px] font-medium bg-white text-[#8C0E14] hover:bg-[#FDECEF] transition-colors"
          >
            Arrange a discussion
          </a>
        </div>
      </section>
    </div>
  );
}
