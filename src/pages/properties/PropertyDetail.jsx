
// src/pages/properties/PropertyDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb.jsx";
import { propertyDetails } from "../../data/propertiesDetails.js";

export default function PropertyDetail() {
  const { slug } = useParams();
  const data = propertyDetails[slug];

  if (!data) {
    return (
      <div className="container-xl py-24">
        <h1 className="text-3xl font-serif">Property not found</h1>
        <p className="mt-2 text-neutral-600">Please check the link.</p>
      </div>
    );
  }

  return (
    <div className="pb-16">
      

      <Breadcrumb items={[{ label: "Properties", to: "/properties/for-sale" }, { label: data.name }]} />

      <header className="container-xl text-center mt-4 mb-10">
        <p className="tracking-[0.35em] text-xs font-semibold text-[#9B1113] uppercase">{data.status}</p>
        <h1 className="font-serif text-5xl md:text-6xl mt-2 text-neutral-900">{data.name}</h1>
        <p className="mt-3 text-neutral-500">{data.district}</p>
      </header>

      <div className="w-full">
        <img src={data.hero} alt={data.name} className="w-full h-[56vh] object-cover" />
      </div>

      {/* Split intro + at a glance */}
      <section className="container-xl grid md:grid-cols-3 gap-10 mb-16">
        <div className="md:col-span-2">
          <h2 className="font-serif text-3xl mb-4">Introduction</h2>
          <p className="text-neutral-700 leading-7">{data.intro}</p>
        </div>
        <aside>
          <h3 className="font-serif text-2xl mb-3">At a Glance</h3>
          <div className="rounded-xl border border-neutral-200 bg-white shadow-sm">
            <ul className="divide-y divide-neutral-100">
              {data.glance.map((g, i) => (
                <li key={i} className="p-4 text-sm text-neutral-700">{g}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      {/* Blueprint background block */}
      <section
        className="py-16"
        style={{
          backgroundImage: `url(${data.blueprintBg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="container-xl">
          <h2 className="font-serif text-3xl mb-6 text-neutral-900">Layout</h2>

          <Tabs data={data.layoutTabs} />
        </div>
      </section>

      <section className="container-xl py-16">
        <h2 className="font-serif text-3xl mb-8">Features & Finishes</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {Object.entries(data.features).map(([title, lines]) => (
            <div key={title}>
              <h3 className="uppercase tracking-wide text-[#9B1113] mb-3 font-semibold">{title}</h3>
              <ul className="space-y-2 text-neutral-700">
                {lines.map((t, i) => (<li key={i} className="flex gap-2"><span>›</span><span>{t}</span></li>))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-neutral-200 bg-white p-4 text-sm text-neutral-500">
          {data.disclaimer}
        </div>
      </section>
    </div>
  );
}

function Tabs({ data }) {
  const tabKeys = ["floorplan", "perspective"];
  const labels = { floorplan: "Floorplan", perspective: "3D Perspective" };
  const [active, setActive] = React.useState(tabKeys[0]);
  return (
    <div className="w-full">
      <div className="flex gap-2 mb-6">
        {tabKeys.map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={
              "px-4 py-2 rounded-full border " +
              (active === key
                ? "bg-[#9B1113] border-[#9B1113] text-white"
                : "bg-white border-neutral-300 text-neutral-700 hover:border-neutral-400")
            }
          >
            {labels[key]}
          </button>
        ))}
      </div>

      {active === "floorplan" && (
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <img src={data.floorplan[0]} alt="Floorplan" className="w-full object-contain rounded-xl" />
        </div>
      )}
      {active === "perspective" && (
        <div className="grid md:grid-cols-3 gap-4">
          {data.perspective.map((src, i) => (
            <img key={i} src={src} alt={"Perspective " + (i+1)} className="w-full h-72 object-cover rounded-xl shadow-sm" />
          ))}
        </div>
      )}
    </div>
  );
}