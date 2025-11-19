// src/pages/properties/Properties.jsx
import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";

const red = "#8B0D0F";

export default function PropertiesLayout() {
  const location = useLocation();

  const tabs = [
    { label: "For Sale", to: "/properties/for-sale" },
    { label: "Under Construction", to: "/properties/under-construction" },
    { label: "Completed", to: "/properties/completed" },
  ];

  // 根据当前 URL 找到对应的 tab，用它的 label 做标题
  const activeTab =
    tabs.find((t) => location.pathname.startsWith(t.to)) || tabs[0];

  const heroText =
    "Our collection of prized projects is designed to facilitate multi-generational living that is dynamic and versatile.";

  return (
    <div className="pb-20">
      {/* Hero / Heading —— 改成和 SpecialistWorks 一样的结构 */}
      <section className="container-xl pt-14 md:pt-20">
        <p className="text-center uppercase tracking-[0.28em] text-xs md:text-sm text-[#8B0D0F] mb-4">
          PROPERTIES · {activeTab.label.toUpperCase()}
        </p>

        <h1
          className="text-center nav-serif font-semibold tracking-wide leading-tight
                     text-[clamp(32px,5vw,56px)]"
          style={{ color: red }}
        >
          {activeTab.label}
        </h1>

        <p className="text-center text-neutral-600 text-lg md:text-xl mt-6 max-w-4xl mx-auto">
          {heroText}
        </p>
      </section>

      {/* Segmented Tabs – full width, three equal buttons */}
      <div className="container-xl mt-8">
        <div className="mx-auto max-w-[700px]">
          <div
            className="
              grid grid-cols-3 text-center
              rounded-md overflow-hidden
              border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.04)]
              bg-white
            "
          >
            {tabs.map((t, i) => (
              <NavLink
                key={t.to}
                to={t.to}
                className={({ isActive }) =>
                  [
                    "py-8 md:py-10 text-lg md:text-xl font-semibold transition-colors",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9B1113]/40",
                    isActive
                      ? "bg-[#8C0E14] text-white"
                      : "bg-white text-[#0B1320] hover:bg-black/[0.035]",
                    // 分隔线（非第一个项左侧画线）
                    i !== 0 ? "border-l border-black/5" : "",
                  ].join(" ")
                }
                end
              >
                {t.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Child page content */}
      <div className="container-xl mt-10 md:mt-14">
        <Outlet />
      </div>
    </div>
  );
}
