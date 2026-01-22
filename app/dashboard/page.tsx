import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

export default async function DashboardPage() {
  await auth.protect();

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-xl w-full space-y-6 text-center">
        <h1 className="text-3xl font-semibold">
          Dashboard · Grupo Convergencia
        </h1>

        <p className="text-muted-foreground">
          Área interna de trabajo. Más módulos serán añadidos progresivamente.
        </p>

        <div className="flex justify-center">
          <UserButton />
        </div>
      </div>
    </main>
  );
}
