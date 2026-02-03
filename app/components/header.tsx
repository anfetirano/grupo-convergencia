"use client";

import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import Image from "next/image";

export function Header() {
  const { isLoaded, isSignedIn } = useAuth();

  return (
    <header className="absolute top-0 w-full z-50">
      <Container className="flex items-center justify-center md:justify-between py-6 text-white max-w-none w-full px-6 md:px-10">
        <div className="flex items-center gap-3 w-full justify-center md:w-auto md:justify-start">
          {/* Si quieres el logo pequeño, descomenta esto */}
          {/*
          <Image
            src="/Logosinfondo.png"
            alt="Grupo Convergencia"
            width={28}
            height={28}
            priority
          />
          */}
          <span className="font-semibold tracking-wide text-lg md:text-sm lg:text-base">
            Grupo Convergencia S.A.
          </span>
        </div>

        {/* Botón solo en desktop */}
        <div className="hidden md:flex items-center gap-4 md:justify-end">
          {!isLoaded && (
            <a
              href="/sign-in"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-medium transition border border-white/40 text-white hover:bg-white hover:text-black"
            >
              Acceso
            </a>
          )}

          {isLoaded && !isSignedIn && (
            <SignInButton forceRedirectUrl="/dashboard" withSignUp={false}>
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-medium transition border border-white/40 text-white hover:bg-white hover:text-black">
                Acceso
              </button>
            </SignInButton>
          )}

          {isLoaded && isSignedIn && (
            <>
              <Button href="/dashboard" variant="outline">
                Dashboard
              </Button>
              <UserButton />
            </>
          )}
        </div>
      </Container>
    </header>
  );
}
