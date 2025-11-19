// src/pages/about/BecomePartner.jsx
import React from "react";

export default function BecomePartner() {
  return (
    <div className="bg-white">
      {/* 顶部标题 */}
      <section className="container-xl pt-14 md:pt-20">
        <p className="text-center uppercase tracking-[0.28em] text-xs md:text-sm text-[#8B0D0F] mb-4">
          ABOUT · LIAO NING GROUP
        </p>

        <h1
          className="text-center nav-serif font-semibold tracking-wide leading-tight
                    text-[clamp(32px,5vw,56px)] text-neutral-900"
          style={{ color: "#8B0D0F" }}
        >
          Become a Business Partner
        </h1>

        <p className="text-center text-neutral-600 text-lg md:text-xl mt-6 max-w-4xl mx-auto">
          We work with architects, designers, specialist trades and suppliers
          who share our commitment to quality and reliability. If you believe
          your services can complement our projects, we welcome a conversation.
        </p>
      </section>
      <section className="pt-16 pb-10">
        {/* 顶部图 */}
        <div className="mt-10">
          <div className="container-xl">
            <div className="rounded-[24px] overflow-hidden shadow-lg">
              {/* TODO: 换成你的图片 */}
              <img
                src="/assets/about/partner/hero.jpg"
                alt="Business partnership"
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why partner with us */}
      <section className="py-16 md:py-20 bg-[#FAFAFA]">
        <div className="container-xl">
          <div className="text-center mb-10">
            <p className="nav-serif tracking-[0.3em] text-xs text-[#8C0E14] uppercase mb-3">
              Why Partner With Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-4">
              A Long-Term Partnership Approach
            </h2>
            <p className="max-w-3xl mx-auto text-[15px] md:text-[16px] leading-relaxed text-neutral-700">
              Many of our current partners started on a single project and have
              since grown with us over multiple homes and developments. We value
              consistent workmanship, clear communication and mutual respect.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Steady Pipeline of Projects",
                body: "We focus on a curated portfolio of landed homes and industrial projects, providing regular opportunities for reliable partners."
              },
              {
                title: "Transparent, Hands-On Management",
                body: "Our project managers are involved on site and easy to reach, helping to coordinate trades and resolve issues quickly."
              },
              {
                title: "Shared Craftsmanship Standards",
                body: "We care about the details and long-term performance of our work. We look for partners who take pride in the same standards."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white border border-neutral-200 shadow-sm p-6"
              >
                <h3 className="font-serif text-xl mb-3 text-neutral-900">
                  {item.title}
                </h3>
                <p className="text-[14px] md:text-[15px] leading-relaxed text-neutral-700">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to get started */}
      <section className="py-16 md:py-20">
        <div className="container-xl max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-neutral-900 text-center">
            How to Get Started
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mt-6">
            <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
              <p>
                If you are a contractor, supplier or consultant and would like
                to explore working together, you can send us your company
                profile and portfolio of recent projects.
              </p>
              <p>
                Please highlight your core specialisation, typical project size,
                safety certifications and any relevant experience with landed
                homes, industrial buildings or fit-out works in Singapore.
              </p>
              <p>
                Our team will review your information and reach out if we see a
                good fit with our upcoming projects.
              </p>
            </div>

            <div className="rounded-2xl border border-dashed border-neutral-300 bg-[#FCFCFC] p-6">
              <h3 className="font-serif text-xl mb-4 text-neutral-900">
                Partnership Enquiry Details
              </h3>
              <ul className="space-y-2 text-[14px] md:text-[15px] text-neutral-700">
                <li>• Company name &amp; registration number</li>
                <li>• Contact person &amp; contact details</li>
                <li>• Trade / services provided</li>
                <li>• Brief project references</li>
                <li>• Key certifications or accreditations (if any)</li>
              </ul>

              <a
                href="/contact"
                className="mt-6 inline-flex items-center justify-center px-6 py-2.5 nav-serif tracking-[0.08em] text-[15px] font-semibold bg-[#8C0E14] text-white hover:bg-[#731019]"
              >
                Send Us Your Company Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
