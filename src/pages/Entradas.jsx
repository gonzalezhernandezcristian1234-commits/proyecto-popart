import React from 'react'

import { Link } from "react-router-dom";

export function Entradas() {
  return (
    <section
      id="entradas"
      className="relative h-screen w-full snap-start overflow-hidden bg-white pt-20 pb-16 px-6 md:px-12 flex flex-col items-center justify-center border-t-4 border-black"
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="halftone-white" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="6" cy="6" r="3" fill="#0047FF" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#halftone-white)" />
      </svg>

      <div className="max-w-6xl w-full relative z-10 flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="bg-[#0047FF] text-white border-4 border-black px-4 py-2 shadow-[5px_5px_0px_0px_#000]">
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
              04 · Entradas
            </h2>
          </div>
          <span className="px-4 py-1.5 bg-[#FF0055] text-white border-4 border-black font-black text-xs uppercase shadow-[4px_4px_0px_0px_#000] rotate-2">
            Preventa Activa
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {/* Ticket 1 */}
          <div className="bg-[#00E5FF] border-4 border-black p-5 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between gap-4">
            <div>
              <span className="px-2.5 py-0.5 bg-white border-2 border-black font-black text-xs uppercase">
                Pase Día
              </span>
              <div className="mt-3 text-4xl font-black">$35</div>
              <ul className="mt-4 flex flex-col gap-2 text-xs font-bold">
                <li>★ Acceso general 1 día</li>
                <li>★ Todos los escenarios</li>
                <li>★ Feria del vinilo y murales</li>
              </ul>
            </div>
            <Link
              to="/club"
              className="w-full py-2.5 bg-white border-2 border-black font-black text-xs uppercase text-center shadow-[4px_4px_0px_0px_#000] hover:bg-[#FFE600] transition-colors"
            >
              Comprar Día
            </Link>
          </div>

          {/* Ticket 2 */}
          <div className="bg-[#FFE600] border-4 border-black p-5 shadow-[8px_8px_0px_0px_#000] flex flex-col justify-between gap-4 md:-translate-y-2 relative">
            <span className="absolute -top-4 -right-3 px-3 py-1 bg-[#FF0055] text-white border-2 border-black font-black text-xs uppercase rotate-6 shadow-[3px_3px_0px_0px_#000]">
              TOP!
            </span>
            <div>
              <span className="px-2.5 py-0.5 bg-black text-white font-black text-xs uppercase">
                Full VIP 3 Días
              </span>
              <div className="mt-3 text-4xl font-black">$85</div>
              <ul className="mt-4 flex flex-col gap-2 text-xs font-bold">
                <li>★ Acceso los 3 días sin filas</li>
                <li>★ Póster serigrafiado oficial</li>
                <li>★ Zona lounge y barra libre</li>
              </ul>
            </div>
            <Link
              to="/club"
              className="w-full py-2.5 bg-[#FF0055] text-white border-2 border-black font-black text-xs uppercase text-center shadow-[4px_4px_0px_0px_#000] hover:bg-black transition-colors"
            >
              Comprar VIP
            </Link>
          </div>

          {/* Ticket 3 */}
          <div className="bg-[#FF0055] text-white border-4 border-black p-5 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between gap-4">
            <div>
              <span className="px-2.5 py-0.5 bg-[#FFE600] text-black border-2 border-black font-black text-xs uppercase">
                Pack x4 Amigos
              </span>
              <div className="mt-3 text-4xl font-black">$120</div>
              <ul className="mt-4 flex flex-col gap-2 text-xs font-bold">
                <li>★ 4 pases generales de 1 día</li>
                <li>★ Totebag Pop Art de regalo</li>
                <li>★ Descuento en merch oficial</li>
              </ul>
            </div>
            <Link
              to="/club"
              className="w-full py-2.5 bg-white text-black border-2 border-black font-black text-xs uppercase text-center shadow-[4px_4px_0px_0px_#000] hover:bg-[#00E5FF] transition-colors"
            >
              Comprar Pack
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Entradas;