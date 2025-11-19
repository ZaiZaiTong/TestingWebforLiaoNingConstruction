// src/ui/Navbar.jsx
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom"; // ✅ 多了 useLocation

// 基础导航项（普通文字菜单）
const NavItem = ({ to, exact, children }) => (
  <NavLink
    to={to}
    end={exact}
    className={({ isActive }) =>
      [
        "inline-flex items-center nav-serif tracking-[0.06em]",
        "px-6 py-2",                 // 左右间距
        "text-[22px] leading-none",  // 菜单字号，想更大改这里
        isActive
          // ✅ 激活：LOGO 同色 + 下划线
          ? "text-[#8C0303] underline underline-offset-8 decoration-[2px]"
          // 未激活：保持原来的灰色
          : "text-[#9d9d9d] hover:text-[#666666]",
      ].join(" ")
    }
  >
    {children}
  </NavLink>
);

// ✅ 带下拉的菜单项（Services / Properties / About）
// 使用 group-hover，鼠标移到菜单内容上不会立刻关闭
const DropdownItem = ({ label, items }) => {
  const location = useLocation();

  // 只要当前路径命中任一子链接，就认为父菜单处于激活状态
  const isActive = items.some((item) =>
    location.pathname === item.to ||
    location.pathname.startsWith(item.to + "/")
  );

  return (
    <div className="relative group">
      {/* 顶部文字按钮 */}
      <button
        type="button"
        className={[
          "inline-flex items-center nav-serif tracking-[0.06em]",
          "px-6 py-2 text-[22px] leading-none",
          isActive
            ? "text-[#8C0303]"                     // ✅ 激活：红色
            : "text-[#9d9d9d] hover:text-[#666666]", // 未激活：灰色
        ].join(" ")}
      >
        {label}
        <span className="ml-1 text-[12px]">▼</span>
      </button>

      {/* 下拉菜单：紧贴按钮底部，没有 mt-3 的空隙 */}
      <div
        className="
          invisible opacity-0
          group-hover:visible group-hover:opacity-100
          absolute left-1/2 top-full -translate-x-1/2
          w-56 rounded-md border border-neutral-200 bg-white shadow-lg
          text-[14px] text-neutral-700
          transition-opacity duration-150
          z-50
        "
      >
        <ul className="py-2">
          {items.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className="block px-4 py-2 hover:bg-neutral-50"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* 顶部主导航条 */}
      <div className="container-xl flex items-center justify-between py-4">
        {/* 左侧 logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Liao Ning Construction PTE LTD"
            className="
              h-14            /* 📱 手机高度更小 */
              md:h-20         /* 💻 平板与桌面保持原来的大小 */
              lg:h-[95px]     /* 🖥️ 你的电脑原尺寸（约等于你之前的 h-24/h-25） */
              w-auto
              object-contain
            "
          />
        </Link>

        {/* 桌面菜单 */}
        <nav className="hidden md:flex items-center gap-1">
          <NavItem to="/" exact>
            HOME
          </NavItem>

          <DropdownItem
            label="SERVICES"
            items={[
              { label: "Design & Build", to: "/services/construction" },
              { label: "Major Works", to: "/services/major-works" },
              { label: "Specialist Works", to: "/services/specialist-works" },
              { label: "Materials & Interior Solutions", to: "/services/materials-interior-solutions" },
            ]}
          />

          <DropdownItem
            label="PROPERTIES"
            items={[
              { label: "For Sale", to: "/properties/for-sale" },
              { label: "Under Construction", to: "/properties/under-construction" },
              { label: "Completed Projects", to: "/properties/completed" },
            ]}
          />

          <DropdownItem
            label="ABOUT"
            items={[
              { label: "Who We Are", to: "/about/who-we-are" },
              { label: "Our Process", to: "/about/our-process" },
              { label: "Become a Business Partner", to: "/about/become-a-business-partner" },
            ]}
          />

          {/* CONTACT 按钮样式 */}
          <Link
            to="/contact"
            className="
              ml-6 inline-flex items-center justify-center
              nav-serif tracking-[0.08em]
              text-[18px] font-semibold
              px-8 py-3
              bg-[#8C0E14] text-white
              hover:bg-[#731019]
              border border-[#8C0E14]
              rounded-none   /* 像参考图那样直角框 */
            "
          >
            CONTACT US
          </Link>
        </nav>

        {/* 移动端汉堡菜单按钮 */}
        <button
          onClick={() => setOpenMobile((v) => !v)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-100"
          aria-label="Open Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* 导航和内容之间的“分区带” */}
      <div className="h-6 w-full border-t border-b border-neutral-200 bg-[#f7f7f7]" />

      {/* 移动端下拉菜单 */}
      {openMobile && (
        <div className="md:hidden border-b bg-white">
          <div className="container-xl py-3 flex flex-col gap-2 nav-serif text-[18px] tracking-[0.06em]">
            <NavLink to="/" onClick={() => setOpenMobile(false)} className="px-2 py-1">
              HOME
            </NavLink>

            {/* Services 子项 */}
            <details>
              <summary className="px-2 py-1 cursor-pointer">SERVICES</summary>
              <div className="pl-4 mt-1 flex flex-col gap-1 text-[15px]">
                <NavLink
                  to="/services/construction"
                  onClick={() => setOpenMobile(false)}
                  className="py-1"
                >
                  Construction, Design &amp; Build
                </NavLink>
                <NavLink
                  to="/services/major-works"
                  onClick={() => setOpenMobile(false)}
                  className="py-1"
                >
                  Renovations, Additions &amp; Alterations
                </NavLink>
                <NavLink
                  to="/services/specialist-works"
                  onClick={() => setOpenMobile(false)}
                  className="py-1"
                >
                  Specialist Work
                </NavLink>
                <NavLink
                  to="/services/materials-interior-solutions"
                  onClick={() => setOpenMobile(false)}
                  className="py-1"
                >
                  Materials & Interior Solutions
                </NavLink>
              </div>
            </details>

            {/* Properties 子项 */}
            <details>
              <summary className="px-2 py-1 cursor-pointer">PROPERTIES</summary>
              <div className="pl-4 mt-1 flex flex-col gap-1 text-[15px]">
                <NavLink
                  to="/properties/for-sale"
                  onClick={() => setOpenMobile(false)}
                  className="py-1"
                >
                  For Sale
                </NavLink>
                <NavLink
                  to="/properties/under-construction"
                  onClick={() => setOpenMobile(false)}
                  className="py-1"
                >
                  Under Construction
                </NavLink>
                <NavLink
                  to="/properties/completed"
                  onClick={() => setOpenMobile(false)}
                  className="py-1"
                >
                  Completed Projects
                </NavLink>
              </div>
            </details>

            {/* ABOUT 子项 */}
            <details>
              <summary className="px-2 py-1 cursor-pointer">ABOUT</summary>
              <div className="pl-4 mt-1 flex flex-col gap-1 text-[15px]">
                <NavLink
                  to="/about/who-we-are"
                  onClick={() => setOpenMobile(false)}
                  className="py-1"
                >
                  Who We Are
                </NavLink>
                <NavLink
                  to="/about/our-process"
                  onClick={() => setOpenMobile(false)}
                  className="py-1"
                >
                  Our Process
                </NavLink>
                <NavLink
                  to="/about/become-a-business-partner"
                  onClick={() => setOpenMobile(false)}
                  className="py-1"
                >
                  Become a Business Partner
                </NavLink>
              </div>
            </details>

            <NavLink
              to="/contact"
              onClick={() => setOpenMobile(false)}
              className="mt-2 px-2 py-2 bg-[#8C0E14] text-white text-center"
            >
              CONTACT US
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
