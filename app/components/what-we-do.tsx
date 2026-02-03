import Image from "next/image";
import { Container } from "./ui/container";

export default function WhatWeDo() {
  return (
    <section className="w-full bg-white text-[#020c14] py-20 md:py-28">
      <Container className="max-w-none px-6 md:px-12">
        <div className="max-w-5xl">
          <p className="text-base uppercase tracking-[0.32em] text-[#020c14]/70 mb-4">
            Qué hacemos
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Conectamos oferta y demanda en mercados estratégicos
          </h2>
          <p className="text-[#020c14]/80 text-base md:text-lg leading-relaxed mt-4">
            Facilitamos relaciones comerciales entre fabricantes, operadores
            logísticos y canales de distribución en el Caribe.
          </p>
        </div>
      </Container>

      <div className="mt-12 w-full px-6 md:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-96 w-full">
              <Image
                src="/suppliers.jpg"
                alt="Proveedores"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
            </div>

            <div className="group relative h-24 [perspective:1200px] border-t border-slate-200/60 bg-gradient-to-b from-white to-slate-50 shadow-[0_-6px_18px_rgba(0,0,0,0.06)]">
              <div className="absolute inset-0 transition duration-700 [transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)] [animation:flip_6s_infinite] md:[animation:none]">
                <div className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden]">
                  <h3 className="text-lg font-semibold">Proveedores</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center px-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-[#020c14]/80 text-sm leading-relaxed">
                    Fabricantes con capacidad de exportación y productos listos
                    para mercado internacional.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-96 w-full">
              <Image
                src="/logistics.jpg"
                alt="Logística"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
            </div>

            <div className="group relative h-24 [perspective:1200px] border-t border-slate-200/60 bg-gradient-to-b from-white to-slate-50 shadow-[0_-6px_18px_rgba(0,0,0,0.06)]">
              <div className="absolute inset-0 transition duration-700 [transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)] [animation:flip_6s_infinite] md:[animation:none]">
                <div className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden]">
                  <h3 className="text-lg font-semibold">Logística</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center px-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-[#020c14]/80 text-sm leading-relaxed">
                    Coordinación comercial, documental y logística internacional.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-96 w-full">
              <Image
                src="/distribution.jpg"
                alt="Distribución"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
            </div>

            <div className="group relative h-24 [perspective:1200px] border-t border-slate-200/60 bg-gradient-to-b from-white to-slate-50 shadow-[0_-6px_18px_rgba(0,0,0,0.06)]">
              <div className="absolute inset-0 transition duration-700 [transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)] [animation:flip_6s_infinite] md:[animation:none]">
                <div className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden]">
                  <h3 className="text-lg font-semibold">Distribución</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center px-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-[#020c14]/80 text-sm leading-relaxed">
                    Canales activos en mercados estratégicos del Caribe.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
