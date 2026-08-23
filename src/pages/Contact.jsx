import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'

const INITIAL_FORM = { name: '', phone: '', diameter: '', pnClass: '', orderDetails: '' }

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend wired up yet — this simply confirms receipt in the UI.
    setSubmitted(true)
    setForm(INITIAL_FORM)
  }

  return (
    <div className="pt-20">
      <section className="bg-primary dark:bg-surface-dark border-b border-black/5 dark:border-white/10">
        <div className="section-container py-16 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">{t('contact_title')}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">{t('contact_subtitle')}</p>
        </div>
      </section>

      <section id="quote" className="section-container py-16 grid gap-12 lg:grid-cols-2 items-start">
        {/* Factory quotation information */}
        <div className="lg:py-8">
          <p className="text-accent font-mono text-sm font-bold uppercase tracking-widest mb-3">Factory quotation</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-white tracking-tight leading-tight">
            Tell us what your
            <span className="block text-accent">project needs.</span>
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-steel dark:text-gray-300">
            Send the diameter, PN class, quantity and delivery location. Our sales team will respond with availability and factory pricing.
          </p>

          <div className="mt-6 grid gap-4">
            <a href="tel:+251961363636" className="border-l-4 border-accent pl-4 hover:text-accent transition-colors">
              <span className="block text-xs font-mono font-bold uppercase tracking-widest text-accent">Call sales</span>
              <span className="mt-1 block text-lg font-semibold text-primary dark:text-white">+251 961 36 36 36</span>
            </a>
            <a href="mailto:yadennoplc@gmail.com" className="border-l-4 border-accent pl-4 hover:text-accent transition-colors">
              <span className="block text-xs font-mono font-bold uppercase tracking-widest text-accent">Email</span>
              <span className="mt-1 block break-all text-lg font-semibold text-primary dark:text-white">yadennoplc@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Quotation form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-6 sm:p-8 rounded-2xl bg-white dark:bg-white/5 border-2 border-accent/30 shadow-lg"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary dark:text-gray-200 mb-1.5">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-md border border-black/10 dark:border-white/15 bg-white dark:bg-surface-dark text-primary dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-primary dark:text-gray-200 mb-1.5">
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-md border border-black/10 dark:border-white/15 bg-white dark:bg-surface-dark text-primary dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
            />
          </div>

          <div>
            <label htmlFor="diameter" className="block text-sm font-medium text-primary dark:text-gray-200 mb-1.5">
              Pipe diameter
            </label>
            <input
              id="diameter"
              name="diameter"
              type="text"
              required
              value={form.diameter}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-md border border-black/10 dark:border-white/15 bg-white dark:bg-surface-dark text-primary dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
            />
          </div>

          <div>
            <label htmlFor="pnClass" className="block text-sm font-medium text-primary dark:text-gray-200 mb-1.5">
              PN class
            </label>
            <input
              id="pnClass"
              name="pnClass"
              type="text"
              required
              value={form.pnClass}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-md border border-black/10 dark:border-white/15 bg-white dark:bg-surface-dark text-primary dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent transition-shadow resize-none"
            />
          </div>

          <div>
            <label htmlFor="orderDetails" className="block text-sm font-medium text-primary dark:text-gray-200 mb-1.5">
              Order details
            </label>
            <textarea
              id="orderDetails"
              name="orderDetails"
              rows={4}
              required
              value={form.orderDetails}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-md border border-black/10 dark:border-white/15 bg-white dark:bg-surface-dark text-primary dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent transition-shadow resize-none"
            />
          </div>

          <button type="submit" className="btn-accent w-full justify-center">
            Send quotation request
          </button>

          {submitted && (
            <p className="text-sm text-green-600 dark:text-green-400 text-center pt-2">
              {t('contact_form_success')}
            </p>
          )}

          <p className="text-center text-sm text-steel dark:text-gray-400 pt-1">For the fastest response, contact us directly on WhatsApp.</p>
        </form>
      </section>
    </div>
  )
}
