import { createContext, useContext, useState } from 'react'
import { translations } from '../data/translations.js'

const LanguageContext = createContext(null)

/**
 * Provides the active language (English / Amharic) and a translate
 * helper `t(key)` to the whole app. Persists the choice in localStorage.
 */
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    return window.localStorage.getItem('yadenno-lang') || 'en'
  })

  const changeLanguage = (next) => {
    setLang(next)
    window.localStorage.setItem('yadenno-lang', next)
  }

  const t = (key) => {
    const dict = translations[lang] || translations.en
    return dict[key] ?? translations.en[key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
