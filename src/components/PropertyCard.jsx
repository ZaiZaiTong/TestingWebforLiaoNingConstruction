import React from "react";
import { Link } from "react-router-dom";

export default function PropertyCard({ item }) {
  return (
    <article className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 flex flex-col">
      <div className="aspect-[16/11] bg-gray-200 overflow-hidden">
        {item.image ? (
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="nav-serif text-2xl text-gray-900 mb-2">{item.title}</h3>
        <p className="text-sm text-gray-500 mb-4">District {item.district}</p>
        <div className="mt-auto">
          {item.link ? (
            <Link to={item.link} className="inline-flex items-center gap-2 text-[#7A0E0F] hover:opacity-90">
              View in Detail <span aria-hidden>→</span>
            </Link>
          ) : (
            <span className="inline-flex items-center gap-2 text-[#7A0E0F] opacity-75">View in Detail →</span>
          )}
        </div>
      </div>
    </article>
  );
}
