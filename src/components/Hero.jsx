import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'

/**
 * Hero section.
 *
 * - Displays hero.png as a bright, static full-screen background.
 * - Centers the main heading/tagline/CTA on top.
 */
export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      className="relative w-full min-h-[780px] lg:min-h-[840px] overflow-hidden bg-primary-dark select-none flex items-center justify-center"
      aria-label="Yadenno Plastics PLC hero"
    >
      {/* Background showing hero.png */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(/hero.png)' }}
        />
        {/* Soft white brightening overlay */}
        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* Full-screen Content Overlay */}
      <div
        className="relative z-10 w-full min-h-[780px] lg:min-h-[840px] flex items-center justify-center px-6 pt-32 pb-24 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <p className="mb-4 text-[12.5px] font-bold uppercase tracking-[0.16em] text-accent sm:text-[12.5px] md:text-[13.5px] lg:text-[14px] xl:text-[16px]">
            {t('hero_certified')}
          </p>
          <h1 className="sm:whitespace-nowrap text-[28px] font-extrabold leading-tight tracking-tight sm:text-[38px] md:text-[46px] lg:text-[52px] xl:text-[56px] text-primary">
            {t('hero_brand_prefix')} <span className="text-accent">{t('hero_brand_plastics')}</span> {t('hero_brand_suffix')}
          </h1>
          <p className="mt-4 text-[16px] font-bold leading-relaxed tracking-tight text-primary sm:text-[17px] md:text-[19px] lg:text-[21px] xl:text-[24px]">
            {t('hero_tagline')}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-[14.5px] leading-relaxed text-steel-dark sm:text-[14.5px] md:text-[15.5px] lg:text-[16px] xl:text-[18px]">
            {t('hero_description')}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/products"
              className="inline-flex min-w-44 items-center justify-center rounded-full bg-primary px-6 py-3.5 text-[15.5px] sm:text-[16px] md:text-[16.5px] lg:text-[16.5px] xl:text-[17.5px] font-bold text-white shadow-xl shadow-primary/20 transition-colors hover:bg-primary-light"
            >
              {t('hero_cta')}
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=251961363636"
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp inline-flex min-w-44 items-center justify-center rounded-full px-6 py-3 text-[15.5px] sm:text-[16px] md:text-[16.5px] lg:text-[16.5px] xl:text-[17.5px] font-bold shadow-xl shadow-accent/10"
            >
              {t('hero_whatsapp')}
            </a>
          </div>
          <p className="mt-10 whitespace-nowrap text-[12.5px] font-bold font-mono uppercase tracking-widest text-accent sm:text-[12.5px] md:text-[13.5px] lg:text-[14px] xl:text-[16px]">
            <span className="text-accent">{t('hero_manufacturer')}</span> · <span className="text-primary">{t('hero_location')}</span> · <span className="text-accent">{t('hero_country')}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
