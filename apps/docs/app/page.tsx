import Link from "next/link";
import { InstallCommand } from "@/components/install-command";

const locales = [
  { code: "en-GB", food: "Biscuits", label: "Analytics biscuits", accent: "#d7ff67" },
  { code: "fr-FR", food: "Croissants", label: "Croissants analytiques", accent: "#f4b57b" },
  { code: "pt-BR", food: "Brigadeiros", label: "Brigadeiros analíticos", accent: "#8edfed" }
];

const principles = [
  ["01", "Consent stays serious", "Every choice maps to a stable technical ID. Your privacy model never depends on display copy."],
  ["02", "Language gets a point of view", "Bring a locale module when a generic cookie banner is not how your product should sound."],
  ["03", "The UI is yours", "Use React, Vue, a server-rendered template, or no framework at all. The core only manages state."]
];

const code = `import { createConsentCuisine, createLocalStorage } from "@consent-cuisine/core";
import { ptBR } from "@consent-cuisine/cuisines/pt-BR";

const consent = createConsentCuisine({
  locale: "pt-BR",
  cuisine: true,
  locales: [ptBR],
  storage: createLocalStorage(),
  policyVersion: "2026-10"
});`;

function SiteNav() {
  return (
    <nav className="site-nav">
      <Link href="/" className="brand-mark" aria-label="Consent Cuisine home"><span>cc</span><i>.</i></Link>
      <div className="site-nav-links">
        <Link href="/playground">Playground</Link>
        <Link href="/about">About</Link>
        <Link href="/docs">Docs</Link>
      </div>
      <a className="nav-github" href="https://github.com/viincnt/ConsentCuisine" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
    </nav>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div><Link href="/" className="brand-mark"><span>cc</span><i>.</i></Link><p>Consent, with better taste.</p></div>
      <div className="footer-links"><Link href="/docs">Documentation</Link><Link href="/playground">Playground</Link><Link href="/privacy">Privacy</Link><a href="https://www.npmjs.com/package/@consent-cuisine/core" target="_blank" rel="noreferrer">npm</a><a href="https://github.com/viincnt/ConsentCuisine" target="_blank" rel="noreferrer">GitHub</a></div>
      <p className="footer-meta">MIT Licensed · Built for the web</p>
    </footer>
  );
}

export default function HomePage() {
  return (
    <main className="site-shell">
      <SiteNav />

      <section className="hero-grid">
        <div className="hero-copy">
          <p className="kicker">Consent infrastructure / made human</p>
          <div>
            <h1>Cookie consent is boring.<br /><em>I fixed the wrong problem.</em></h1>
            <p className="hero-summary">A headless, multilingual consent manager for products that care how privacy language feels.</p>
            <div className="hero-actions"><Link href="/docs/getting-started" className="button button-primary">Start building <span>→</span></Link><Link href="/playground" className="button button-ghost">Try the playground</Link></div>
          </div>
          <p className="hero-footnote">ONE CONSENT MODEL / MANY LOCAL VOICES</p>
        </div>

        <aside className="hero-console" aria-label="Locale preview">
          <p className="console-label">A single consent model / three expressions</p>
          <div className="console-code"><span>locale: visitor.locale</span><span>cuisine: true</span><span>storage: local</span></div>
          <div className="locale-list">
            {locales.map((locale) => <div className="locale-row" key={locale.code}><span>{locale.code}</span><strong style={{ color: locale.accent }}>{locale.food}</strong><small>{locale.label}</small></div>)}
          </div>
          <p className="console-status"><b /> Policy state ready</p>
        </aside>
      </section>

      <section className="manifesto-section">
        <p className="section-index">/ 01</p>
        <div><h2>Privacy is a promise.<br />It should not sound like a pop-up.</h2><p>Consent Cuisine gives product teams a reliable consent engine and a language layer with enough character to belong in the experience.</p></div>
      </section>

      <section className="principles-grid">
        {principles.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}
      </section>

      <section className="architecture-section">
        <div className="architecture-intro"><p className="section-index">/ 02</p><h2>State beneath.<br /><em>Flavor above.</em></h2><p>The data your app stores remains technical and dependable. The labels people read are independently replaceable.</p><Link href="/docs/api" className="text-link">Explore the API <span>→</span></Link></div>
        <div className="architecture-flow">
          <div><span>01</span><b>Your interface</b><small>Any framework, any visual language.</small></div>
          <div><span>02</span><b>Consent Cuisine core</b><small>Categories, state, versions, storage.</small></div>
          <div><span>03</span><b>Locale module</b><small>Copy, variants, and local character.</small></div>
          <div><span>04</span><b>Stable record</b><small>Technical IDs only. Always.</small></div>
        </div>
      </section>

      <section className="code-section">
        <div className="code-heading"><p className="section-index">/ 03</p><h2>Small API.<br />Long memory.</h2><p>Policy changes invalidate old choices. Required categories remain required. Storage is yours to choose.</p></div>
        <pre><code>{code}</code></pre>
      </section>

      <section className="install-section">
        <p className="section-index">/ 04</p>
        <div><h2>Give your banner<br />something worth saying.</h2><p>Install the state engine, add the locales you need, then make the experience your own.</p><InstallCommand /><div className="hero-actions"><Link href="/docs/getting-started" className="button button-primary">Read the docs <span>→</span></Link><a href="https://www.npmjs.com/package/@consent-cuisine/core" target="_blank" rel="noreferrer" className="button button-ghost">View on npm ↗</a></div></div>
      </section>

      <SiteFooter />
    </main>
  );
}
