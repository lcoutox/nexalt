import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

const title = "Nexalt | Automação com Inteligência Artificial para empresas";
const description =
  "A Nexalt cria automações sob medida com IA para atendimento, vendas, cobrança e rotinas internas. Escopo fechado, implementação em semanas. Diagnóstico gratuito pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexalt.com.br"),
  title,
  description,
  applicationName: "Nexalt",
  keywords: [
    "automação com IA",
    "inteligência artificial para empresas",
    "automação de atendimento",
    "automação WhatsApp",
    "automação de processos",
    "agência de automação",
  ],
  alternates: {
    canonical: "/",
  },
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
        alt: "Nexalt - automação com Inteligência Artificial",
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
  themeColor: "#0A0A0E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
