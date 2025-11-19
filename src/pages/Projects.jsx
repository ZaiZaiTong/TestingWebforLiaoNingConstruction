import React from 'react'

const data = Array.from({length:9}).map((_,i)=>({
  title: `Project ${i+1}`,
  desc: 'Brief scope, contract value range, and outcome KPIs.',
  img: `https://images.unsplash.com/photo-15${30+i}307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop`
}))

export default function Projects() {
  return (
    <section className="container-xl py-16">
      <h1 className="text-3xl font-bold mb-2">Projects</h1>
      <p className="text-slate-600 mb-8">Replace this with your project domains (e.g., industrial, dormitory, landed homes).</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((d,i)=>(
          <article key={i} className="rounded-2xl overflow-hidden border bg-white hover:shadow-soft">
            <img src={d.img} alt="" className="h-44 w-full object-cover"/>
            <div className="p-4">
              <div className="font-medium">{d.title}</div>
              <div className="text-sm text-slate-600">{d.desc}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
