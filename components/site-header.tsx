import Link from "next/link";
import { ExternalArrow, HomeIcon, UserIcon } from "@/components/icons";
import { LINKEDIN, RESUME } from "@/lib/site-constants";

type ActivePage = "home" | "about" | "none";

export function SiteHeader({ activePage }: { activePage: ActivePage }) {
  const homeActive = activePage === "home";
  const aboutActive = activePage === "about";

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.04] bg-[#faf8f5]/75 px-5 py-5 backdrop-blur-md sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className={`flex size-10 items-center justify-center rounded-full text-foreground ring-1 transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] ${
              homeActive
                ? "bg-black/[0.06] ring-black/[0.06]"
                : "text-foreground/80 ring-transparent hover:bg-black/[0.04] hover:ring-black/[0.04]"
            }`}
            aria-label="Home"
            aria-current={homeActive ? "page" : undefined}
          >
            <HomeIcon />
          </Link>
          <Link
            href="/about"
            className={`flex size-10 items-center justify-center rounded-full ring-1 transition-colors hover:text-foreground ${
              aboutActive
                ? "bg-black/[0.06] text-foreground ring-black/[0.06]"
                : "text-foreground/80 ring-transparent hover:bg-black/[0.04] hover:ring-black/[0.04]"
            }`}
            aria-label="About"
            aria-current={aboutActive ? "page" : undefined}
          >
            <UserIcon />
          </Link>
        </div>
        <div className="flex items-center gap-5 text-sm font-medium tracking-tight text-foreground/85 sm:gap-7">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 transition-opacity hover:opacity-70"
          >
            in
            <ExternalArrow />
          </a>
          <a
            href={RESUME}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 transition-opacity hover:opacity-70"
          >
            Resume
            <ExternalArrow />
          </a>
        </div>
      </nav>
    </header>
  );
}
