import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Wydma - agencja wydawniczo-marketingowa",
    short_name: "Wydma",
    description:
      "Agencja wydawniczo-marketingowa w Gdańsku. Gazety, biuletyny, foldery i materiały reklamowe.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff7ee",
    theme_color: "#fff7ee",
    lang: "pl",
    icons: [
      {
        src: "/branding/wydma-icon.jpg",
        sizes: "1716x651",
        type: "image/jpeg",
      },
    ],
  };
}
