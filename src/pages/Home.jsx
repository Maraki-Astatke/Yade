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

      {/* Key product specifications */}
      <section className="bg-white dark:bg-surface-dark border-b border-black/5 dark:border-white/10 mt-8 sm:mt-12">
        <div className="section-container py-8 sm:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 overflow-hidden border-2 border-accent rounded-2xl shadow-sm">
            <div className="flex flex-col items-center justify-center gap-1 px-4 py-6 sm:py-8 text-center border-b sm:border-b-0 sm:border-r border-accent hover:bg-accent/5 transition-colors duration-300">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-primary dark:text-white">50–250</span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">mm diameter</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 px-4 py-6 sm:py-8 text-center border-b sm:border-b-0 sm:border-r border-accent hover:bg-accent/5 transition-colors duration-300">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-primary dark:text-white">PN4–PN16</span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">pressure classes</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 px-4 py-6 sm:py-8 text-center hover:bg-accent/5 transition-colors duration-300">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-primary dark:text-white">ES ISO 1452-1 &amp; 2</span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">quality standard</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Yadenno */}
      <section className="section-container py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary dark:text-white tracking-tight">
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
      <section className="bg-primary py-20">
        {/* Header Row — centered */}
        <div className="section-container">
        <div className="flex flex-col items-center text-center gap-6 mb-12">
          <div>
            <p className="text-accent font-mono text-sm font-bold uppercase tracking-widest mb-2">Product Line</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              UPVC Pipe in Two Builds
            </h2>
            <p className="text-gray-300 mt-4 max-w-xl text-base leading-relaxed">
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

          {/* Left — large card: Pressure Pipe */}
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
            <div className="bg-white/5 flex items-center justify-center p-6" style={{minHeight:'22rem'}}>
              <img
                src="/orange.png"
                alt="UPVC Pressure Pipe"
                className="w-full h-auto max-h-[20rem] object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-7 flex flex-col flex-1 gap-4">
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-accent bg-accent/20 px-3 py-1 rounded-full w-fit">Pressure Line</span>
              <h3 className="text-xl font-extrabold text-white">UPVC Pressure Pipe</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our orange-line pipe is built for water-supply applications where consistent pressure rating matters. Socketed A-style ends give a fast, reliable joint on site.
              </p>
              <ul className="space-y-2 mt-1">
                {['PN4, PN6, PN10, PN16 classes available', '50–250mm diameter range'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
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
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-white/5 flex items-center justify-center p-6" style={{minHeight:'18rem'}}>
                <img
                  src="/grey.png"
                  alt="UPVC Drainage Pipe"
                  className="w-full h-auto max-h-[16rem] object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Bottom card — text content */}
            <div className="rounded-3xl border border-white/10 bg-white/5 shadow-sm hover:shadow-xl transition-all duration-300 p-7 flex flex-col gap-4 flex-1">
              <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-gray-300 bg-white/10 px-3 py-1 rounded-full w-fit">Drainage Line</span>
              <h3 className="text-xl font-extrabold text-white">UPVC Drainage Pipe</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                The grey-line finish suits drainage and sewage runs, with the same joint system and diameter range as our pressure line for straightforward specification across mixed-use sites.
              </p>
              <ul className="space-y-2">
                {['Reliable A-style socket joint', 'Durable construction for underground use'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-accent shrink-0">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/products"
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-accent transition-colors"
              >
                View Specifications
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
        </div>
      </section>

      {/* ── Core Metrics Section ── */}
      <section className="bg-surface-light dark:bg-surface-dark py-24">
        <div className="section-container">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-accent font-mono text-sm font-bold uppercase tracking-widest mb-3">Core Metrics</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary dark:text-white tracking-tight">
              WHAT SETS US APART
            </h2>
            <p className="text-steel dark:text-gray-400 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              Our facilities and infrastructure are scaled to meet the growing demands of Ethiopia's construction and water management sectors.
            </p>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                num: '1',
                stat: 'PN4–PN16',
                label: 'Pressure Classes',
                desc: 'Comprehensive pressure ratings for diverse water supply applications.',
                link: '/products',
              },
              {
                num: '2',
                stat: '50–250mm',
                label: 'Diameter Range',
                desc: 'Full spectrum of pipe sizes covering both residential and civil projects.',
                link: '/products',
              },
              {
                num: '3',
                stat: '2 Sites',
                label: 'Infrastructure',
                desc: 'Manufacturing in Sheger City with dedicated distribution from Addis Ababa.',
                link: '/about',
              },
            ].map((card) => (
              <div
                key={card.num}
                className="relative flex flex-col gap-4 p-7 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Number badge */}
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-accent/20 text-accent font-mono font-bold text-sm">
                  {card.num}
                </span>

                <div>
                  <p className="text-2xl font-extrabold text-primary dark:text-white tracking-tight">{card.stat}</p>
                  <p className="text-accent text-sm font-semibold mt-0.5">{card.label}</p>
                </div>

                <p className="text-steel dark:text-gray-400 text-sm leading-relaxed flex-1">{card.desc}</p>

                <Link
                  to={card.link}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary dark:text-gray-300 hover:text-accent transition-colors group-hover:gap-2.5"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary dark:bg-surface-dark border-t border-black/5 dark:border-white/10">
        <div className="section-container py-16 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">{t('home_cta_title')}</h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">{t('home_cta_desc')}</p>
          <Link to="/contact" className="btn-accent">
            {t('home_cta_button')}
          </Link>
        </div>
      </section>
    </div>
  )
}
