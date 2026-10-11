import type { ReactNode } from "react";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      nav={{
        title: <span className="docs-brand" aria-label="Consent Cuisine"><span>cc</span><i>.</i></span>,
        url: "/"
      }}
      githubUrl="https://github.com/viincnt/ConsentCuisine"
      links={[{ text: "Playground", url: "/playground" }, { text: "About", url: "/about" }, { text: "Privacy", url: "/privacy" }]}
      sidebar={{
        banner: <div className="px-3 py-2 text-xs text-fd-muted-foreground">A consent engine with a local accent.</div>,
        footer: <a className="block px-3 py-2 text-xs text-fd-muted-foreground hover:text-fd-foreground" href="https://www.npmjs.com/package/@consent-cuisine/core">View on npm ↗</a>
      }}
    >
      {children}
    </DocsLayout>
  );
}
