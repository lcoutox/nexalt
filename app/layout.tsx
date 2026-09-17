import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Nexalt — Estratégia e desenvolvimento de tecnologia";
const description =
  "Software sob medida, integração de sistemas e evolução tecnológica. A Nexalt ajuda sua empresa a dar o próximo passo com tecnologia.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexalt.com.br"),
  title,
  description,
  applicationName: "Nexalt",
  keywords: [
    "software sob medida",
    "desenvolvimento de software",
    "integração de sistemas",
    "estratégia de tecnologia",
    "automação de processos",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "https://nexalt.com.br",
    siteName: "Nexalt",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1051,
        height: 237,
        alt: "Nexalt — Estratégia e desenvolvimento de tecnologia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#191918",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
