import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Phone, Mail } from 'lucide-react'

const CONTACT = {
  phone: '+224 660 08 05 07',
  phoneHref: 'tel:+224660080507',
  email: 'djomatech777@gmail.com',
  emailHref: 'mailto:djomatech777@gmail.com',
}

export default function SiteHeader({ navItems }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef(null)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen)
    return () => document.body.classList.remove('nav-open')
  }, [menuOpen])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [closeMenu])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) closeMenu()
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [closeMenu])

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    const setHeaderHeight = () => {
      document.documentElement.style.setProperty(
        '--header-height',
        `${header.offsetHeight}px`
      )
    }

    setHeaderHeight()
    window.addEventListener('resize', setHeaderHeight)
    return () => window.removeEventListener('resize', setHeaderHeight)
  }, [scrolled, menuOpen])

  return (
    <header
      ref={headerRef}
      className={[
        'header-sticky',
        scrolled ? 'header-sticky--scrolled' : '',
        menuOpen ? 'header-sticky--menu-open' : '',
      ].filter(Boolean).join(' ')}
    >
      <div className="topbar">
        <div className="topbar__info">
          <a href={CONTACT.phoneHref} className="topbar__link">
            <Phone size={14} aria-hidden="true" />
            <span>{CONTACT.phone}</span>
          </a>
          <a href={CONTACT.emailHref} className="topbar__link">
            <Mail size={14} aria-hidden="true" />
            <span>{CONTACT.email}</span>
          </a>
        </div>
      </div>

      <div className="navbar">
        <a href="#accueil" className="navbar__brand" onClick={closeMenu}>
          <img src="/logo.png" alt="DJOMA TECH Logo" className="logo-img" width="160" height="48" />
        </a>

        <nav className="navbar__menu navbar__menu--desktop" aria-label="Navigation principale">
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="navbar__cta navbar__cta--desktop" href="#contact">
          Demander un devis
        </a>

        <button
          type="button"
          className={`navbar__toggle${menuOpen ? ' navbar__toggle--active' : ''}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span className="navbar__toggle-inner" aria-hidden="true">
            <span className="navbar__toggle-bar" />
            <span className="navbar__toggle-bar" />
            <span className="navbar__toggle-bar" />
          </span>
        </button>
      </div>

      <div
        className={`navbar__overlay${menuOpen ? ' navbar__overlay--visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        id="mobile-nav"
        className={`navbar__drawer${menuOpen ? ' navbar__drawer--open' : ''}`}
        aria-label="Menu mobile"
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
      >
        <div className="navbar__drawer-inner">
          <nav className="navbar__drawer-nav" aria-label="Liens du menu">
            <p className="navbar__drawer-section-label">Menu</p>
            <ul className="navbar__drawer-list">
              {navItems.map((item, index) => (
                <li key={item.label} style={{ '--nav-item-delay': `${0.03 + index * 0.04}s` }}>
                  <a href={item.href} onClick={closeMenu}>
                    <span className="navbar__drawer-link-text">{item.label}</span>
                    <span className="navbar__drawer-link-arrow" aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a className="navbar__drawer-cta" href="#contact" onClick={closeMenu}>
            Demander un devis
          </a>
        </div>
      </div>
    </header>
  )
}
