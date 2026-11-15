import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Figtree } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HtmlLang } from "@/components/HtmlLang";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/data/site";
import { websiteSchema } from "@/lib/schema";
import "./globals.css";

const display = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Guide, Crafting & 2027 Update`,
    template: `%s | ${SITE.shortName} Minecraft`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e1410",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <HtmlLang />
        <JsonLd data={websiteSchema()} />
        <div className="shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
