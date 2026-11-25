import React from 'react'

export function Galeria() {
  return (
    <div>
      <section id="galeria" class="relative h-screen w-full snap-start overflow-hidden bg-[#FF0055] pt-20 pb-16 px-6 md:px-12 flex flex-col items-center justify-center border-t-4 border-black">
      
      <div class="max-w-6xl w-full relative z-10 flex flex-col gap-5">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="bg-[#FFE600] border-4 border-black px-4 py-2 shadow-[5px_5px_0px_0px_#000]">
            <h2 class="text-2xl sm:text-4xl font-black uppercase tracking-tight">03 · Zonas de Arte</h2>
          </div>
          <p class="bg-white border-2 border-black px-3 py-1 font-black text-xs uppercase shadow-[3px_3px_0px_0px_#000]">
            Experiencias Interactivas
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* <!-- Panel 1 --> */}
          <div class="bg-white border-4 border-black p-3 shadow-[8px_8px_0px_0px_#000] flex flex-col gap-3">
            <div class="relative border-2 border-black h-48 overflow-hidden bg-[#00E5FF]">
              <img src="https://images.unsplash.com/photo-1780766136511-dbacfcd8246a?auto=format&fit=crop&w=700&q=80" alt="Mercado de Vinilos" class="w-full h-full object-cover" />
              <span class="absolute top-2 left-2 bg-[#FFE600] border-2 border-black px-2 py-0.5 font-black text-xs uppercase">ZONA A</span>
            </div>
            <h3 class="font-black text-lg uppercase">Feria del Vinilo</h3>
            <p class="text-xs font-bold text-neutral-700">Más de 40 stands con ediciones limitadas, portadas clásicas y tornamesas.</p>
          </div>

          {/* <!-- Panel 2 --> */}
          <div class="bg-[#FFE600] border-4 border-black p-3 shadow-[8px_8px_0px_0px_#000] flex flex-col gap-3">
            <div class="relative border-2 border-black h-48 overflow-hidden bg-[#0047FF]">
              <img src="https://images.unsplash.com/photo-1789496820224-37b9f405fbe7?auto=format&fit=crop&w=700&q=80" alt="Escenario Pop" class="w-full h-full object-cover" />
              <span class="absolute top-2 left-2 bg-[#FF0055] text-white border-2 border-black px-2 py-0.5 font-black text-xs uppercase">ZONA B</span>
            </div>
            <h3 class="font-black text-lg uppercase">Murales en Vivo</h3>
            <p class="text-xs font-bold text-black">12 ilustradores Pop Art pintando lienzos gigantes frente al público.</p>
          </div>

          {/* <!-- Panel 3 --> */}
          <div class="bg-[#00E5FF] border-4 border-black p-3 shadow-[8px_8px_0px_0px_#000] flex flex-col gap-3">
            <div class="relative border-2 border-black h-48 overflow-hidden bg-white flex items-center justify-center">
              {/* <!-- Ilustración Pop Art de Cómic --> */}
              <svg class="w-32 h-32" viewBox="0 0 120 120" fill="none">
                <polygon points="60,5 74,36 108,22 90,52 116,70 84,82 96,112 64,96 48,116 38,88 8,98 24,68 4,50 36,38 24,10 52,26" fill="#FF0055" stroke="#000" stroke-width="5"/>
                <text x="60" y="66" text-anchor="middle" fill="#FFE600" font-weight="900" font-size="20" font-family="sans-serif">POW!</text>
              </svg>
              <span class="absolute top-2 left-2 bg-white border-2 border-black px-2 py-0.5 font-black text-xs uppercase">ZONA C</span>
            </div>
            <h3 class="font-black text-lg uppercase">Museo Cómic</h3>
            <p class="text-xs font-bold text-black">Cabinas de fotos estilo historieta y exhibición de serigrafía.</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Galeria
