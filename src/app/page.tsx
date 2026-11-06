import Image from "next/image";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { LinkButton } from "@/components/link-button";
import {
  motto,
  projectGroups,
  services,
  siteUrl,
  stats,
  tagline,
} from "@/lib/site";

const bulletinPhotos = projectGroups[0].images;
const accentPhoto = projectGroups[1].images[0];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Wydma",
    url: siteUrl,
    inLanguage: "pl-PL",
    description: tagline,
    publisher: { "@id": `${siteUrl}/#organization` },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <p className="inline-flex rounded-full border-2 border-ink bg-sun px-4 py-1 text-sm font-semibold text-ink">
            {motto}
          </p>
          <h1 className="mt-6 max-w-xl text-5xl leading-[1.02] font-semibold text-balance text-ink sm:text-6xl">
            Dobre treści.{" "}
            <span className="text-coral">Przemyślana forma.</span> Skuteczna
            komunikacja.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink/80">
            Dobra komunikacja zaczyna się od dobrego przekazu. Ta idea
            przyświeca nam w pracy nad każdym projektem. Jesteśmy agencją
            wydawniczo-marketingową z Gdańska.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/oferta">Poznaj ofertę</LinkButton>
            <LinkButton href="/realizacje" variant="outline">
              Zobacz realizacje
            </LinkButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border-2 border-ink bg-white shadow-[12px_12px_0_0_var(--coral)]">
            <Image
              src={bulletinPhotos[0].src}
              alt={bulletinPhotos[0].alt}
              fill
              preload
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-2 hidden w-44 overflow-hidden rounded-3xl border-2 border-ink bg-white shadow-[8px_8px_0_0_var(--sun)] sm:block md:w-52">
            <div className="relative aspect-[3/4]">
              <Image
                src={accentPhoto.src}
                alt={accentPhoto.alt}
                fill
                preload
                loading="eager"
                sizes="220px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-8" aria-labelledby="o-wydmie">
        <div className="grid gap-8 rounded-[2rem] border-2 border-ink bg-white/80 p-7 shadow-[8px_8px_0_0_var(--lagoon)] md:grid-cols-[0.8fr_1.2fr] md:p-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-lagoon-deep uppercase">
              Od 2012 roku
            </p>
            <h2 id="o-wydmie" className="mt-3 text-4xl leading-tight font-semibold text-ink">
              Agencja, która łączy prasę z marketingiem
            </h2>
          </div>
          <div className="space-y-4 text-base leading-7 text-ink/80">
            <p>
              Agencja Wydawniczo-Marketingowa „Wydma” powstała w 2012 roku,
              łącząc wykształcenie marketingowe z doświadczeniem zdobytym w
              branży prasowej. Od tego czasu pomagamy spółdzielniom
              mieszkaniowym, zarządcom nieruchomości, firmom i instytucjom
              skutecznie docierać do odbiorców.
            </p>
            <p>
              Tworzymy prasę drukowaną oraz projekty graficzne i materiały
              reklamowe: od gazet i biuletynów po plakaty, ulotki, banery i
              wizytówki. Łączymy dziennikarską rzetelność, doświadczenie
              wydawnicze i kreatywne podejście do projektowania, dbając o to,
              by treść i forma tworzyły spójną całość.
            </p>
            <p>
              Wspieramy klientów od pierwszego pomysłu i opracowania treści po
              projekt graficzny i przygotowanie materiałów do druku. Stawiamy
              na indywidualne podejście, staranność i rozwiązania dopasowane do
              konkretnych potrzeb.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16" aria-labelledby="specjalizacja">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            {bulletinPhotos.map((photo) => (
              <figure
                key={photo.src}
                className="overflow-hidden rounded-[1.6rem] border-2 border-ink bg-white shadow-[6px_6px_0_0_var(--sun)]"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 1024px) 45vw, 24vw"
                    className="object-cover"
                  />
                </div>
              </figure>
            ))}
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-coral uppercase">
              Nasza specjalizacja
            </p>
            <h2 id="specjalizacja" className="mt-3 text-4xl leading-tight font-semibold text-ink">
              Publikacje dla spółdzielni mieszkaniowych i zarządców
              nieruchomości
            </h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-ink/80">
              <p>
                Pomagamy spółdzielniom mieszkaniowym i zarządcom nieruchomości
                prezentować swoją działalność, informować mieszkańców i budować
                dobry wizerunek. Przygotowujemy biuletyny, foldery promocyjne
                oraz wydawnictwa jubileuszowe, w których można przedstawić
                zrealizowane inwestycje, osiągnięcia, plany i inicjatywy.
              </p>
              <p>
                Zapewniamy wsparcie na kolejnych etapach realizacji: od
                opracowania treści i projektu graficznego po organizację druku.
                Dbamy o to, by każda publikacja była dopasowana do charakteru
                organizacji i potrzeb jej odbiorców.
              </p>
            </div>
            <LinkButton
              href="/oferta#dla-spoldzielni"
              variant="lagoon"
              className="mt-7"
            >
              Oferta dla spółdzielni i zarządców
            </LinkButton>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-6" aria-labelledby="oferta-skrot">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="oferta-skrot" className="max-w-lg text-4xl font-semibold text-ink">
            Od gazety po wizytówkę
          </h2>
          <Link href="/oferta" className="font-semibold text-lagoon-deep underline-offset-4 hover:underline">
            Cała oferta
          </Link>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <li key={service.id}>
              <Link
                href={`/oferta#${service.id}`}
                className="block h-full rounded-[1.6rem] border-2 border-ink bg-white p-6 transition-transform hover:-translate-y-0.5 hover:bg-sand"
              >
                <p className="text-xs font-semibold tracking-[0.14em] text-coral uppercase">
                  {service.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/75">{service.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Liczby" className="mt-16 border-y-2 border-ink bg-lagoon-deep text-white">
        <ul className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4">
          {stats.map((stat) => (
            <li key={stat.label}>
              <p className="font-heading text-5xl text-sun sm:text-6xl">{stat.value}</p>
              <p className="mt-2 max-w-40 text-sm leading-5 text-white/90">{stat.label}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
