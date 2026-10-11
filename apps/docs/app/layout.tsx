import type { Metadata } from "next";
import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";

export const metadata: Metadata = {
  title: {
    default: "Consent Cuisine",
    template: "%s | Consent Cuisine"
  },
  description: "A headless, multilingual consent manager with locally meaningful labels.",
  metadataBase: new URL("https://consent-cuisine.vercel.app"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Consent Cuisine",
    description: "A headless, multilingual consent manager with locally meaningful labels.",
    siteName: "Consent Cuisine",
    type: "website",
    url: "/",
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Consent Cuisine",
    description: "A headless, multilingual consent manager with locally meaningful labels.",
    images: ["/opengraph-image"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
