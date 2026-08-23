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
          <div className="grid grid-cols-1 sm:grid-cols-4 overflow-hidden border-2 border-accent rounded-2xl shadow-sm">
            <div className="flex flex-col items-center justify-center gap-1 px-4 py-6 sm:py-8 text-center border-b sm:border-b-0 sm:border-r border-accent hover:bg-accent/5 transition-colors duration-300">
              <span className="text-xl sm:text-2xl font-medium tracking-tight text-primary dark:text-white">50–250</span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">mm diameter</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 px-4 py-6 sm:py-8 text-center border-b sm:border-b-0 sm:border-r border-accent hover:bg-accent/5 transition-colors duration-300">
              <span className="text-xl sm:text-2xl font-medium tracking-tight text-primary dark:text-white">PN4–PN16</span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">pressure classes</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 px-4 py-6 sm:py-8 text-center hover:bg-accent/5 transition-colors duration-300">
              <span className="text-xl sm:text-2xl font-medium tracking-tight text-primary dark:text-white">ES ISO 1452-1 &amp; 2</span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">quality standard</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 px-4 py-6 sm:py-8 text-center border-t sm:border-t-0 sm:border-l border-accent hover:bg-accent/5 transition-colors duration-300">
              <span className="text-xl sm:text-2xl font-medium tracking-tight text-primary dark:text-white">2 Sites</span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">Infrastructure</span>
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
              {t('home_why_intro')}
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
                    <h3 className="font-bold text-xl sm:text-2xl text-primary dark:text-white">{reason.title}</h3>
                    <p className="text-base sm:text-lg text-steel dark:text-gray-400 mt-1 leading-relaxed whitespace-pre-line">{reason.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link to="/about" className="btn-accent inline-flex w-fit items-center gap-2 mt-0 rounded-md px-6 py-3 shadow-xl shadow-accent/20">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>

          {/* Right Column - Full flexible mix image */}
          <div className="relative h-[420px] sm:h-[520px] w-full mt-10 lg:mt-0 overflow-hidden rounded-3xl">
            <img
              src="/mix.png"
              alt="Yadenno Plastics products"
              className="w-full h-full object-contain p-2 sm:p-4"
            />
          </div>
        </div>
      </section>

      {/* ── Product Section ── */}
      <section className="py-20" style={{ backgroundColor: '#132D46' }}>
        <div className="section-container">
          <div className="flex flex-col items-center text-center gap-6 mb-12">
            <div>
              <p className="text-accent font-mono text-sm font-bold uppercase tracking-widest mb-2">Our Products</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Pipe systems for Ethiopia’s essential infrastructure.
              </h2>
              <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-base leading-relaxed text-center">
                From water networks to drainage and electrical installations, Yadenno provides consistent, dependable pipe systems at fair factory prices.
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

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {[
              {
                image: '/orange-bg.png',
                alt: 'UPVC Pressure Pipes',
                title: 'UPVC Pressure Pipes',
                description: 'Water supply, irrigation and boreholes',
                specification: '50–250 mm · PN4–PN16',
              },
              {
                image: '/grey-bg.png',
                alt: 'UPVC Sewerage Pipes',
                title: 'UPVC Sewerage Pipes',
                description: 'Sewerage and underground drainage',
                specification: 'Durable socketed pipe systems',
              },
              {
                image: '/pipe.png',
                alt: 'UPVC Electrical Conduit',
                title: 'Electrical Conduit',
                description: 'Safe routing for electrical installations',
                specification: 'Consistent diameter and wall thickness',
              },
            ].map((product) => (
              <article key={product.title} className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-center shadow-sm hover:border-accent/60 hover:shadow-xl transition-all duration-300 group">
                <div className="h-64 sm:h-72 flex items-center justify-center p-4 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6 gap-3 opacity-100 translate-y-0 group-hover:-translate-y-1 transition-transform duration-500 ease-out">
                  <h3 className="text-xl font-extrabold text-white">{product.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{product.description}</p>
                  <p className="text-white font-semibold text-sm">{product.specification}</p>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors">
                    Request specifications
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quality Assurance Section ── */}
      <section className="bg-white py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-accent font-mono text-sm font-bold uppercase tracking-widest mb-3">Quality assurance</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight">
                Quality is measured.
                <span className="block text-accent">Not merely promised.</span>
              </h2>
              <p className="text-steel mt-5 text-lg leading-relaxed max-w-md">
                Our quality assurance team checks every pipe for the measurements and finish that matter in the field.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Diameter', description: 'Checked for dimensional consistency' },
                { title: 'Wall thickness', description: 'Verified against product specification' },
                { title: 'Weight', description: 'Controlled throughout production' },
                { title: 'Socket & belling', description: 'Inspected for reliable installation' },
              ].map((item) => (
                <div key={item.title} className="border border-primary/15 border-l-4 border-l-accent p-5 hover:border-accent transition-colors duration-300">
                  <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm text-steel leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 border-t-2 border-accent pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h3 className="text-lg font-bold text-primary">Certified products</h3>
            <p className="text-sm text-steel">Ethiopian Conformity Assessment Enterprise · ES ISO 1452-1 &amp; 2</p>
          </div>
        </div>
      </section>

      {/* ── Applications and Supply Section ── */}
      <section className="py-24" style={{ backgroundColor: '#132D46' }}>
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-accent font-mono text-sm font-bold uppercase tracking-widest mb-3">Built for real work</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                One manufacturer.
                <span className="block text-accent">Many applications.</span>
              </h2>
              <p className="text-gray-300 mt-5 text-lg leading-relaxed max-w-xl">
                We support wholesalers, distributors, contractors and infrastructure projects with dependable supply and technical guidance.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {['Water supply', 'Irrigation', 'Boreholes', 'Sewerage', 'Underground drainage', 'Electrical conduit', 'Downpipes'].map((application) => (
                  <span key={application} className="border border-white/60 bg-transparent px-4 py-2 text-sm font-medium text-white transition-all duration-300 ease-out hover:border-white hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10">
                    {application}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-l-4 border-accent bg-white p-8 sm:p-10 shadow-sm">
              <p className="text-sm font-mono font-bold uppercase tracking-widest text-accent">From our factory in</p>
              <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-primary">Tatek Industry Zone,</h3>
              <p className="text-xl text-steel">Burayu, Oromia</p>

              <div className="mt-8 border-t border-primary/10 pt-6">
                <h4 className="text-lg font-bold text-primary">Supply across Ethiopia</h4>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  Free delivery in Addis Ababa for qualifying bulk wholesale and distributor orders.
                </p>
                <Link to="/contact" className="btn-accent mt-6 inline-flex items-center gap-2">
                  Discuss your order
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
