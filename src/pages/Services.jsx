import React from 'react'

export default function Services() {
  const items = [
    { h: 'EPC / Design‑Build', p: 'One contract, full responsibility. Cost, schedule, and risk under control.' },
    { h: 'SERVICE 2 (e.g., Industrial Upgrades / A&A)', p: 'Retrofit, reinforcement, and expansion for factories and logistics.' },
    { h: 'SERVICE 3 (e.g., Dormitory Development)', p: 'End‑to‑end delivery and operation readiness for purpose‑built dorms.' },
    { h: 'Fit‑out & MEP', p: 'Interior, HVAC, electrical & plumbing with certified supervisors.' },
    { h: 'SERVICE 5 (e.g., QS & Claims)', p: 'Variation orders, extension of time, and claims management.' },
    { h: 'SERVICE 6 (e.g., Maintenance)', p: 'Post‑handover AMC with 24/7 callouts.' }
  ]
  return (
    <section className="container-xl py-16">
      <h1 className="text-3xl font-bold mb-2">Services</h1>
      <p className="text-slate-600 mb-8">High‑quality delivery across the full construction lifecycle.</p>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((it, i) => (
          <div key={i} className="rounded-2xl border p-6 hover:shadow-soft">
            <h3 className="font-semibold mb-1">{it.h}</h3>
            <p className="text-sm text-slate-600">{it.p}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
