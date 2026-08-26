import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'

const SLIDES = ['/grey.png', '/orange.png', '/hero.jpg']
const SLIDE_DURATION = 5000

/**
 * Hero section.
 *
 * - A 3-image background carousel crossfades continuously.
 * - Hovering (desktop) or tapping (touch) the section reveals the
 *   heading/tagline/CTA in the center.
 * - Leaving the hover (or tapping again on touch) reverses the animation.
 */
export default function Hero() {
  const { t } = useLanguage()
  const [slideIndex, setSlideIndex] = useState(0)
  const timerRef = useRef(null)

  // Background carousel autoplay.
  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % SLIDES.length)
    }, SLIDE_DURATION)
    return () => window.clearInterval(timerRef.current)
  }, [])

  return (
    <section
      className="relative w-full overflow-hidden bg-primary-dark select-none"
      aria-label="Yadenno Plastics PLC hero"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/hero.jpg)' }}
        />
      </div>
    <div className="grid min-h-[780px] lg:min-h-[840px] lg:grid-cols-[11fr_9fr]">
        <div
          className="relative z-10 flex items-center justify-center border-r border-white/[0.08] px-6 pb-24 pt-40 sm:px-12 sm:pt-36 sm:pb-24 lg:px-16 lg:py-24 xl:px-24"
          style={{
            background: 'linear-gradient(rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)), rgba(255, 255, 255, 0.20)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          <div className="max-w-xl text-center text-white">
          <p className="mb-4 text-xs font-normal uppercase tracking-[0.16em] text-accent sm:text-sm">
            {t('hero_certified')}
          </p>
          <h1 className="whitespace-nowrap text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {t('hero_brand_prefix')} <span className="text-accent">{t('hero_brand_plastics')}</span> {t('hero_brand_suffix')}
          </h1>
          <p className="mt-4 text-base font-normal leading-relaxed tracking-tight text-white sm:text-lg lg:text-xl">
            {t('hero_tagline')}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-100/85 sm:text-base">
            {t('hero_description')}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/products"
              className="btn-circle-border min-w-44 justify-center text-base shadow-xl shadow-black/20"
            >
              {t('hero_cta')}
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=251961363636"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-w-44 items-center justify-center rounded-full border-2 border-accent bg-primary/35 px-6 py-3 text-base font-semibold text-white shadow-xl shadow-black/20 transition-colors hover:bg-accent"
            >
              {t('hero_whatsapp')}
            </a>
          </div>
          <p className="mt-10 text-xs font-mono uppercase tracking-widest text-white/60">
            <span className="text-accent">{t('hero_manufacturer')}</span> · {t('hero_location')} · <span className="text-accent">{t('hero_country')}</span>
          </p>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden lg:min-h-0">
          {SLIDES.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${i === slideIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/10" />
          <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2.5 lg:left-10 lg:translate-x-0">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setSlideIndex(i)
                  window.clearInterval(timerRef.current)
                  timerRef.current = window.setInterval(() => {
                    setSlideIndex((prev) => (prev + 1) % SLIDES.length)
                  }, SLIDE_DURATION)
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === slideIndex ? 'w-8 bg-accent' : 'w-2.5 bg-white/70 hover:bg-white'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
