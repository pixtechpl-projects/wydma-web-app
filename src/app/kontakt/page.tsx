import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import {
  breadcrumbJsonLd,
  contactDetails,
  legalName,
  pageMetadata,
  siteUrl,
} from "@/lib/site";

export const metadata = pageMetadata({
  title: "Kontakt z agencją Wydma",
  description:
    "Skontaktuj się z agencją Wydma w Gdańsku. Napisz w sprawie gazety, biuletynu, folderu, materiałów reklamowych albo składu do druku.",
  path: "/kontakt",
});

const crumbs = [
  { name: "Strona główna", path: "/" },
  { name: "Kontakt", path: "/kontakt" },
];

export default function ContactPage() {
  const contactLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Kontakt z Wydmą",
    url: `${siteUrl}/kontakt`,
    about: { "@id": `${siteUrl}/#organization` },
  };

  return (
    <article className="mx-auto w-full max-w-6xl px-5 py-12">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={contactLd} />
      <Breadcrumbs items={crumbs} />
      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <header>
          <p className="text-xs font-semibold tracking-[0.16em] text-coral uppercase">
            Kontakt
          </p>
          <h1 className="mt-3 text-5xl leading-tight font-semibold text-ink sm:text-6xl">
            Porozmawiajmy o Twoim projekcie
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink/80">
            Masz pomysł na publikację, potrzebujesz materiałów reklamowych albo
            szukasz partnera do przygotowania biuletynu? Napisz do nas. Chętnie
            poznamy Twoje potrzeby i porozmawiamy o możliwościach współpracy.
          </p>
          <address className="mt-8 rounded-[1.8rem] border border-ink/10 bg-white p-6 not-italic">
            <p className="text-xs font-semibold tracking-[0.16em] text-ink/50 uppercase">
              Skontaktuj się z nami
            </p>
            <p className="mt-4 font-semibold text-ink">{legalName}</p>
            <p className="mt-2 leading-7 text-ink/80">
              {contactDetails.street}
              <br />
              {contactDetails.postalCode} {contactDetails.city}
            </p>
            {contactDetails.phone ? (
              <p className="mt-4">
                <a
                  className="font-semibold text-ink hover:underline"
                  href={`tel:${contactDetails.phone}`}
                >
                  {contactDetails.phone}
                </a>
              </p>
            ) : null}
            {contactDetails.email ? (
              <p className="mt-1">
                <a
                  className="font-semibold text-ink hover:underline"
                  href={`mailto:${contactDetails.email}`}
                >
                  {contactDetails.email}
                </a>
              </p>
            ) : null}
          </address>
        </header>
        <div>
          <h2 className="mb-4 text-3xl font-semibold text-ink">
            Napisz do nas
          </h2>
          <p className="mb-6 leading-7 text-ink/75">
            Opowiedz krótko, czego potrzebujesz. Wrócimy do Ciebie, aby omówić
            szczegóły.
          </p>
          <ContactForm />
        </div>
      </div>
    </article>
  );
}
