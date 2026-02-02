import LogoAnimated from "./logo-animated";
import Typewriter from "./typewriter";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import VantaCdnBg from "./vanta-cdn-bg";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#071b2e] to-[#020b14] flex items-center overflow-hidden">
      <VantaCdnBg />

      <Container>
        <div className="relative z-10 flex flex-col items-center text-center text-white">
          <div className="mb-10 flex justify-center">
            <LogoAnimated />
          </div>

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
