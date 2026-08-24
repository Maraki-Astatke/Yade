import { Link } from 'react-router-dom'
import { products } from '../data/products.js'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Products() {
  const { t } = useLanguage()

  return (
    <div className="pt-20">
      {/* Page header */}
      <section className="bg-primary dark:bg-surface-dark border-b border-black/5 dark:border-white/10">
        <div className="section-container py-16 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">{t('products_title')}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">{t('products_subtitle')}</p>
        </div>
      </section>

      {/* Product grid */}
      <section className="section-container py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col p-6 rounded-sm border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 hover:border-accent transition-colors duration-300"
            >
              <div className="h-48 sm:h-56 -mx-2 -mt-2 mb-4 overflow-hidden flex items-center justify-center">
                <img src={product.image} alt={product.nameKey} className="h-full w-full object-contain" />
              </div>
              <h3 className="font-semibold text-lg text-primary dark:text-white mb-2">{product.nameKey}</h3>
              <p className="text-base text-steel dark:text-gray-400 leading-relaxed mb-4 flex-1">
                {product.description}
              </p>

              <dl className="text-sm font-sans space-y-1.5 border-t border-black/5 dark:border-white/10 pt-4">
                <div className="flex justify-between gap-2">
                  <dt className="text-steel dark:text-gray-500">{t('products_spec_pressure')}</dt>
                  <dd className="text-primary dark:text-gray-200 font-semibold">{product.pressure}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-steel dark:text-gray-500">{t('products_spec_diameter')}</dt>
                  <dd className="text-primary dark:text-gray-200 font-semibold">{product.diameter}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-steel dark:text-gray-500">{t('products_spec_use')}</dt>
                  <dd className="text-primary dark:text-gray-200 font-semibold text-right">{product.use}</dd>
                </div>
              </dl>

              <Link
                to="/contact"
                className="mt-5 text-sm font-semibold text-accent hover:text-accent-dark inline-flex items-center gap-1 transition-colors"
              >
                {t('products_learn_more')} →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
