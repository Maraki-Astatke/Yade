import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Home() {
  const { t } = useLanguage()

  const reasons = [
    { title: t('home_why_1_title'), desc: t('home_why_1_desc'), icon: '✅' },
    { title: t('home_why_2_title'), desc: t('home_why_2_desc'), icon: '📐' },
    { title: t('home_why_3_title'), desc: t('home_why_3_desc'), icon: '🏭' },
  ]

  return (
    <div>
      <Hero />

      {/* Why Yadenno */}
      <section className="section-container py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary dark:text-white tracking-tight">
              {t('home_why_title')}
            </h2>
            <p className="text-steel dark:text-gray-400 text-lg leading-relaxed">
              We are dedicated to providing the highest quality UPVC pipes for construction and water supply systems. Our commitment to excellence ensures durability, reliability, and superior performance for all your plumbing needs.
            </p>

            <ul className="space-y-6">
              {reasons.map((reason, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/10 text-accent flex items-center justify-center mt-1 border border-accent/20">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary dark:text-white">{reason.title}</h3>
                    <p className="text-sm text-steel dark:text-gray-400 mt-1">{reason.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link to="/about" className="btn-accent inline-flex items-center gap-2 mt-4 rounded-md px-8 py-3.5 shadow-xl shadow-accent/20">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>

          {/* Right Column - Image Collage (reference layout, allgrey.jpg only) */}
          <div className="relative h-[340px] sm:h-[380px] w-full mt-10 lg:mt-0">
            {/* Main large image - takes top ~68%, rounded top corners + bottom-right, flat bottom-left */}
            <div
              className="absolute top-0 left-0 right-0 bottom-[34%]"
              style={{ borderRadius: '1.75rem 1.75rem 1.75rem 0' }}
            >
              <img
                src="/allgrey.jpg"
                alt="Yadenno Plastics facility"
                className="w-full h-full object-cover"
                style={{ borderRadius: 'inherit' }}
              />
            </div>

            {/* Bottom-left block - ~55% wide, rounded bottom-left corner, flat others */}
            <div
              className="absolute bottom-0 left-0 w-[56%] top-[68%]"
              style={{ borderRadius: '0 0 0 1.75rem' }}
            >
              <img
                src="/allgrey.jpg"
                alt="Yadenno Plastics facility detail"
                className="w-full h-full object-cover object-right"
                style={{ borderRadius: 'inherit' }}
              />
            </div>

            {/* Bottom-right pill - ~40% wide, only bottom-right rounded */}
            <div
              className="absolute bottom-0 right-0 w-[40%] top-[68%]"
              style={{ borderRadius: '0 0 1.75rem 0' }}
            >
              <img
                src="/allgrey.jpg"
                alt="Yadenno Plastics pipe"
                className="w-full h-full object-cover object-left"
                style={{ borderRadius: 'inherit' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Line Section ── */}
      <section className="section-container py-20">
        {/* Header Row — centered */}
        <div className="flex flex-col items-center text-center gap-6 mb-12">
          <div>
            <p className="text-accent font-mono text-sm font-bold uppercase tracking-widest mb-2">Product Line</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary dark:text-white tracking-tight leading-tight">
              UPVC Pipe in Two Builds
            </h2>
            <p className="text-steel dark:text-gray-400 mt-4 max-w-xl text-base leading-relaxed">
              The same A-style socketed joint, produced in the finish your project calls for.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 shrink-0 bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 shadow-lg shadow-accent/20 hover:-translate-y-0.5"
          >
            See All
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-6 items-start">

          {/* Left — large card: Pressure Pipe with allgrey.jpg */}
          <div className="rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
            <div className="h-72 sm:h-80 overflow-hidden">
              <img
                src="/allgrey.jpg"
                alt="UPVC Pressure Pipe"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-7 flex flex-col flex-1 gap-4">
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full w-fit">Pressure Line</span>
              <h3 className="text-2xl font-extrabold text-primary dark:text-white">UPVC Pressure Pipe</h3>
              <p className="text-steel dark:text-gray-400 text-sm leading-relaxed">
                Our orange-line pipe is built for water-supply applications where consistent pressure rating matters. Socketed A-style ends give a fast, reliable joint on site.
              </p>
              <ul className="space-y-2 mt-1">
                {['PN4, PN6, PN10, PN16 classes available', '50–250mm diameter range'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-steel dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-accent shrink-0">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/products"
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors"
              >
                View Specifications
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right — two stacked cards: Drainage Pipe with hero.jpg */}
          <div className="flex flex-col gap-6 h-full">
            {/* Top card — image */}
            <div className="rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="h-52 sm:h-60 overflow-hidden">
                <img
                  src="/hero.jpg"
                  alt="UPVC Drainage Pipe"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Bottom card — text content */}
            <div className="rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm hover:shadow-xl transition-all duration-300 p-7 flex flex-col gap-4 flex-1">
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-primary dark:text-gray-300 bg-primary/10 dark:bg-white/10 px-3 py-1 rounded-full w-fit">Drainage Line</span>
              <h3 className="text-2xl font-extrabold text-primary dark:text-white">UPVC Drainage Pipe</h3>
              <p className="text-steel dark:text-gray-400 text-sm leading-relaxed">
                The grey-line finish suits drainage and sewage runs, with the same joint system and diameter range as our pressure line for straightforward specification across mixed-use sites.
              </p>
              <ul className="space-y-2">
                {['Reliable A-style socket joint', 'Durable construction for underground use'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-steel dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-primary dark:text-gray-300 shrink-0">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/products"
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-gray-300 hover:text-accent dark:hover:text-accent-light transition-colors"
              >
                View Specifications
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </section>


      <section className="bg-primary dark:bg-surface-dark border-t border-black/5 dark:border-white/10">
        <div className="section-container py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{t('home_cta_title')}</h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">{t('home_cta_desc')}</p>
          <Link to="/contact" className="btn-accent">
            {t('home_cta_button')}
          </Link>
        </div>
      </section>
    </div>
  )
}
