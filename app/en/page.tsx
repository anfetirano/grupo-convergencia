import Link from "next/link";
import { LanguageSwitcher } from "../components/language-switcher";

export default function HomeEn() {
  return (
    <main className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <header className="flex justify-end">
          <LanguageSwitcher current="en" />
        </header>

        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="max-w-xl w-full space-y-4 text-center">
            <h1 className="text-3xl font-semibold">Grupo Convergence S.A.</h1>
            <p className="text-muted-foreground">
              Internal operations workspace for sourcing, partners, and documents.
            </p>

            <div className="flex items-center justify-center gap-3">
              <Link className="underline" href="/dashboard">
                Go to dashboard
              </Link>
              <Link className="underline" href="/sign-in">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
