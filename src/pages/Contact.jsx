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
          className="grid h-full grid-cols-1 sm:grid-cols-2 gap-5 rounded-2xl border-2 border-accent/30 bg-surface-light p-6 sm:p-8 shadow-lg"
        >
          {[
            { id: 'name', label: t('home_full_name'), type: 'text', placeholder: t('home_full_name_placeholder') },
            { id: 'phone', label: t('home_phone_number'), type: 'tel', placeholder: '+251 9XX XXX XXX' },
            { id: 'diameter', label: t('home_pipe_diameter'), type: 'text', placeholder: t('home_pipe_diameter_placeholder') },
            { id: 'pnClass', label: t('home_pn_class'), type: 'text', placeholder: t('home_pn_class_placeholder') },
          ].map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="mb-1.5 block text-sm font-medium text-primary">{field.label}</label>
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                required
                placeholder={field.placeholder}
                value={form[field.id]}
                onChange={handleChange}
                className="w-full rounded-md border border-black/10 bg-white px-4 py-2.5 text-primary focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          ))}

          <div className="sm:col-span-2">
            <label htmlFor="orderDetails" className="mb-1.5 block text-sm font-medium text-primary">{t('home_order_details')}</label>
            <textarea
              id="orderDetails"
              name="orderDetails"
              rows={4}
              required
              value={form.orderDetails}
              onChange={handleChange}
              className="w-full resize-none rounded-md border border-black/10 bg-white px-4 py-2.5 text-primary focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <button type="submit" className="btn-accent w-full justify-center sm:col-span-2">
            {t('home_send_quote')}
          </button>

          {submitted && (
            <p className="text-sm text-green-600 dark:text-green-400 text-center pt-2">
              {t('contact_form_success')}
            </p>
          )}

          <p className="text-center text-sm text-steel sm:col-span-2 pt-1">{t('home_quote_note')}</p>
        </form>
      </section>
    </div>
  )
}
