import { useLanguage } from '../context/LanguageContext.jsx'

export default function About() {
  const { t } = useLanguage()

  const values = [t('about_value_1'), t('about_value_2'), t('about_value_3')]

  return (
    <div className="pt-20">
      {/* Page header with facility image */}
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/fabrica.jpg')" }}
        />
        <div className="absolute inset-0 bg-primary-dark/70" />
        <div className="relative section-container h-full flex items-center justify-center text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">{t('about_title')}</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-container py-16">
        <p className="max-w-3xl mx-auto text-center text-steel dark:text-gray-300 text-lg leading-relaxed">
          {t('about_intro')}
        </p>
      </section>

      {/* Mission + Facility */}
      <section className="section-container pb-16 grid gap-10 sm:grid-cols-2">
        <div className="p-6 rounded-sm bg-white dark:bg-white/5 border border-black/10 dark:border-white/10">
          <h2 className="text-xl font-semibold text-primary dark:text-white mb-3">{t('about_mission_title')}</h2>
          <p className="text-sm text-steel dark:text-gray-400 leading-relaxed">{t('about_mission_desc')}</p>
        </div>
        <div className="p-6 rounded-sm bg-white dark:bg-white/5 border border-black/10 dark:border-white/10">
          <h2 className="text-xl font-semibold text-primary dark:text-white mb-3">{t('about_facility_title')}</h2>
          <p className="text-sm text-steel dark:text-gray-400 leading-relaxed">{t('about_facility_desc')}</p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-primary dark:bg-surface-dark">
        <div className="section-container py-16">
          <h2 className="text-xl font-bold text-white text-center mb-10">{t('about_values_title')}</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {values.map((value, i) => (
              <div
                key={value}
                className="flex items-start gap-3 p-5 rounded-sm bg-white/5 border border-white/10"
              >
                <span className="text-accent font-mono font-bold text-lg">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-gray-200 text-sm leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
