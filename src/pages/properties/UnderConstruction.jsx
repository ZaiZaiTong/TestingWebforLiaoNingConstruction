import React from "react";
import data from "../../data/properties";
import PropertyCard from "../../components/PropertyCard";

export default function UnderConstruction() {
  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      {data.underConstruction.map((item) => (
        <PropertyCard key={item.id} item={item} />
      ))}
    </section>
  );
}
