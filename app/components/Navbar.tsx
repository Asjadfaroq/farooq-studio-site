'use client'

import Link from 'next/link'
import { useLang } from '../context/LanguageContext'

export default function Navbar() {
  const { lang, toggle, tr, fonts } = useLang()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent px-7 py-6 flex items-center justify-between">

      {/* ── Left: AF monogram logo ── */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative w-9 h-9 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-white/25 group-hover:border-white/50 transition-colors duration-500" />
          <svg width="22" height="18" viewBox="0 0 22 18" fill="none" className="relative z-10" aria-hidden="true">
            <path
              d="M3 16L8 2L13 16M5.2 11h5.6"
              stroke="white" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round"
            />
            <path
              d="M16 2v14M16 2h5M16 8.5h3.5"
              stroke="rgba(250,204,21,0.9)" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-white tracking-[0.12em]"
            style={{ fontFamily: fonts.body, fontWeight: 600, letterSpacing: '0.08em', fontSize: '1.05rem' }}>
            Asjiad
          </span>
          <span className="text-white/45 tracking-[0.22em] mt-0.5"
            style={{ fontFamily: fonts.body, fontWeight: 400, fontSize: '0.7rem' }}>
            Farooq
          </span>
        </div>
      </Link>

      {/* ── Center: Studio name ── */}
      <span
        className="absolute left-1/2 -translate-x-1/2 text-white/60 tracking-[0.08em] hidden md:block"
        style={{ fontFamily: fonts.body, fontWeight: 400, fontSize: '1.05rem' }}
      >
        {tr.navbar.studio}
      </span>

      {/* ── Right: AR / EN toggle ── */}
      <div
        className="flex items-center gap-1 tracking-[0.15em] uppercase"
        style={{ fontFamily: 'var(--font-geist-sans)', fontSize: '0.85rem' }}
      >
        <button
          onClick={() => lang !== 'ar' && toggle()}
          className={`transition-colors duration-300 ${lang === 'ar' ? 'text-white' : 'text-white/30 hover:text-white/60'}`}
        >
          AR
        </button>
        <span className="text-white/20 mx-1">/</span>
        <button
          onClick={() => lang !== 'en' && toggle()}
          className={`transition-colors duration-300 ${lang === 'en' ? 'text-white' : 'text-white/30 hover:text-white/60'}`}
        >
          EN
        </button>
      </div>
    </nav>
  )
}
