import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoMark from '../assets/favicon.svg'
import { useTheme } from '../context/ThemeContext.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

const LANGUAGES = [
  { code: 'en', label: 'ENG' },
  { code: 'am', label: 'AMH' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { lang, changeLanguage, t } = useLanguage()

  const navLinkClass = ({ isActive }) =>
    `relative text-lg sm:text-xl font-bold transition-colors duration-200 ${isActive
      ? 'text-white underline decoration-accent decoration-4 underline-offset-8'
      : 'text-white hover:text-gray-200'
    }`

  const links = [
    { to: '/', label: t('nav_home') },
    { to: '/products', label: t('nav_products') },
    { to: '/about', label: t('nav_about') },
    { to: '/contact', label: t('nav_contact') },
  ]

  return (
    <header className="absolute top-0 inset-x-0 z-50 bg-transparent transition-colors duration-300">
      <nav className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 mx-auto flex items-center justify-between h-20">
        {/* Logo — far left. Text wordmark "YADENNO" is the primary brand mark;
            the small svg mark from src/assets is used as an accent icon. */}
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setMobileOpen(false)}>
          <img src={logoMark} alt="Yadenno Plastics PLC" className="w-9 h-9" />
          <span className="font-mono text-xl sm:text-2xl font-extrabold tracking-tight text-white">
            YADENNO<span className="text-accent"></span>
          </span>
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
          <Link to="/contact" className="border-2 border-accent text-white px-5 py-2 rounded-md font-medium hover:bg-accent hover:text-white transition-colors">
            {t('nav_quote')}
          </Link>

          {/* Dark / light toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="relative w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors duration-300"
          >
            <span
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${theme === 'dark' ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
                }`}
            >
              {/* Sun icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Zm0 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm7 3a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM6 12a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm11.31-5.31a1 1 0 0 1 0 1.42l-.7.7a1 1 0 1 1-1.42-1.42l.7-.7a1 1 0 0 1 1.42 0ZM7.81 16.19a1 1 0 0 1 0 1.42l-.7.7a1 1 0 1 1-1.42-1.42l.7-.7a1 1 0 0 1 1.42 0ZM12 18a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm5.31 1.31a1 1 0 0 1-1.42 0l-.7-.7a1 1 0 1 1 1.42-1.42l.7.7a1 1 0 0 1 0 1.42ZM6.39 6.39a1 1 0 0 1-1.42 0l-.7-.7A1 1 0 1 1 5.7 4.27l.7.7a1 1 0 0 1 0 1.42Z" />
              </svg>
            </span>
            <span
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
                }`}
            >
              {/* Moon icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.354 15.354A9 9 0 0 1 8.646 3.646a9.003 9.003 0 1 0 11.708 11.708Z" />
              </svg>
            </span>
          </button>

          {/* Language switch */}
          <button
            type="button"
            onClick={() => changeLanguage(lang === 'en' ? 'am' : 'en')}
            className="flex items-center gap-1 p-1 rounded-full text-sm font-mono font-bold bg-white/10 hover:bg-white/20 transition-colors duration-300"
            aria-label="Toggle language"
          >
            <span className={`px-2.5 py-1 rounded-full transition-colors ${lang === 'en' ? 'bg-white text-primary shadow-sm' : 'text-white/60'}`}>EN</span>
            <span className={`px-2.5 py-1 rounded-full transition-colors ${lang === 'am' ? 'bg-white text-primary shadow-sm' : 'text-white/60'}`}>AM</span>
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
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white dark:bg-surface-dark border-t border-black/5 dark:border-white/10 ${mobileOpen ? 'max-h-[28rem]' : 'max-h-0'
          }`}
      >
        <div className="section-container py-4 flex flex-col gap-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMobileOpen(false)}
              className={navLinkClass}
            >
              {link.label}
            </NavLink>
          ))}

          <Link to="/contact" onClick={() => setMobileOpen(false)} className="border-2 border-accent text-primary dark:text-white px-5 py-2 rounded-md font-medium text-center w-full">
            {t('nav_quote')}
          </Link>

          <div className="flex items-center justify-between pt-2 border-t border-black/5 dark:border-white/10">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center gap-2 text-sm font-medium text-primary dark:text-gray-200"
            >
              {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
            </button>

            <div className="flex gap-2">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => changeLanguage(l.code)}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono font-semibold border transition-colors duration-200 ${lang === l.code
                    ? 'bg-accent text-white border-accent'
                    : 'border-primary/20 dark:border-white/20 text-primary dark:text-gray-200'
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
