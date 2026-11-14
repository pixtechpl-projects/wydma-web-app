import Image from "next/image";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { contactDetails, legalName, navItems } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-ink/10 bg-background text-ink">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link
            href="/"
            aria-label="Wydma, strona główna"
            className="inline-flex"
          >
            <Image
              src="/branding/wydma-logo.png"
              alt=""
              width={3713}
              height={939}
              className="h-11 w-auto"
            />
          </Link>
        </div>
        <nav aria-label="Stopka">
          <p className="text-xs font-semibold tracking-[0.16em] text-ink/50 uppercase">
            Na stronie
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <address className="text-sm leading-6 not-italic">
          <p className="text-xs font-semibold tracking-[0.16em] text-ink/50 uppercase">
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
                className="hover:underline"
              >
                {contactDetails.phone}
              </a>
            </p>
          ) : null}
          {contactDetails.email ? (
            <p>
              <a
                href={`mailto:${contactDetails.email}`}
                className="hover:underline"
              >
                {contactDetails.email}
              </a>
            </p>
          ) : null}
          <p className="mt-3 text-ink/60">
            NIP {contactDetails.nip}
            <br />
            REGON {contactDetails.regon}
          </p>
        </address>
      </div>
      <Separator className="bg-ink/10" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-5 text-center text-xs text-ink/60 sm:flex-row sm:justify-between">
        <p>
          Wszelkie prawa zastrzeżone &copy; {new Date().getFullYear()} Agencja
          Wydawniczo-Marketingowa „Wydma”
        </p>

        <a
          href="https://pixtech.pl"
          target="_blank"
          rel="noreferrer"
          className="mx-auto inline-flex items-center gap-2 text-ink/70 transition hover:text-ink sm:mx-0"
        >
          <span className="font-medium">created by</span>
          <Image
            src="/branding/pixtech.svg"
            alt="Pixtech"
            width={20}
            height={11}
            unoptimized
            className="h-auto w-5 invert"
          />
        </a>
      </div>
    </footer>
  );
}
