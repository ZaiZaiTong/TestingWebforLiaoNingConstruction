
// src/components/Breadcrumb.jsx
import { Link } from "react-router-dom";

export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="text-sm text-neutral-500 container-xl py-4">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link to="/" className="hover:text-neutral-700">Home</Link></li>
        {items.map((it, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="opacity-50">/</span>
            {it.to ? (
              <Link to={it.to} className="hover:text-neutral-700">{it.label}</Link>
            ) : (
              <span className="text-neutral-700">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
