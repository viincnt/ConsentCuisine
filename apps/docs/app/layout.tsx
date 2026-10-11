import type { Metadata } from "next";
import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";

export const metadata: Metadata = {
  title: {
    default: "Consent Cuisine",
    template: "%s | Consent Cuisine"
  },
  description: "A consent API with locally meaningful labels."
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
