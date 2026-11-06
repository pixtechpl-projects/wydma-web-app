import { LinkButton } from "@/components/link-button";

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-start px-5 py-24">
      <p className="text-xs font-semibold tracking-[0.16em] text-coral uppercase">
        404
      </p>
      <h1 className="mt-3 text-5xl font-semibold text-ink">
        Tej strony nie ma w składzie
      </h1>
      <p className="mt-4 max-w-lg text-lg leading-8 text-ink/75">
        Adres nie prowadzi do żadnej podstrony Wydmy. Wróć na początek albo
        przejdź do oferty.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <LinkButton href="/">Strona główna</LinkButton>
        <LinkButton href="/oferta" variant="outline">
          Oferta
        </LinkButton>
      </div>
    </section>
  );
}
