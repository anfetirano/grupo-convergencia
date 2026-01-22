import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-xl w-full space-y-4 text-center">
        <h1 className="text-3xl font-semibold">Grupo Convergencia S.A.</h1>
        <p className="text-muted-foreground">
          Plataforma de trabajo interna para operaciones, proveedores y documentos.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link className="underline" href="/dashboard">
            Ir al dashboard
          </Link>
          <Link className="underline" href="/sign-in">
            Iniciar sesión
          </Link>
        </div>
      </div>
    </main>
  );
}
