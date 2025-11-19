import React, { useState } from "react";
import { Link } from "react-router-dom";

// —— 可按需改这里的数据（文字/链接） —— //
const services = [
  { label: "Design & Build", to: "/services/construction-design-and-build" },
  { label: "Major Works", to: "/services/major-works" },
  { label: "Specialist Works", to: "/services/specialist-works" },
  { label: "Materials & Interior Solutions", to: "/services/materials-interior-solutions" },
];

const properties = [
  { label: "For Sale", to: "/properties/for-sale" },
  { label: "Under Construction", to: "/properties/under-construction" },
  { label: "Completed Projects", to: "/properties/completed" },
];

const arsea = [
  { label: "Who We Are", to: "/about/who-we-are" },
  { label: "Our Process", to: "/about/our-process" },
  { label: "Become a Business Partner", to: "/about/become-a-business-partner" },
];

const contacts = [
  { label: "WhatsApp Us", href: "https://wa.me/6596423573" },
  { label: "Email Us", href: "mailto:hello@example.com" },
  { label: "Online Form", to: "/contact" },
];

// —— 工具：移动端折叠行 —— //
const Column = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* Mobile: 折叠标题 */}
      <button
        className="w-full flex items-center justify-between md:hidden py-3 border-b border-white/15"
        onClick={() => setOpen(!open)}
      >
        <span className="nav-serif text-white text-lg tracking-wider">{title}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" className={`transition ${open ? "rotate-180" : ""}`}>
          <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </button>

      {/* Mobile 折叠面板 / Desktop 常显 */}
      <div className={`md:block ${open ? "block" : "hidden"} md:mt-0 mt-2`}>
        <h4 className="hidden md:block nav-serif text-white text-xl tracking-wider mb-3">{title}</h4>
        {children}
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="mt-16">
      {/* 主体区 */}
      <div className="text-white" style={{ backgroundColor: "#8C0303" }}>
        <div className="container-xl py-12 md:py-16 grid gap-10 md:grid-cols-5">
          {/* 左列：Logo + 文案 + 社媒 */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              {/* 若暂时没有白色 Logo，可换成 /logo.png 并加 filter 反色 */}
              <img
                src="/logo-white.png"
                alt="Liao Ning Construction PTE LTD"
                style={{ height: "70px", width: "auto", objectFit: "contain" }}
                onError={(e) => (e.currentTarget.style.filter = "brightness(0) invert(1)")}
              />
            </div>
            <p className="text-sm/4 text-white/85 max-w-xs mb-6">
              Bespoke landed homes developers and builders for multi-generational living.
            </p>

            {/* 社媒图标（内联 SVG，避免外部库） */}
            <div className="flex items-center gap-5">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook" className="hover:opacity-80">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.35 2 1.87 6.48 1.87 12.07c0 4.98 3.64 9.11 8.39 9.94v-7.03H7.9v-2.9h2.36V9.41c0-2.33 1.39-3.62 3.52-3.62.72 0 1.63.13 1.63.13v1.8h-.92c-1.01 0-1.32.63-1.32 1.27v1.52h2.25l-.36 2.9h-1.89v7.03c4.75-.83 8.39-4.96 8.39-9.94Z"/></svg>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram" className="hover:opacity-80">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7Zm6-1a1 1 0 1 0 .002 2.002A1 1 0 0 0 18 6Z"/><circle cx="12" cy="12" r="3.5" fill="currentColor"/></svg>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener" aria-label="YouTube" className="hover:opacity-80">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19 3.5 12 3.5 12 3.5s-7 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1C5 20.5 12 20.5 12 20.5s7 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.8 15.5V8.5l6.2 3.5-6.2 3.5Z"/></svg>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:opacity-80">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5h4V23h-4V8.5Zm7.5 0h3.8v2h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.7 4.78 6.2V23H16.4v-6.4c0-1.5-.03-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V23H8V8.5Z"/></svg>
              </a>
            </div>
          </div>

          {/* 右侧四列 */}
          <div className="md:col-span-4 grid md:grid-cols-4 gap-8">
            <Column title="SERVICES">
              <ul className="space-y-2">
                {services.map((i) => (
                  <li key={i.label}>
                    {i.to ? (
                      <Link to={i.to} className="text-white/90 hover:text-white">{i.label}</Link>
                    ) : (
                      <a href={i.href} className="text-white/90 hover:text-white" target="_blank" rel="noopener">{i.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </Column>

            <Column title="PROPERTIES">
              <ul className="space-y-2">
                {properties.map((i) => (
                  <li key={i.label}>
                    <Link to={i.to} className="text-white/90 hover:text-white">{i.label}</Link>
                  </li>
                ))}
              </ul>
            </Column>

            <Column title="LIAO NING GROUP">
              <ul className="space-y-2">
                {arsea.map((i) => (
                  <li key={i.label}>
                    <Link to={i.to} className="text-white/90 hover:text-white">{i.label}</Link>
                  </li>
                ))}
              </ul>
            </Column>

            <Column title="CONTACT US">
              <ul className="space-y-2">
                {contacts.map((i) => (
                  <li key={i.label}>
                    {i.to ? (
                      <Link to={i.to} className="text-white/90 hover:text-white">{i.label}</Link>
                    ) : (
                      <a href={i.href} target="_blank" rel="noopener" className="text-white/90 hover:text-white">{i.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </Column>
          </div>
        </div>
      </div>

      {/* 版权条 */}
      <div className="text-white/90" style={{ backgroundColor: "#8C0303" }}>
        <div className="container-xl py-4 flex flex-col md:flex-row items-center gap-3 md:gap-6 justify-between">
          <p className="text-sm">© {new Date().getFullYear()} Liao Ning Group. All Rights Reserved.</p>
          <ul className="flex items-center gap-4 text-sm">
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li className="opacity-50">|</li>
            <li><Link to="/terms" className="hover:text-white">Terms of Use</Link></li>
            <li className="opacity-50">|</li>
            <li><Link to="/sitemap" className="hover:text-white">Site Map</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
