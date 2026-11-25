import React from 'react'

export function Lineup() {
  return (
    <section
      id="lineup"
      className="relative h-screen w-full snap-start overflow-hidden bg-[#00E5FF] pt-20 pb-16 px-6 md:px-12 flex flex-col items-center justify-center border-t-4 border-black"
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="halftone-cyan" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="2.5" fill="#000" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#halftone-cyan)" />
      </svg>

      <div className="max-w-6xl w-full relative z-10 flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="bg-white border-4 border-black px-4 py-2 shadow-[5px_5px_0px_0px_#000]">
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
              02 · Lineup Principal
            </h2>
          </div>
          <span className="px-4 py-1.5 bg-[#FFE600] border-4 border-black font-black text-xs uppercase shadow-[4px_4px_0px_0px_#000] -rotate-2">
            3 Escenarios Simultáneos
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          <div className="bg-[#FFE600] border-4 border-black p-4 md:p-5 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between gap-2">
            <span className="self-start px-2 py-0.5 bg-black text-white font-black text-[10px] uppercase">
              Vie · 21:00
            </span>
            <h3 className="font-black text-lg md:text-2xl uppercase">The Pixels</h3>
            <p className="text-xs font-bold">
              Synth-pop y visuales retro en el escenario central.
            </p>
          </div>

          <div className="bg-[#FF0055] text-white border-4 border-black p-4 md:p-5 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between gap-2">
            <span className="self-start px-2 py-0.5 bg-[#FFE600] text-black border border-black font-black text-[10px] uppercase">
              Vie · 23:00
            </span>
            <h3 className="font-black text-lg md:text-2xl uppercase">Neon Wave</h3>
            <p className="text-xs font-bold">Electro-funk directo desde Madrid.</p>
          </div>

          <div className="bg-white border-4 border-black p-4 md:p-5 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between gap-2">
            <span className="self-start px-2 py-0.5 bg-[#0047FF] text-white font-black text-[10px] uppercase">
              Sáb · 20:30
            </span>
            <h3 className="font-black text-lg md:text-2xl uppercase">Luna Pop</h3>
            <p className="text-xs font-bold">Indie pop con estética cómic en vivo.</p>
          </div>

          <div className="bg-[#0047FF] text-white border-4 border-black p-4 md:p-5 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between gap-2">
            <span className="self-start px-2 py-0.5 bg-white text-black font-black text-[10px] uppercase">
              Sáb · 22:30
            </span>
            <h3 className="font-black text-lg md:text-2xl uppercase">DJ Halftone</h3>
            <p className="text-xs font-bold">Sesión 100% vinilos disco y house.</p>
          </div>

          <div className="bg-white border-4 border-black p-4 md:p-5 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between gap-2">
            <span className="self-start px-2 py-0.5 bg-[#FF0055] text-white font-black text-[10px] uppercase">
              Dom · 19:00
            </span>
            <h3 className="font-black text-lg md:text-2xl uppercase">Retro Kit</h3>
            <p className="text-xs font-bold">Guitarras garage y energía de los 60s.</p>
          </div>

          <div className="bg-[#FFE600] border-4 border-black p-4 md:p-5 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between gap-2">
            <span className="self-start px-2 py-0.5 bg-[#00E5FF] text-black border border-black font-black text-[10px] uppercase">
              Dom · 21:30
            </span>
            <h3 className="font-black text-lg md:text-2xl uppercase">Sonic Ink</h3>
            <p className="text-xs font-bold">
              Cierre explosivo con banda y muralistas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lineup;