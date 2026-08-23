import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext.jsx'

const LANGUAGES = [
  { code: 'en', label: 'ENG' },
  { code: 'am', label: 'AMH' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, changeLanguage, t } = useLanguage()
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  const navLinkClass = ({ isActive }) =>
    `relative text-xl sm:text-2xl font-bold transition-colors duration-200 ${isActive
      ? `${isHome ? 'text-white' : 'text-primary'} underline decoration-accent decoration-4 underline-offset-8`
      : `${isHome ? 'text-white hover:text-gray-200' : 'text-primary hover:text-primary/80'}`
    }`

  const mobileNavLinkClass = ({ isActive }) =>
    `relative text-xl font-bold transition-colors duration-200 ${isActive
      ? 'text-primary underline decoration-accent decoration-4 underline-offset-8'
      : 'text-primary hover:text-accent'
    }`

  const links = [
    { to: '/', label: t('nav_home') },
    { to: '/products', label: t('nav_products') },
    { to: '/about', label: t('nav_about') },
    { to: '/contact', label: t('nav_contact') },
  ]

  return (
    <header className="absolute top-0 inset-x-0 z-50 transition-colors duration-300"
      style={{
        background: 'rgba(255, 255, 255, 0.20)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <nav className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 mx-auto flex items-center justify-between h-20">
        {/* Logo — far left. Text wordmark "YADENNO" is the primary brand mark;
            the small svg mark from src/assets is used as an accent icon. */}
        <Link to="/" className="flex items-center shrink-0" onClick={() => setMobileOpen(false)}>
          <img src="/logo.png" alt="Yadenno Plastics PLC" className="h-16 sm:h-[4.5rem] w-auto opacity-95" />
        </Link>

        {/* Center nav links (desktop) */}
        <ul className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={navLinkClass} end={link.to === '/'}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right side controls */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact" className={`border-2 border-accent px-5 py-2 rounded-md font-medium hover:bg-accent hover:text-white transition-colors ${isHome ? 'text-white' : 'text-primary'}`}>
            {t('nav_quote')}
          </Link>

          {/* Language switch */}
          <button
            type="button"
            onClick={() => changeLanguage(lang === 'en' ? 'am' : 'en')}
            className={`flex items-center gap-1 p-1 rounded-full text-sm font-mono font-bold bg-white/10 transition-colors duration-300 ${isHome ? 'text-white hover:bg-white/20' : 'text-primary hover:bg-primary/10'}`}
            aria-label="Toggle language"
          >
            <span className={`px-2.5 py-1 rounded-full transition-colors ${lang === 'en' ? `${isHome ? 'bg-white text-primary' : 'bg-primary text-white'} shadow-sm` : isHome ? 'text-white/70' : 'text-primary/70'}`}>EN</span>
            <span className={`px-2.5 py-1 rounded-full transition-colors ${lang === 'am' ? `${isHome ? 'bg-white text-primary' : 'bg-primary text-white'} shadow-sm` : isHome ? 'text-white/70' : 'text-primary/70'}`}>AM</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-black/5 ${mobileOpen ? 'max-h-[28rem]' : 'max-h-0'
          }`}
      >
        <div className="section-container py-4 flex flex-col gap-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMobileOpen(false)}
              className={mobileNavLinkClass}
            >
              {link.label}
            </NavLink>
          ))}

          <Link to="/contact" onClick={() => setMobileOpen(false)} className="border-2 border-accent text-primary px-5 py-2 rounded-md font-medium text-center w-full">
            {t('nav_quote')}
          </Link>

          <div className="flex justify-end pt-2 border-t border-black/5">
            <div className="flex gap-2">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => changeLanguage(l.code)}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono font-semibold border transition-colors duration-200 ${lang === l.code
                    ? 'bg-accent text-white border-accent'
                    : 'border-primary/20 text-primary'
                    }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
