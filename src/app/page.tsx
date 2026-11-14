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
      <section className="mx-auto grid w-full max-w-6xl items-start gap-12 px-5 pt-10 pb-14 lg:grid-cols-[1.05fr_0.95fr] lg:pb-20">
        <div>
          <p className="max-w-xl font-script text-3xl leading-tight text-ink italic sm:text-4xl">
            {motto}
          </p>
          <h1 className="mt-6 max-w-xl text-5xl leading-[1.02] font-semibold text-balance text-ink sm:text-6xl">
            Dobre treści. <span className="text-coral">Przemyślana forma.</span>{" "}
            Skuteczna komunikacja.
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
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-white">
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
          <div className="absolute -bottom-6 -left-2 hidden w-44 overflow-hidden rounded-3xl bg-white sm:block md:w-52">
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

      <section
        className="mx-auto w-full max-w-6xl px-5 py-8"
        aria-labelledby="o-wydmie"
      >
        <div className="grid gap-8 rounded-[2rem] border border-ink/10 bg-white/80 p-7 md:grid-cols-[0.8fr_1.2fr] md:p-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-ink/50 uppercase">
              Od 2012 roku
            </p>
            <h2
              id="o-wydmie"
              className="mt-3 text-4xl leading-tight font-semibold text-ink"
            >
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
              wydawnicze i kreatywne podejście do projektowania, dbając o to, by
              treść i forma tworzyły spójną całość.
            </p>
            <p>
              Wspieramy klientów od pierwszego pomysłu i opracowania treści po
              projekt graficzny i przygotowanie materiałów do druku. Stawiamy na
              indywidualne podejście, staranność i rozwiązania dopasowane do
              konkretnych potrzeb.
            </p>
          </div>
        </div>
      </section>

      <section
        className="mx-auto w-full max-w-6xl px-5 py-16"
        aria-labelledby="specjalizacja"
      >
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            {bulletinPhotos.map((photo) => (
              <figure
                key={photo.src}
                className="overflow-hidden rounded-[1.6rem] bg-white"
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
            <h2
              id="specjalizacja"
              className="mt-3 text-4xl leading-tight font-semibold text-ink"
            >
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
              variant="outline"
              className="mt-7"
            >
              Oferta dla spółdzielni i zarządców
            </LinkButton>
          </div>
        </div>
      </section>

      <section
        className="mx-auto w-full max-w-6xl px-5 py-6"
        aria-labelledby="oferta-skrot"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2
            id="oferta-skrot"
            className="max-w-lg text-4xl font-semibold text-ink"
          >
            Od gazety po wizytówkę
          </h2>
          <Link
            href="/oferta"
            className="font-semibold text-ink underline-offset-4 hover:underline"
          >
            Cała oferta
          </Link>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <li key={service.id}>
              <Link
                href={`/oferta#${service.id}`}
                className="block h-full rounded-[1.6rem] border border-ink/10 bg-white p-6 hover:bg-paper"
              >
                <p className="text-xs font-semibold tracking-[0.14em] text-coral uppercase">
                  {service.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink/75">
                  {service.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-label="Liczby"
        className="relative mt-36 bg-lagoon-soft text-ink"
      >
        <svg
          aria-hidden
          className="pointer-events-none absolute bottom-full left-0 h-28 w-full translate-y-0.5"
          viewBox="0 0 1440 240"
          preserveAspectRatio="none"
        >
          <path
            fill="#c5ebe2"
            d="M0 168C140 168 210 78 340 92C470 106 520 176 680 162C840 148 900 36 1060 58C1220 80 1280 156 1440 142L1440 240L0 240Z"
          />
          <path
            fill="#d7f1ea"
            d="M0 196C180 188 260 124 400 136C560 150 620 204 800 188C980 172 1060 96 1240 118C1340 130 1390 168 1440 158L1440 240L0 240Z"
          />
        </svg>
        <ul className="relative mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4">
          {stats.map((stat) => (
            <li key={stat.label}>
              <p className="font-heading text-5xl text-ink sm:text-6xl">
                {stat.value}
              </p>
              <p className="mt-2 max-w-40 text-sm leading-5 text-ink/75">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
