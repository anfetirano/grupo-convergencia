import { Container } from "./ui/container";

export function Header() {
  return (
    <header className="absolute top-0 w-full z-50">
      <Container className="flex items-center justify-between py-6 text-white">
        <span className="font-semibold tracking-wide">
          Grupo Convergencia S.A.
        </span>
      </Container>
    </header>
  );
}
