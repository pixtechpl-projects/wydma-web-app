import Image from "next/image";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { contactDetails, legalName, navItems } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t-2 border-ink bg-ink text-paper">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image
            src="/branding/wydma-icon-nbg-white.png"
            alt="Wydma"
            width={811}
            height={307}
            className="h-12 w-auto"
          />
          <p className="mt-3 max-w-sm text-sm leading-6 text-paper/80">
            Agencja wydawniczo-marketingowa w Gdańsku. Dobre treści, przemyślana
            forma i skuteczna komunikacja od 2012 roku.
          </p>
        </div>
        <nav aria-label="Stopka">
          <p className="text-xs font-semibold tracking-[0.16em] text-sun uppercase">
            Na stronie
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-sun">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <address className="text-sm leading-6 not-italic">
          <p className="text-xs font-semibold tracking-[0.16em] text-sun uppercase">
            Kontakt
          </p>
          <p className="mt-4">{legalName}</p>
          <p>{contactDetails.street}</p>
          <p>
            {contactDetails.postalCode} {contactDetails.city}
          </p>
          {contactDetails.phone ? (
            <p className="mt-3">
              <a
                href={`tel:${contactDetails.phone}`}
                className="hover:text-sun"
              >
                {contactDetails.phone}
              </a>
            </p>
          ) : null}
          {contactDetails.email ? (
            <p>
              <a
                href={`mailto:${contactDetails.email}`}
                className="hover:text-sun"
              >
                {contactDetails.email}
              </a>
            </p>
          ) : null}
          <p className="mt-3 text-paper/70">
            NIP {contactDetails.nip}
            <br />
            REGON {contactDetails.regon}
          </p>
        </address>
      </div>
      <Separator className="bg-paper/15" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-paper/60 sm:flex-row sm:justify-between text-center">
        <p>
          Wszelkie prawa zastrzeżone &copy; {new Date().getFullYear()} Agencja
          Wydawniczo-Marketingowa „Wydma”
        </p>

        <a
          href="https://pixtech.pl"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-white/80 transition hover:text-white mx-auto sm:mx-0"
        >
          <span className="font-medium">created by</span>
          <Image
            src="/branding/pixtech.svg"
            alt="Pixtech"
            width={20}
            height={11}
            unoptimized
            className="h-auto w-5"
          />
        </a>
      </div>
    </footer>
  );
}
