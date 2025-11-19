import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container-xl py-24 text-center">
      <h1 className="text-5xl font-bold mb-2">404</h1>
      <p className="text-slate-600 mb-6">Page not found.</p>
      <Link to="/" className="inline-flex items-center px-5 py-2.5 rounded-xl bg-brand-600 text-white hover:bg-brand-700">Back to Home</Link>
    </section>
  )
}
