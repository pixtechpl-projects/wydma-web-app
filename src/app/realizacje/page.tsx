import Image from "next/image";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { LinkButton } from "@/components/link-button";
import { breadcrumbJsonLd, pageMetadata, projectGroups } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Realizacje: biuletyny, foldery i banery",
  description:
    "Realizacje agencji Wydma z Gdańska: biuletyny jubileuszowe spółdzielni, foldery, ulotki, banery i gadżety. Zobacz publikacje i materiały reklamowe.",
  path: "/realizacje",
});

const crumbs = [
  { name: "Strona główna", path: "/" },
  { name: "Realizacje", path: "/realizacje" },
];

export default function ProjectsPage() {
  return (
    <article className="mx-auto w-full max-w-6xl px-5 py-12">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <header className="max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.16em] text-lagoon-deep uppercase">
          Nasze realizacje
        </p>
        <h1 className="mt-3 text-5xl leading-tight font-semibold text-ink sm:text-6xl">
          Każdy projekt odpowiada na inną potrzebę
        </h1>
        <p className="mt-5 text-lg leading-8 text-ink/80">
          Tworzymy publikacje i materiały graficzne, które pomagają przekazywać
          informacje, prezentować działalność i docierać do odbiorców. Od gazet
          i biuletynów, przez foldery promocyjne, po materiały reklamowe.
          Dbamy o treść, formę i staranne przygotowanie każdego projektu.
        </p>
      </header>

      <div className="mt-14 space-y-16">
        {projectGroups.map((group) => (
          <section key={group.id} id={group.id} aria-labelledby={`${group.id}-title`} className="scroll-mt-28">
            <div className="max-w-2xl">
              <h2 id={`${group.id}-title`} className="text-4xl font-semibold text-ink">
                {group.title}
              </h2>
              <p className="mt-3 text-lg text-ink/75">{group.summary}</p>
            </div>
            <ul className="mt-6 grid max-w-3xl gap-6 md:grid-cols-2">
              {group.images.map((image) => (
                <li key={image.src}>
                  <figure className="overflow-hidden rounded-[1.8rem] border-2 border-ink bg-white shadow-[8px_8px_0_0_var(--sun)]">
                    <div
                      className={`relative ${
                        image.width > image.height ? "aspect-[16/9]" : "aspect-[3/4]"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 22rem"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="px-5 py-4 text-sm leading-6 text-ink/75">
                      {image.caption}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-14 rounded-[2rem] border-2 border-ink bg-sun p-8">
        <h2 className="text-3xl font-semibold text-ink">Masz podobny temat?</h2>
        <p className="mt-3 max-w-xl leading-7 text-ink/80">
          Gazeta, biuletyn, folder albo materiał na wydarzenie. Napisz, na
          jakim etapie jest projekt.
        </p>
        <LinkButton href="/kontakt" className="mt-6">
          Napisz o realizacji
        </LinkButton>
      </div>
    </article>
  );
}
