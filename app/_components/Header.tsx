'use client'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { Toggle } from "./Toggle";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Header() {
  const { theme } = useTheme();
  return (
    <header className="h-16 grid content-center w-full">
      <nav className="flex justify-between content-center">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold"
          prefetch={false}
        >
          {theme === "dark" ? (
            <Image src="/logo-white.png" width={180} height={50} alt="Logo" />
          ) : (
            <Image src="/logo.png" width={180} height={50} alt="Logo" />
          )}
        </Link>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: ".5rem",
          }}
        >
          <Toggle />
          <ConnectButton
            accountStatus={{
              smallScreen: "avatar",
              largeScreen: "full",
            }}
            showBalance={{
              smallScreen: false,
              largeScreen: true,
            }}
          />
        </div>
      </nav>
    </header>
  );
}
