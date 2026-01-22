import Link from "next/link";

type Props = {
  current: "es" | "en";
};

export function LanguageSwitcher({ current }: Props) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Link
        href="/"
        className={`px-2 py-1 rounded-md border ${
          current === "es" ? "font-semibold" : "opacity-70 hover:opacity-100"
        }`}
        aria-label="Español"
      >
        🇪🇸 ES
      </Link>

      <Link
        href="/en"
        className={`px-2 py-1 rounded-md border ${
          current === "en" ? "font-semibold" : "opacity-70 hover:opacity-100"
        }`}
        aria-label="English"
      >
        🇺🇸 EN
      </Link>
    </div>
  );
}
