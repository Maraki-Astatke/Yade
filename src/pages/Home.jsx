import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Home() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', phone: '', diameter: '', pnClass: '', orderDetails: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', phone: '', diameter: '', pnClass: '', orderDetails: '' })
  }

  const reasons = [
    { title: t('home_why_1_title'), desc: t('home_why_1_desc'), icon: '✅' },
    { title: t('home_why_2_title'), desc: t('home_why_2_desc'), icon: '📐' },
    { title: t('home_why_3_title'), desc: t('home_why_3_desc'), icon: '🏭' },
  ]

  return (
    <div>
      <Hero />

      {/* Key product specifications */}
      <section className="bg-white dark:bg-surface-dark border-b border-black/5 dark:border-white/10 mt-16 sm:mt-20">
        <div className="section-container py-10 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-4 overflow-hidden border-2 border-accent rounded-sm">
            <div className="flex flex-col items-center justify-center gap-1 px-4 py-6 sm:py-8 text-center border-b sm:border-b-0 sm:border-r border-accent hover:bg-accent/5 transition-colors duration-300">
              <span className="text-xl sm:text-2xl font-medium tracking-tight text-primary dark:text-white">50–250</span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">{t('home_spec_diameter')}</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 px-4 py-6 sm:py-8 text-center border-b sm:border-b-0 sm:border-r border-accent hover:bg-accent/5 transition-colors duration-300">
              <span className="text-xl sm:text-2xl font-medium tracking-tight text-primary dark:text-white">PN4–PN16</span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">{t('home_spec_pressure')}</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 px-4 py-6 sm:py-8 text-center hover:bg-accent/5 transition-colors duration-300">
              <span className="text-xl sm:text-2xl font-medium tracking-tight text-primary dark:text-white">ES ISO 1452-1 &amp; 2</span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">{t('home_spec_quality')}</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 px-4 py-6 sm:py-8 text-center border-t sm:border-t-0 sm:border-l border-accent hover:bg-accent/5 transition-colors duration-300">
              <span className="text-xl sm:text-2xl font-medium tracking-tight text-primary dark:text-white">2 Sites</span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">{t('home_spec_infrastructure')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Yadenno */}
      <section className="section-container py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-stretch">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary dark:text-white tracking-tight">
              {t('home_why_title')}
            </h2>

            <ul className="space-y-6">
              {reasons.map((reason, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/10 text-accent flex items-center justify-center mt-1 border border-accent/20">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl text-primary dark:text-white">{reason.title}</h3>
                    <p className="text-sm sm:text-base text-steel dark:text-gray-400 mt-1 leading-relaxed whitespace-pre-line">{reason.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link to="/about" className="btn-accent inline-flex w-fit items-center gap-2 mt-0 rounded-md px-6 py-3 shadow-xl shadow-accent/20">
              {t('home_read_more')}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>

          {/* Right Column - Product video */}
          <div className="relative min-h-[320px] w-full overflow-hidden rounded-sm">
            <video
              src="/videoplayback.mp4"
              className="w-full h-full object-cover"
              muted
              playsInline
              controls
            />
          </div>
        </div>
      </section>

      {/* ── Product Section ── */}
      <section className="py-20" style={{ backgroundColor: '#132D46' }}>
        <div className="section-container">
          <div className="flex flex-col items-center text-center gap-5 mb-10">
            <div>
              <p className="text-accent font-mono text-sm font-bold uppercase tracking-widest mb-2">{t('home_products_eyebrow')}</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {t('home_products_title')}
              </h2>
              <p className="text-gray-300 mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed text-center">
                {t('home_products_desc')}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {[
              {
                image: '/orange-bg.png',
                alt: 'UPVC Pressure Pipes',
                title: t('home_product_pressure_title'),
                description: t('home_product_pressure_desc'),
                specification: t('home_product_pressure_spec'),
              },
              {
                image: '/grey-bg.png',
                alt: 'UPVC Sewerage Pipes',
                title: t('home_product_sewerage_title'),
                description: t('home_product_sewerage_desc'),
                specification: t('home_product_sewerage_spec'),
                featured: true,
              },
              {
                image: '/circut.png',
                alt: 'UPVC Electrical Conduit',
                title: t('home_product_conduit_title'),
                description: t('home_product_conduit_desc'),
                specification: t('home_product_conduit_spec'),
              },
            ].map((product) => (
              <article key={product.title} className={`flex flex-col overflow-hidden rounded-sm border ${product.featured ? 'border-accent/60' : 'border-white/10'} bg-white/5 text-center hover:border-accent/60 transition-colors duration-300 group`}>
                <div className="h-48 sm:h-56 flex items-center justify-center p-2 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-col flex-1 p-4 gap-2 opacity-100 translate-y-0 group-hover:-translate-y-1 transition-transform duration-500 ease-out">
                  <h3 className="text-lg sm:text-xl font-extrabold text-white">{product.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{product.description}</p>
                  <p className="text-white font-semibold text-xs sm:text-sm">{product.specification}</p>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors">
                    {t('home_request_specs')}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border-2 border-white bg-transparent text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 hover:bg-accent hover:border-accent hover:-translate-y-0.5"
            >
              {t('home_see_all')}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quality Assurance Section ── */}
      <section className="bg-white py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-accent font-mono text-sm font-bold uppercase tracking-widest mb-3">{t('home_quality_eyebrow')}</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight">
                {t('home_quality_title')}
                <span className="block text-accent">{t('home_quality_title_accent')}</span>
              </h2>
              <p className="text-steel mt-5 text-base leading-relaxed max-w-md">
                {t('home_quality_desc')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
                {[
                { title: t('home_quality_diameter'), description: t('home_quality_diameter_desc') },
                { title: t('home_quality_wall'), description: t('home_quality_wall_desc') },
                { title: t('home_quality_weight'), description: t('home_quality_weight_desc') },
                { title: t('home_quality_socket'), description: t('home_quality_socket_desc') },
              ].map((item) => (
                <div key={item.title} className="border border-primary/15 border-l-4 border-l-accent p-5 hover:border-accent transition-colors duration-300">
                  <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm text-steel leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 border-t-2 border-accent pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h3 className="text-lg font-bold text-primary">{t('home_certified')}</h3>
            <p className="text-sm text-steel">{t('home_certified_standard')}</p>
          </div>
        </div>
      </section>

      {/* ── Applications and Supply Section ── */}
      <section className="py-24" style={{ backgroundColor: '#132D46' }}>
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-accent font-mono text-sm font-bold uppercase tracking-widest mb-3">{t('home_applications_eyebrow')}</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {t('home_applications_title')}
                <span className="block text-accent">{t('home_applications_title_accent')}</span>
              </h2>
              <p className="text-gray-300 mt-5 text-base leading-relaxed max-w-xl">
                {t('home_applications_desc')}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[t('home_app_water'), t('home_app_irrigation'), t('home_app_boreholes'), t('home_app_sewerage'), t('home_app_drainage'), t('home_app_conduit'), t('home_app_downpipes')].map((application) => (
                  <span key={application} className="border border-white/60 bg-transparent px-4 py-2 text-sm font-medium text-white transition-all duration-300 ease-out hover:border-white hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10">
                    {application}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-l-4 border-accent bg-white p-8 sm:p-10">
              <p className="text-sm font-mono font-bold uppercase tracking-widest text-accent">{t('home_factory_from')}</p>
              <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-primary">{t('home_factory_location')}</h3>
              <p className="text-xl text-steel">{t('home_factory_city')}</p>

              <div className="mt-8 border-t border-primary/10 pt-6">
                <h4 className="text-lg font-bold text-primary">{t('home_supply_title')}</h4>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  {t('home_supply_desc')}
                </p>
                <Link to="/contact" className="btn-accent mt-6 inline-flex items-center gap-2">
                  {t('home_discuss_order')}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Factory Quotation Section ── */}
      <section className="bg-white py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            <div className="flex flex-col lg:py-8">
              <p className="text-accent font-mono text-sm font-bold uppercase tracking-widest mb-3">{t('home_quote_eyebrow')}</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight">
                {t('home_quote_title')}
                <span className="block text-accent">{t('home_quote_title_accent')}</span>
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-steel">
                {t('home_quote_desc')}
              </p>

              <div className="mt-6 grid gap-8 sm:grid-cols-2 items-start">
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-accent mb-1">
                    {t('contact_office_label')}
                  </h3>
                  <p className="text-steel leading-relaxed">{t('contact_office_address')}</p>
                </div>

                <a href="tel:+251961363636" className="border-l-4 border-accent pl-4 hover:text-accent transition-colors">
                  <span className="block text-xs font-mono font-bold uppercase tracking-widest text-accent">{t('home_call_sales')}</span>
                  <span className="mt-1 block text-lg font-semibold text-primary">+251 961 36 36 36</span>
                </a>

                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-accent mb-1">
                    {t('contact_managing_director')}
                  </h3>
                  <p className="font-semibold text-primary">Fisseha K/mariam</p>
                  <div className="mt-1 flex flex-col gap-1 text-steel sm:flex-row sm:gap-4">
                    <a href="mailto:fisseha@nanfisha.com" className="hover:text-accent transition-colors">fisseha@nanfisha.com</a>
                  </div>
                </div>

                <a href="mailto:yadennoplc@gmail.com" className="border-l-4 border-accent pl-4 hover:text-accent transition-colors">
                  <span className="block text-xs font-mono font-bold uppercase tracking-widest text-accent">{t('home_email')}</span>
                  <span className="mt-1 block break-all text-lg font-semibold text-primary">yadennoplc@gmail.com</span>
                </a>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid h-full grid-cols-1 sm:grid-cols-2 gap-5 rounded-sm border-2 border-accent/30 bg-surface-light p-6 sm:p-8"
            >
              {[
                { id: 'quote-name', key: 'name', label: t('home_full_name'), type: 'text', placeholder: t('home_full_name_placeholder') },
                { id: 'quote-phone', key: 'phone', label: t('home_phone_number'), type: 'tel', placeholder: '+251 9XX XXX XXX' },
                { id: 'quote-diameter', key: 'diameter', label: t('home_pipe_diameter'), type: 'text', placeholder: t('home_pipe_diameter_placeholder') },
                { id: 'quote-pn-class', key: 'pnClass', label: t('home_pn_class'), type: 'text', placeholder: t('home_pn_class_placeholder') },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="mb-1.5 block text-sm font-medium text-primary">{field.label}</label>
                  <input
                    id={field.id}
                    name={field.key}
                    type={field.type}
                    required
                    value={form[field.key]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full rounded-md border border-black/10 bg-white px-4 py-2.5 text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              ))}

              <div className="sm:col-span-2">
                <label htmlFor="quote-order-details" className="mb-1.5 block text-sm font-medium text-primary">{t('home_order_details')}</label>
                <textarea
                  id="quote-order-details"
                  name="orderDetails"
                  required
                  value={form.orderDetails}
                  onChange={handleChange}
                  rows={4}
                  className="w-full resize-none rounded-md border border-black/10 bg-white px-4 py-2.5 text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <button type="submit" className="btn-accent inline-flex w-full justify-center sm:col-span-2">
                {t('home_send_quote')}
              </button>

              {submitted && (
                <p className="text-sm text-green-600 dark:text-green-400 text-center sm:col-span-2 pt-2">
                  {t('contact_form_success')}
                </p>
              )}
              <p className="text-center text-sm text-steel sm:col-span-2">{t('home_quote_note')}</p>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-primary dark:bg-surface-dark border-t border-black/5 dark:border-white/10 mb-4">
        <div className="section-container py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{t('home_cta_title')}</h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto mb-8">{t('home_cta_desc')}</p>
          <Link to="/contact" className="btn-accent">
            {t('home_cta_button')}
          </Link>
        </div>
      </section>
    </div>
  )
}
