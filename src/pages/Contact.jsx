import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'

const INITIAL_FORM = { name: '', email: '', phone: '', message: '' }

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

      <section className="section-container py-16 grid gap-12 lg:grid-cols-2">
        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-6 sm:p-8 rounded-lg bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary dark:text-gray-200 mb-1.5">
              {t('contact_form_name')}
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
            <label htmlFor="email" className="block text-sm font-medium text-primary dark:text-gray-200 mb-1.5">
              {t('contact_form_email')}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-md border border-black/10 dark:border-white/15 bg-white dark:bg-surface-dark text-primary dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-primary dark:text-gray-200 mb-1.5">
              {t('contact_form_phone')}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-md border border-black/10 dark:border-white/15 bg-white dark:bg-surface-dark text-primary dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-primary dark:text-gray-200 mb-1.5">
              {t('contact_form_message')}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-md border border-black/10 dark:border-white/15 bg-white dark:bg-surface-dark text-primary dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent transition-shadow resize-none"
            />
          </div>

          <button type="submit" className="btn-accent w-full justify-center">
            {t('contact_form_submit')}
          </button>

          {submitted && (
            <p className="text-sm text-green-600 dark:text-green-400 text-center pt-2">
              {t('contact_form_success')}
            </p>
          )}
        </form>

        {/* Contact info */}
        <div className="space-y-6">
          <div className="p-6 rounded-lg bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm">
            <h2 className="text-xl font-semibold text-primary dark:text-white mb-4">{t('contact_info_title')}</h2>
            <ul className="space-y-3 text-sm text-steel dark:text-gray-400">
              <li className="flex gap-3">
                <span className="text-accent">📍</span> {t('contact_info_address')}
              </li>
              <li className="flex gap-3">
                <span className="text-accent">📞</span> {t('contact_info_phone')}
              </li>
              <li className="flex gap-3">
                <span className="text-accent">✉️</span> {t('contact_info_email')}
              </li>
              <li className="flex gap-3">
                <span className="text-accent">🕘</span> {t('contact_info_hours')}
              </li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden border border-black/5 dark:border-white/10 h-72 sm:h-80">
            <img src="/fab2.jpg" alt="Yadenno Plastics production facility" className="w-full h-full object-cover object-center" />
          </div>
        </div>
      </section>
    </div>
  )
}
