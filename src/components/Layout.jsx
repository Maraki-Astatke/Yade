import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

/**
 * Shared page shell: fixed Navbar on top, routed page content in the
 * middle, Footer at the bottom. Kept minimal so every page controls its
 * own spacing / sections.
 */
export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col bg-surface-light dark:bg-surface-dark transition-colors duration-300">
      <Navbar />
      <main className="relative z-10 flex-1">{children}</main>
      <Footer />
    </div>
  )
}
