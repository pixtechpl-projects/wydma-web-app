import type { Metadata } from "next";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://wydma.pl"
).replace(/\/$/, "");

export const siteName = "Wydma";

export const legalName = "Agencja Wydawniczo-Marketingowa „Wydma”";

export const tagline =
  "Dobre treści. Przemyślana forma. Skuteczna komunikacja.";

export const motto = "Wydmy uczą nas zmiany, pustynia - wytrwałości...";

export const contactDetails = {
  phone: "+48 530 283 846",
  email: "agencjawydma@gmail.com",
  street: "ul. Nieborowska 47 lok. 9",
  postalCode: "80-034",
  city: "Gdańsk",
  region: "pomorskie",
  country: "PL",
  nip: "7451023314",
  regon: "511377580",
};

export const navItems = [
  { href: "/", label: "Strona główna" },
  { href: "/realizacje", label: "Realizacje" },
  { href: "/oferta", label: "Oferta" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const stats = [
  { value: "14+", label: "lat doświadczenia" },
  { value: "100+", label: "zrealizowanych projektów" },
  { value: "5+", label: "współpracowników i partnerów" },
  { value: "50+", label: "klientów" },
] as const;

export const inquiryTopics = [
  { value: "publikacja", label: "Gazeta, biuletyn lub folder" },
  { value: "reklama", label: "Materiały reklamowe" },
  { value: "sklad", label: "Skład i przygotowanie do druku" },
  {
    value: "spoldzielnia",
    label: "Oferta dla spółdzielni lub zarządcy nieruchomości",
  },
  { value: "inne", label: "Inne" },
] as const;

export const services = [
  {
    id: "publikacje-drukowane",
    title: "Publikacje drukowane",
    eyebrow: "Gazety, biuletyny, foldery",
    summary: "Gazety, biuletyny, foldery i wydawnictwa okolicznościowe.",
    paragraphs: [
      "Tworzymy gazety, biuletyny, foldery i inne publikacje drukowane, które pomagają prezentować działalność, przekazywać informacje i budować relacje z odbiorcami.",
      "Zapewniamy kompleksową obsługę procesu wydawniczego: od opracowania koncepcji i przygotowania treści, przez redakcję i projekt graficzny, po przygotowanie publikacji do druku i organizację jej wydania.",
      "Realizujemy zarówno publikacje cykliczne, jak i wydawnictwa okolicznościowe. Formę i zawartość dopasowujemy do potrzeb klienta.",
    ],
    tone: "sun" as const,
  },
  {
    id: "materialy-reklamowe",
    title: "Materiały reklamowe",
    eyebrow: "Plakaty, ulotki, banery, wizytówki",
    summary: "Plakaty, ulotki, banery, roll-upy, standy i wizytówki.",
    paragraphs: [
      "Projektujemy materiały reklamowe i promocyjne, które pomagają wyróżnić firmę, zaprezentować ofertę i przekazać najważniejsze informacje.",
      "Przygotowujemy projekty plakatów, ulotek, banerów, roll-upów, standów, wizytówek oraz innych materiałów wykorzystywanych w promocji, podczas wydarzeń i w punktach obsługi klienta.",
      "Dbamy o czytelność przekazu, spójność wizualną i dopasowanie projektu do jego przeznaczenia. W zależności od potrzeb zajmujemy się również organizacją druku, współpracując ze sprawdzonymi drukarniami.",
    ],
    tone: "lagoon" as const,
  },
  {
    id: "sklad-i-przygotowanie-do-druku",
    title: "Skład i przygotowanie do druku",
    eyebrow: "Opracowanie gotowych treści",
    summary:
      "Opracowanie publikacji i materiałów graficznych na podstawie dostarczonych treści lub projektów.",
    paragraphs: [
      "Nie zawsze potrzebujesz kompleksowej realizacji. Czasem wystarczy profesjonalne opracowanie materiału, który jest już częściowo przygotowany.",
      "Zajmujemy się składem gazet, biuletynów, folderów, broszur i innych publikacji. Porządkujemy treści, opracowujemy układ stron, dbamy o czytelność tekstu i estetykę całości. Przygotowujemy również materiały zgodnie z wymaganiami technicznymi druku.",
      "Możesz powierzyć nam samo opracowanie graficzne i skład publikacji albo skorzystać z szerszego zakresu: od przygotowania treści po projekt i organizację druku. Zakres współpracy dopasowujemy do konkretnego projektu.",
    ],
    tone: "blush" as const,
  },
  {
    id: "dla-spoldzielni",
    title: "Dla spółdzielni i zarządców nieruchomości",
    eyebrow: "Biuletyny i wydawnictwa jubileuszowe",
    summary:
      "Biuletyny, foldery promocyjne, publikacje jubileuszowe i materiały informacyjne dla mieszkańców.",
    paragraphs: [
      "Wspieramy spółdzielnie mieszkaniowe i zarządców nieruchomości w przygotowywaniu publikacji, które pomagają informować mieszkańców, prezentować osiągnięcia i przedstawiać plany rozwoju.",
      "Opracowujemy biuletyny, foldery promocyjne i wydawnictwa jubileuszowe. Przygotowujemy treści, redagujemy materiały, opracowujemy szatę graficzną i organizujemy druk gotowej publikacji.",
      "To dobry sposób na podsumowanie działalności, zaprezentowanie zrealizowanych inwestycji, przedstawienie planów oraz pokazanie inicjatyw podejmowanych na rzecz mieszkańców.",
    ],
    tone: "ink" as const,
  },
] as const;

export const publicationBenefits = [
  {
    title: "Przejrzysta komunikacja",
    text: "Najważniejsze informacje przedstawione w uporządkowany sposób.",
  },
  {
    title: "Prezentacja osiągnięć i inwestycji",
    text: "Możliwość pokazania konkretnych działań i ich efektów.",
  },
  {
    title: "Spójny wizerunek",
    text: "Publikacja dopasowana do charakteru i identyfikacji wizualnej organizacji.",
  },
  {
    title: "Szeroki zasięg informacji",
    text: "Materiał, który można udostępnić mieszkańcom, członkom spółdzielni, kontrahentom i partnerom.",
  },
] as const;

export const projectGroups = [
  {
    id: "gazety-i-biuletyny",
    title: "Gazety i biuletyny",
    summary: "Publikacje cykliczne i informacyjne.",
    images: [
      {
        src: "/projects/biuletyny-jubileuszowe.png",
        width: 1086,
        height: 1448,
        alt: "Trzy biuletyny jubileuszowe na biurku: 50 lat Spółdzielni Mieszkaniowej Nowy Dwór Gdański, 55 lat Robotniczej Spółdzielni Mieszkaniowej im. Komuny Paryskiej i 60 lat Morskiej Spółdzielni Mieszkaniowej.",
        caption:
          "Wydawnictwa jubileuszowe spółdzielni mieszkaniowych, w tym biuletyny na 50, 55 i 60 lat.",
      },
      {
        src: "/projects/biuletyny-na-biurku.png",
        width: 1086,
        height: 1448,
        alt: "Biuletyny jubileuszowe spółdzielni ułożone na drewnianym biurku obok notesu, kawy i laptopa.",
        caption:
          "To samo wydanie w drugim kadrze: okładki łączą zdjęcia osiedli z czytelną informacją o jubileuszu.",
      },
    ],
  },
  {
    id: "foldery-i-wydawnictwa",
    title: "Foldery i wydawnictwa",
    summary: "Materiały promocyjne i jubileuszowe.",
    images: [
      {
        src: "/projects/katalog-rainbow.png",
        width: 1086,
        height: 1448,
        alt: "Katalog Rainbow The Power of Water i rozłożone karty produktowe z opisem akcesoriów.",
        caption:
          "Katalog i karty produktowe Rainbow, z okładką The Power of Water.",
      },
    ],
  },
  {
    id: "plakaty-i-ulotki",
    title: "Plakaty i ulotki",
    summary: "Materiały informacyjne i reklamowe.",
    images: [
      {
        src: "/projects/ulotka-i-folder.png",
        width: 1086,
        height: 1448,
        alt: "Stojąca ulotka bloga kulinarnego cook_by_ann ustawiona przed rozłożonym folderem Rainbow.",
        caption:
          "Ulotka cook_by_ann i rozłożony folder, przygotowane jako materiał do wręczenia.",
      },
    ],
  },
  {
    id: "banery-i-materialy-reklamowe",
    title: "Banery i materiały reklamowe",
    summary: "Projekty do wykorzystania w przestrzeni i podczas wydarzeń.",
    images: [
      {
        src: "/projects/baner-piekarnia-pellowski.png",
        width: 1672,
        height: 941,
        alt: "Baner nad witryną Piekarni Pellowski z napisem Rok Założenia 1922, w hali targowej.",
        caption: "Baner witryny Piekarni Pellowski, rok założenia 1922.",
      },
      {
        src: "/projects/brelok-lotnik.jpg",
        width: 960,
        height: 878,
        alt: "Metalowy brelok w kształcie domu z logo SZBD Lotnik, zapakowany w czarne pudełko.",
        caption: "Gadżet firmowy: brelok SZBD Lotnik.",
      },
    ],
  },
] as const;

const ogImage = {
  url: "/projects/biuletyny-jubileuszowe.png",
  width: 1086,
  height: 1448,
  alt: "Biuletyny jubileuszowe przygotowane przez agencję Wydma",
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      locale: "pl_PL",
      type: "website",
      siteName,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organization`,
    name: "Agencja Wydawniczo-Marketingowa Wydma",
    legalName,
    url: siteUrl,
    image: `${siteUrl}/projects/biuletyny-jubileuszowe.png`,
    logo: `${siteUrl}/branding/icon-bg-noround.png`,
    description:
      "Agencja wydawniczo-marketingowa z Gdańska. Od 2012 roku tworzy gazety, biuletyny, foldery i materiały reklamowe, od treści po przygotowanie do druku.",
    foundingDate: "2012",
    address: {
      "@type": "PostalAddress",
      streetAddress: contactDetails.street,
      postalCode: contactDetails.postalCode,
      addressLocality: contactDetails.city,
      addressRegion: contactDetails.region,
      addressCountry: contactDetails.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 54.3305,
      longitude: 18.6031,
    },
    areaServed: [
      { "@type": "City", name: "Gdańsk" },
      { "@type": "AdministrativeArea", name: "województwo pomorskie" },
    ],
    knowsAbout: [
      "publikacje drukowane",
      "biuletyny spółdzielni mieszkaniowych",
      "skład i przygotowanie do druku",
      "materiały reklamowe",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Oferta Wydmy",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.summary,
          url: `${siteUrl}/oferta#${service.id}`,
          areaServed: "Gdańsk",
          provider: { "@id": `${siteUrl}/#organization` },
        },
      })),
    },
    ...(contactDetails.email ? { email: contactDetails.email } : {}),
    ...(contactDetails.phone ? { telephone: contactDetails.phone } : {}),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path === "/" ? "/" : item.path}`,
    })),
  };
}
