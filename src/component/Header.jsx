import React from 'react'
import { Link } from 'react-router-dom'


export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black px-4 md:px-10 h-16 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 group">
        <div className="px-2.5 py-1 bg-[#FF0055] text-white border-2 border-black font-black text-base uppercase tracking-tight -rotate-3 shadow-[3px_3px_0px_0px_#000] group-hover:rotate-0 transition-transform">
          BOOM!
        </div>
        <span className="font-black text-lg uppercase tracking-tight hidden sm:inline">
          FEST <span className="text-[#0047FF]">26</span>
        </span>
      </Link>

      <nav className="hidden lg:flex items-center gap-2">
        <Link
          to="/"
          className="px-2.5 py-1 bg-[#FFE600] border-2 border-black font-black text-[11px] uppercase shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
        >
          01 Inicio
        </Link>
        <Link
          to="/lineup"
          className="px-2.5 py-1 bg-[#00E5FF] border-2 border-black font-black text-[11px] uppercase shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
        >
          02 Lineup
        </Link>
        <Link
          to="/galeria"
          className="px-2.5 py-1 bg-[#FF0055] text-white border-2 border-black font-black text-[11px] uppercase shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
        >
          03 Galería
        </Link>
        <Link
          to="/entradas"
          className="px-2.5 py-1 bg-white border-2 border-black font-black text-[11px] uppercase shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
        >
          04 Entradas
        </Link>
        <Link
          to="/mapa"
          className="px-2.5 py-1 bg-[#0047FF] text-white border-2 border-black font-black text-[11px] uppercase shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
        >
          05 Mapa
        </Link>
        <Link
          to="/club"
          className="px-2.5 py-1 bg-[#FFE600] border-2 border-black font-black text-[11px] uppercase shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
        >
          06 Club
        </Link>
      </nav>

      <Link
        to="/entradas"
        className="px-4 py-1.5 bg-[#0047FF] text-white border-2 border-black font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#000] hover:bg-[#FF0055] transition-colors"
      >
        Tickets!
      </Link>
    </header>
  );
}

export default Header;