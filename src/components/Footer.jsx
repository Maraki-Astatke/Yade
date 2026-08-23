import { useLanguage } from '../context/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary dark:bg-surface-dark border-t border-white/10 text-gray-300">
      <div className="section-container py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:items-start">
        <div>
          <img src="/bg-logo.png" alt="Yadenno Plastics PLC" className="h-20 w-auto object-contain object-left opacity-100" />
          <p className="mt-3 text-base text-gray-400 leading-relaxed">{t('footer_tagline')}</p>
        </div>

        <div className="lg:pt-2">
          <h4 className="text-white font-semibold leading-6 mb-3">{t('footer_factory')}</h4>
          <address className="not-italic whitespace-pre-line text-base text-gray-400 leading-relaxed">
            {t('footer_factory_address')}
          </address>
        </div>

        <div className="lg:pt-2">
          <h4 className="text-white font-semibold leading-6 mb-3">{t('contact_info_title')}</h4>
          <ul className="space-y-2 text-base text-gray-400">
            <li>{t('contact_info_address')}</li>
            <li>{t('contact_info_phone')}</li>
            <li>{t('contact_info_email')}</li>
          </ul>
        </div>

        <div className="lg:pt-2">
          <h4 className="text-white font-semibold mb-3">{t('footer_working_hours')}</h4>
          <p className="text-base text-gray-400 leading-relaxed">
            {t('footer_working_days')}<br />
            {t('footer_working_time')}
          </p>
        </div>

      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-500">
        © {year} Yadenno Plastics PLC. {t('footer_rights')}
      </div>
    </footer>
  )
}
