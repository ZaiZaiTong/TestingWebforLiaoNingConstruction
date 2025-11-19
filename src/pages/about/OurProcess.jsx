// src/pages/about/OurProcess.jsx
import React from "react";

export default function OurProcess() {
  return (
    <div className="bg-white">
      {/* 顶部标题 + 说明 */}
      <section className="container-xl pt-14 md:pt-20">
        <p className="text-center uppercase tracking-[0.28em] text-xs md:text-sm text-[#8B0D0F] mb-4">
          ABOUT · Our Process
        </p>

        <h1
          className="text-center nav-serif font-semibold tracking-wide leading-tight
                    text-[clamp(32px,5vw,56px)] text-neutral-900"
          style={{ color: "#8B0D0F" }}
        >
          How We Work With You
        </h1>

        <p className="text-center text-neutral-600 text-lg md:text-xl mt-6 max-w-4xl mx-auto">
          From the first conversation to handing over your keys, our process
          is built on listening, clear communication and reliable follow-through.
          Every step is designed to keep you informed and comfortable.
        </p>
      </section>
      <section className="pt-16 pb-10">
        {/* 顶部大图 */}
        <div className="mt-10">
          <div className="container-xl">
            <div className="rounded-[24px] overflow-hidden shadow-lg">
              {/* TODO: 换成你的图片 */}
              <img
                src="/assets/about/our-process/hero.jpg"
                alt="Project discussion"
                className="w-full h-[320px] md:h-[460px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 流程步骤 */}
      <section className="py-16 md:py-20 bg-[#FAFAFA]">
        <div className="container-xl max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-10 text-neutral-900">
            A Clear, 5-Step Journey
          </h2>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Initial Consultation & Brief",
                body: "We start by understanding your family needs, site constraints and budget. This is where we listen, gather information and share early thoughts on possibilities."
              },
              {
                step: "02",
                title: "Concept Design & Budgeting",
                body: "Our team prepares layout options and broad cost estimates. We refine the concept together so you are comfortable with both the design direction and budget range."
              },
              {
                step: "03",
                title: "Detailed Design & Approvals",
                body: "We develop detailed drawings, specifications and submissions. We work with consultants and authorities so that technical, safety and regulatory requirements are addressed."
              },
              {
                step: "04",
                title: "Construction & Site Supervision",
                body: "Once works begin, our site team and project managers coordinate trades, monitor progress and quality, and keep you updated through regular check-ins."
              },
              {
                step: "05",
                title: "Handover & Aftercare",
                body: "We walk through the completed home with you, carry out touch-ups if required and explain maintenance guidelines. Even after handover, we remain contactable for support."
              }
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-5 md:gap-7 rounded-2xl bg-white shadow-sm border border-neutral-200 p-5 md:p-6"
              >
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#8C0E14] text-white flex items-center justify-center nav-serif text-[14px] md:text-[16px] tracking-[0.2em]">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl mb-2 text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] leading-relaxed text-neutral-700">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 小结 + CTA */}
      <section className="py-16 md:py-20">
        <div className="container-xl max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-neutral-900">
            Built Around Conversation and Trust
          </h2>
          <p className="text-[15px] md:text-[16px] leading-relaxed text-neutral-700 mb-8">
            Each project is different, but our way of working is consistent:
            we listen first, plan clearly and build with care. If you have a
            potential site or project in mind, we would be happy to walk you
            through what the journey could look like.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 nav-serif tracking-[0.08em] text-[16px] font-semibold bg-[#8C0E14] text-white hover:bg-[#731019]"
          >
            Talk to Us About a Project
          </a>
        </div>
      </section>
    </div>
  );
}
