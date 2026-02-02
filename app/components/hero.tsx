import LogoAnimated from "./logo-animated";
import Typewriter from "./typewriter";
import { Container } from "./ui/container";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#071b2e] to-[#020b14] flex items-center">
      <Container>
        <div className="flex flex-col items-center text-center text-white">

          {/* LOGO – contenedor fijo, NO afectado por el texto */}
          <div className="mb-10 flex justify-center">
            <LogoAnimated />
          </div>

          {/* TEXTO – ancho controlado para que el typewriter no empuje nada */}
          <div className="w-full max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
              <Typewriter />
            </h1>

            <p className="text-white/70 max-w-xl mx-auto mb-10">
              Plataforma comercial para operaciones, logística y distribución
              internacional en el Caribe.
            </p>

            <Button
              href="/contact"
              variant="outline"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              Contactar
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}
