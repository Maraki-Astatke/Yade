import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary dark:bg-surface-dark border-t border-white/10 text-gray-300">
      <div className="section-container py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-mono text-2xl font-bold text-white tracking-tight">
            YADENNO<span className="text-accent">.</span>
          </span>
          <p className="mt-3 text-sm text-gray-400 max-w-xs">{t('footer_tagline')}</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">{t('nav_home')}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-accent transition-colors">{t('nav_home')}</Link></li>
            <li><Link to="/products" className="hover:text-accent transition-colors">{t('nav_products')}</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">{t('nav_about')}</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">{t('nav_contact')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">{t('contact_info_title')}</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>{t('contact_info_address')}</li>
            <li>{t('contact_info_phone')}</li>
            <li>{t('contact_info_email')}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">{t('contact_info_hours')}</h4>
          <p className="text-sm text-gray-400">Tatek Industry Zone, Ethiopia</p>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        © {year} Yadenno Plastics PLC. {t('footer_rights')}
      </div>
    </footer>
  )
}
