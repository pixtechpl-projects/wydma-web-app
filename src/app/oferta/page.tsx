import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { LinkButton } from "@/components/link-button";
import {
  breadcrumbJsonLd,
  pageMetadata,
  publicationBenefits,
  services,
} from "@/lib/site";

export const metadata = pageMetadata({
  title: "Oferta agencji wydawniczej",
  description:
    "Oferta Wydmy w Gdańsku: publikacje drukowane, materiały reklamowe, skład do druku oraz biuletyny dla spółdzielni mieszkaniowych i zarządców nieruchomości.",
  path: "/oferta",
});

const crumbs = [
  { name: "Strona główna", path: "/" },
  { name: "Oferta", path: "/oferta" },
];

export default function OfferPage() {
  return (
    <article className="mx-auto w-full max-w-6xl px-5 py-12">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <header className="max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.16em] text-coral uppercase">
          Oferta
        </p>
        <h1 className="mt-3 text-5xl leading-tight font-semibold text-ink sm:text-6xl">
          Publikacje, które porządkują przekaz
        </h1>
        <p className="mt-5 text-lg leading-8 text-ink/80">
          Przygotowujemy gazety, biuletyny, foldery i materiały reklamowe.
          Możesz zlecić cały proces albo sam skład i przygotowanie do druku.
        </p>
      </header>

      <div className="mt-12 space-y-6">
        {services.map((service) => (
          <section
            key={service.id}
            id={service.id}
            aria-labelledby={`${service.id}-title`}
            className="scroll-mt-28 rounded-[2rem] border border-ink/10 bg-white p-7 md:p-10"
          >
            <p className="text-xs font-semibold tracking-[0.16em] uppercase opacity-70">
              {service.eyebrow}
            </p>
            <h2
              id={`${service.id}-title`}
              className="mt-3 text-4xl font-semibold"
            >
              {service.title}
            </h2>
            <div className="mt-5 max-w-3xl space-y-4 text-base leading-7 opacity-90">
              {service.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-14" aria-labelledby="korzysci">
        <h2 id="korzysci" className="text-4xl font-semibold text-ink">
          Co daje dobrze przygotowana publikacja?
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {publicationBenefits.map((benefit) => (
            <li
              key={benefit.title}
              className="rounded-[1.6rem] border border-ink/10 bg-white p-6"
            >
              <h3 className="text-2xl font-semibold text-ink">
                {benefit.title}
              </h3>
              <p className="mt-3 leading-7 text-ink/75">{benefit.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl rounded-[1.6rem] border border-ink/10 bg-white px-6 py-5 leading-7 text-ink/80">
          W zależności od charakteru projektu możliwe jest również zaangażowanie
          firm i instytucji współpracujących, które prezentują swoją ofertę na
          łamach biuletynu. Pozwala to pozyskać dodatkowe środki na wydanie
          publikacji i ograniczyć koszty po stronie zamawiającego.
        </p>
      </section>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <LinkButton href="/kontakt">Opowiedz o projekcie</LinkButton>
        <LinkButton href="/realizacje" variant="outline">
          Zobacz realizacje
        </LinkButton>
      </div>
    </article>
  );
}
