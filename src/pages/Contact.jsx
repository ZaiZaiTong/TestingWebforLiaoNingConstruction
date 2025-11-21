// src/pages/Contact.jsx
import React from "react";

// 👇 把这个常量换成你自己 Apps Script 部署出来的 Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzxR5V5gAUH9C5h8dlMfn_5HbRvQckukrUxkI65-qskE8NrDAXNTUzCZawjvwWsNJZD/exec";

export default function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // 和 Sheet / Apps Script 对应的字段
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      contactNumber: formData.get("contactNumber"),
      interestedIn: formData.get("interestedIn"),
      upgradeType: formData.get("upgradeType"),
      message: formData.get("message"),
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // 避免 CORS 报错，Apps Script 常用写法
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      alert("Submitted! We will get back to you soon.");
      form.reset();
    } catch (err) {
      console.error(err);
      alert("Submission failed, please try again later.");
    }
  }

  return (
    <div className="bg-[#f8f5f2]">
      {/* 主体内容区域 */}
      <section className="container-xl py-16 md:py-20">
        {/* 上半部分：左文案 + 右联系方式 */}
        <div className="grid md:grid-cols-2 gap-12 mb-14">
          {/* 左侧文案 */}
          <div>
            <p className="text-xs tracking-[0.35em] text-[#9B1113] font-semibold uppercase mb-4">
              Get in Touch
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[40px] leading-snug text-neutral-900 mb-6">
              We Listen, Plan &amp; Build Better
            </h1>
            <p className="text-[15px] leading-relaxed text-neutral-700 space-y-3">
              Whether you have questions about our properties or need a sounding
              board in the purchase of your landed property, or just to chat
              about industry-related matters, we are here to listen and help.
              <br />
              <br />
              Fill in the contact form below and we&apos;ll get back to you as
              quickly as possible.
            </p>
          </div>

          {/* 右侧联系方式 */}
          <div className="space-y-6 text-[15px] text-neutral-800">
            <div className="flex items-start gap-3">
              <span className="mt-1 text-sm">📞</span>
              <div>
                <div className="font-semibold mb-1">Call Us</div>
                <a
                  href="tel:+6567489095"
                  className="text-[#9B1113] hover:underline"
                >
                  +65 6748 9095
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 text-sm">💬</span>
              <div>
                <div className="font-semibold mb-1">WhatsApp Us</div>
                <a
                  href="https://wa.me/6591603279"
                  className="text-[#9B1113] hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Click to WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 text-sm">✉️</span>
              <div>
                <div className="font-semibold mb-1">Send an Email</div>
                <a
                  href="mailto:liaoning@hotmail.sg"
                  className="text-[#9B1113] hover:underline"
                >
                  liaoning@hotmail.sg
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 表单 */}
        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-neutral-700">
                  Name
                </label>
                <input
                  name="name" // 👈 添加 name
                  type="text"
                  required
                  className="h-11 rounded-md border border-neutral-300 px-3 text-sm focus:ring-[#9B1113] focus:border-[#9B1113]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-neutral-700">
                  Email
                </label>
                <input
                  name="email" // 👈
                  type="email"
                  required
                  className="h-11 rounded-md border border-neutral-300 px-3 text-sm focus:ring-[#9B1113] focus:border-[#9B1113]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-neutral-700">
                  Contact Number
                </label>
                <input
                  name="contactNumber" // 👈
                  type="tel"
                  className="h-11 rounded-md border border-neutral-300 px-3 text-sm focus:ring-[#9B1113] focus:border-[#9B1113]"
                />
              </div>
            </div>

            {/* 第2行 */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-neutral-700">
                  I am interested in:
                </label>
                <select
                  name="interestedIn" // 👈
                  className="h-11 rounded-md border border-neutral-300 px-3 text-sm focus:ring-[#9B1113] focus:border-[#9B1113]"
                >
                  <option>General Enquiry</option>
                  <option>New Landed Home</option>
                  <option>Rebuild / A&amp;A</option>
                  <option>Industrial / Others</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-neutral-700">
                  I am looking to upgrade and this is:
                </label>
                <select
                  name="upgradeType" // 👈
                  className="h-11 rounded-md border border-neutral-300 px-3 text-sm focus:ring-[#9B1113] focus:border-[#9B1113]"
                >
                  <option>My First Landed Property</option>
                  <option>My Next Home</option>
                  <option>Investment</option>
                  <option>Others</option>
                </select>
              </div>
            </div>

            {/* 留言 */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-neutral-700">
                How can we help?
              </label>
              <textarea
                name="message" // 👈
                rows={6}
                className="rounded-md border border-neutral-300 px-3 py-2 text-sm focus:ring-[#9B1113] focus:border-[#9B1113]"
              />
            </div>

            <button
              type="submit"
              className="px-10 py-3 bg-[#8C0E14] text-white nav-serif tracking-[0.08em] text-[16px] font-semibold border border-[#8C0E14] hover:bg-[#731019] transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        <p className="mt-4 text-xs text-neutral-500">
          
        </p>
      </section>

      {/* 地址 + 地图 */}
      <section className="border-t bg-white">
        <div className="container-xl py-12 lg:py-16 grid gap-10 lg:grid-cols-[1.1fr_1fr] items-start">
          {/* 左：地址 */}
          <div>
            <p className="nav-serif tracking-[0.16em] text-xs text-[#b23b3b] mb-3">
              VISIT US
            </p>
            <h2 className="nav-serif text-[28px] md:text-[32px] tracking-[0.12em] text-[#333333] mb-6">
              Our Office
            </h2>

            <div className="space-y-4 text-[15px] leading-relaxed text-[#555555]">
              <div>
                <p className="font-semibold text-[#222222]">
                  Liao Ning Construction Pte Ltd
                </p>
                <p>No. 19 Tannery Lane</p>
                <p>#04-01</p>
                <p>Singapore 347781</p>
              </div>

              <div>
                <p>
                  <span className="font-semibold">TEL&nbsp;</span>+65 6748 9095
                </p>
                <p>
                  <span className="font-semibold">FAX&nbsp;</span>+65 6748 1506
                </p>
                <p>
                  <span className="font-semibold">Email&nbsp;</span>
                  liaoning@hotmail.sg
                </p>
              </div>
            </div>
          </div>

          {/* 右：地图 */}
          <div className="w-full">
            <div className="h-64 md:h-80 w-full overflow-hidden rounded-lg border border-neutral-200 shadow-sm">
              <iframe
                title="Office Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.728647963838!2d103.875331!3d1.322104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da175b6c8dfadb%3A0xfca2ffb5f062ce0d!2s19%20Tannery%20Ln%2C%20Singapore%20347781!5e0!3m2!1sen!2ssg!4v1731306000000"
              />
            </div>
            <p className="mt-3 text-xs text-[#999999]">
              
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
