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
  const [merged, setMerged] = useState(false)
  // Detect touch/no-hover devices once, during initial render, so we know
  // whether to rely on hover handlers or the tap-to-toggle fallback.
  const [isTouch] = useState(
    () => typeof window !== 'undefined' && !!window.matchMedia && window.matchMedia('(hover: none)').matches
  )
  const timerRef = useRef(null)

  // Background carousel autoplay.
  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % SLIDES.length)
    }, SLIDE_DURATION)
    return () => window.clearInterval(timerRef.current)
  }, [])

  const handleMouseEnter = () => {
    if (!isTouch) setMerged(true)
  }
  const handleMouseLeave = () => {
    if (!isTouch) setMerged(false)
  }
  const handleTap = () => {
    if (isTouch) setMerged((prev) => !prev)
  }

  return (
    <section
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTap}
      className="relative w-full h-[86vh] min-h-[610px] overflow-hidden select-none cursor-pointer"
      aria-label="Yadenno Plastics PLC hero"
    >
      {/* Background image carousel */}
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${i === slideIndex ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      {/* Dark gradient scrim for legibility (constant darkness) */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Idle hint, shown until the hero text is revealed */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${merged ? 'opacity-0' : 'opacity-100'
          }`}
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-xl mb-3">
          {t('hero_brand_prefix')} <span className="text-accent">{t('hero_brand_plastics')}</span> {t('hero_brand_suffix')}
        </h2>
        <p className="text-sm sm:text-base font-mono tracking-widest uppercase mb-6 drop-shadow-md text-center px-4 text-white/90">
          <span className="text-accent">{t('hero_manufacturer')}</span> · {t('hero_location')} · <span className="text-accent">{t('hero_country')}</span>
        </p>
      </div>

      <div className={`absolute bottom-16 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center transition-opacity duration-300 ${merged ? 'opacity-0' : 'opacity-100'
        }`}>
        <span className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h14" />
          </svg>
          <span>
            <span className="text-white">{isTouch ? `${t('hero_hint_mobile')} ` : `${t('hero_hint')} `}</span>
          </span>
        </span>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation()
              setSlideIndex(i)
              // Reset the timer when manually clicking
              window.clearInterval(timerRef.current)
              timerRef.current = window.setInterval(() => {
                setSlideIndex((prev) => (prev + 1) % SLIDES.length)
              }, SLIDE_DURATION)
            }}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${i === slideIndex
                ? 'w-8 h-2.5 bg-accent'
                : 'w-2.5 h-2.5 bg-white/70 hover:bg-white'
              }`}
          />
        ))}
      </div>

      {/* Revealed content, shown once the pipes meet */}
      <div
        className={`absolute inset-0 flex items-center justify-center px-6 transition-all duration-500 ${merged ? 'opacity-100 translate-y-0 delay-300 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
      >
        <div className="max-w-3xl text-center text-white">
          <p className="mb-4 text-white text-sm sm:text-base font-bold uppercase tracking-wider drop-shadow">
            {t('hero_certified')}
          </p>
          <h1 className="font-mono text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance drop-shadow-lg">
            {t('hero_brand_prefix')} <span className="text-accent">{t('hero_brand_plastics')}</span> {t('hero_brand_suffix')}
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-white drop-shadow">
            {t('hero_tagline')}
          </p>
          <p className="mt-3 text-sm sm:text-base text-gray-100/90 leading-relaxed max-w-2xl mx-auto text-balance">
            {t('hero_description')}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              onClick={(e) => e.stopPropagation()}
              className="btn-circle-border text-base"
            >
              {t('hero_cta')}
            </Link>
            <a
              href="https://wa.me/251110000000"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center rounded-full border-2 border-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-accent"
            >
              {t('hero_whatsapp')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
