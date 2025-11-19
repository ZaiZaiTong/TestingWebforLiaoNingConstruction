import React from 'react'

export default function About() {
  return (
    <section className="container-xl py-16">
      <h1 className="text-3xl font-bold mb-2">About us</h1>
      <p className="text-slate-600 mb-8">We are a Singapore‑based construction company specialising in industrial assets and fit‑outs. Our team brings decades of combined experience across EPC, QS, and site management.</p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <h3 className="font-semibold mb-1">Our edge</h3>
          <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
            <li>Integrated design‑build delivery</li>
            <li>Claims & contracts expertise</li>
            <li>Safety and quality certifications</li>
            <li>Cost transparency and reporting</li>
          </ul>
        </div>
        <div className="rounded-2xl border p-6">
          <h3 className="font-semibold mb-1">Certifications</h3>
          <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
            <li>ISO 9001 / 14001 / 45001</li>
            <li>BizSAFE / WSH frameworks</li>
            <li>BCA registrations</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
