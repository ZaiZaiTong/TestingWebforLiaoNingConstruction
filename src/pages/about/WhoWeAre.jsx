// src/pages/about/WhoWeAre.jsx
import React from "react";

const BRAND_RED = "#8C0303";

export default function WhoWeAre() {
  return (
    <div className="bg-white">
      {/* Section 1: 顶部标题 + hero 图（纯白背景，有留白） */}

      <section className="container-xl pt-14 md:pt-20">
        <p className="text-center uppercase tracking-[0.28em] text-xs md:text-sm text-[#8B0D0F] mb-4">
          ABOUT · WHO We are
        </p>

        <h1
          className="text-center nav-serif font-semibold tracking-wide leading-tight
                    text-[clamp(32px,5vw,56px)] text-neutral-900"
          style={{ color: "#8B0D0F" }}
        >
          We are{" "}
          <span style={{ color: BRAND_RED }}>Liao Ning Group</span>
        </h1>

        <p className="text-center text-neutral-600 text-lg md:text-xl mt-6 max-w-4xl mx-auto">
          Liao Ning Group is a Singapore-based company specialising in industrial assets and bespoke landed homes. Our companies sit under one roof to provide design, build and maintenance solutions for multi-generational living.
        </p>
      </section>

      {/* Section 2: Core Value + 两个窗口（同一张固定背景图） */}
      <section
        className="relative py-20 md:py-28 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('/assets/about/who-we-are/core-value-bg.jpg')",
        }}
      >
        {/* 整体加一个轻微暗色遮罩，背景别太抢眼 */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative container-xl space-y-12 md:space-y-16">
          {/* Window 1：Key Facts 散乱布局 + Core Value 字样 */}
          <div className="rounded-[24px] bg-white/85 backdrop-blur-sm border border-neutral-200/80 shadow-lg px-6 md:px-10 py-10 md:py-12">
            {/* 散乱分布的 Key Facts */}
            {/* Wrapper：手机用 grid，桌面保留 absolute 散乱布局 */}
            <div className="
              relative
              h-auto
              grid grid-cols-2 gap-8
              md:block md:h-[320px]
              mb-8
            ">

              {/* 300+ EMPLOYEES */}
              <div className="
                md:absolute
                md:top-2 md:left-[5%]
                rotate-[-2deg]
              ">
                <p className="font-serif text-[28px] md:text-[46px] font-semibold text-neutral-900 tracking-tight">
                  300+
                </p>
                <p className="text-[11px] md:text-[14px] font-semibold text-neutral-600 uppercase leading-snug">
                  Employees
                </p>
              </div>

              {/* 300+ SKILLED WORKERS */}
              <div className="
                md:absolute
                md:top-[70px] md:left-[50%]
                rotate-[1deg]
                max-w-[200px] md:max-w-[230px]
              ">
                <p className="font-serif text-[28px] md:text-[46px] font-semibold" style={{ color: BRAND_RED }}>
                  300+
                </p>
                <p className="text-[11px] md:text-[13px] font-semibold text-neutral-700 uppercase leading-snug">
                  Skilled workers with BCA core trade certificates
                </p>
              </div>

              {/* 20+ PROJECTS */}
              <div className="
                md:absolute
                md:top-[20px] md:right-[8%]
                rotate-[2deg]
                max-w-[200px] md:max-w-[260px]
              ">
                <p className="font-serif text-[28px] md:text-[46px] font-semibold text-neutral-900">
                  20+
                </p>
                <p className="text-[11px] md:text-[13px] font-semibold text-neutral-600 uppercase leading-snug">
                  Projects<br />
                  since establishment in 2003
                </p>
              </div>

              {/* 29+ YEARS */}
              <div className="
                md:absolute
                md:bottom-[30px] md:left-[8%]
                rotate-[1deg]
                max-w-[200px] md:max-w-[280px]
              ">
                <p className="font-serif text-[24px] md:text-[38px] font-semibold text-neutral-900">
                  29+ YEARS
                </p>
                <p className="text-[11px] md:text-[13px] font-semibold text-neutral-600 uppercase leading-snug">
                  Average years of building experience for top management
                </p>
              </div>

              {/* 10+ YEARS */}
              <div className="
                md:absolute
                md:bottom-[10px] md:right-[18%]
                rotate-[-1deg]
                max-w-[200px] md:max-w-[280px]
              ">
                <p className="font-serif text-[24px] md:text-[38px] font-semibold text-neutral-900">
                  10+ YEARS
                </p>
                <p className="text-[11px] md:text-[13px] font-semibold text-neutral-600 uppercase leading-snug">
                  Average years of building experience for &gt; 50% of our engineers
                </p>
              </div>

            </div>
          </div>
          {/* 中间：实心卡片（不是窗口，背景纯色） */}
          <div className="rounded-[24px] bg-white px-6 md:px-10 py-8 md:py-10 text-center shadow-lg">
            <h2 className="font-serif text-2xl md:text-3xl text-neutral-900 mb-4">
              Building Warm, Enduring Homes with Integrity
            </h2>
            <p className="max-w-3xl mx-auto text-sm md:text-[15px] leading-relaxed text-neutral-700">
              We go beyond a single project to build long-term relationships.
              With a holistic view of design, construction and maintenance, we
              commit to challenging ourselves to deliver better homes and better
              places for families.
            </p>
          </div>

          {/* Window 2：Our Core Value / Mission / Vision（三列，第二个窗口） */}
          <div className="rounded-[24px] bg-white/85 backdrop-blur-sm border border-neutral-200/80 shadow-lg px-6 md:px-10 py-10 md:py-12">
            <div className="grid md:grid-cols-3 gap-10 md:gap-12">
              {/* Column 1: Core Value 精简 */}
              <div>
                <p
                  className="nav-serif tracking-[0.3em] text-xs uppercase mb-2"
                  style={{ color: BRAND_RED }}
                >
                  Our Core Value
                </p>
                <h3 className="font-serif text-xl md:text-2xl text-neutral-900 mb-3">
                  Build with Integrity
                </h3>
                <p className="text-sm md:text-[15px] leading-relaxed text-neutral-700">
                  Every decision balances quality, safety and long-term value.
                  We honour the trust our clients place in us and treat each
                  home as if it were our own.
                </p>
              </div>

              {/* Column 2: Mission */}
              <div>
                <p
                  className="nav-serif tracking-[0.3em] text-xs uppercase mb-2"
                  style={{ color: BRAND_RED }}
                >
                  Our Mission
                </p>
                <h3 className="font-serif text-xl md:text-2xl text-neutral-900 mb-3">
                  Build for the Future
                </h3>
                <p className="text-sm md:text-[15px] leading-relaxed text-neutral-700">
                  Using modern building technologies and thoughtful design, we
                  create homes that are durable, efficient and ready for the
                  next generation.
                </p>
              </div>

              {/* Column 3: Vision */}
              <div>
                <p
                  className="nav-serif tracking-[0.3em] text-xs uppercase mb-2"
                  style={{ color: BRAND_RED }}
                >
                  Our Vision
                </p>
                <h3 className="font-serif text-xl md:text-2xl text-neutral-900 mb-3">
                  Strive for the Best
                </h3>
                <p className="text-sm md:text-[15px] leading-relaxed text-neutral-700">
                  We aim to be a trusted partner for families in Singapore,
                  known for warm, well-crafted homes and reliable aftercare
                  throughout the life of the property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
