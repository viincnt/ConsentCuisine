import Link from "next/link";

const principles = [
  ["01", "Same signal", "Every choice still maps to the same technical consent category."],
  ["02", "Different flavor", "Locale packs make the prompt sound like it belongs on the site."],
  ["03", "No forced theme", "Use a single food, a local mix, or ordinary cookies whenever you want."]
];

const localeSamples = [
  { locale: "en-GB", food: "Biscuits", category: "Analytics biscuits", tone: "#c6f661" },
  { locale: "fr-FR", food: "Croissants", category: "Croissants analytiques", tone: "#e4aa73" },
  { locale: "pt-BR", food: "Brigadeiros", category: "Brigadeiros analiticos", tone: "#8bd6e8" }
];

export default function HomePage() {
  return (
    <main className="min-h-[100dvh] overflow-hidden bg-[#0a0c0b] text-[#f2f4ed]">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between border-x border-[#29302a] px-5 sm:px-8">
        <Link href="/" className="font-mono text-sm font-bold tracking-[-0.04em]">CONSENT//CUISINE</Link>
        <div className="flex items-center gap-5 font-mono text-xs text-[#9ba39a]">
          <Link className="transition-colors hover:text-[#c6f661]" href="/docs">Docs</Link>
          <a className="rounded-sm bg-[#c6f661] px-3 py-2 font-semibold text-[#10150d] transition-transform active:scale-[0.98]" href="https://github.com">GitHub</a>
        </div>
      </nav>

      <section className="grid-surface lime-rule border-y border-[#29302a]">
        <div className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-7xl grid-cols-1 border-x border-[#29302a] lg:grid-cols-[1.3fr_0.7fr]">
          <div className="flex flex-col justify-between px-5 py-14 sm:px-8 sm:py-18 lg:py-20">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#c6f661]">Consent, but make it local</p>
            <div className="max-w-3xl py-12 lg:py-0">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.07em] sm:text-7xl lg:text-8xl">Cookie consent is boring. <span className="text-[#c6f661]">Make it local.</span></h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-[#b8c0b7] sm:text-lg">A multilingual API for cookie banners that speak the local language, food and all.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/docs" className="rounded-sm bg-[#c6f661] px-5 py-3 font-mono text-sm font-semibold text-[#10150d] transition-transform hover:-translate-y-0.5 active:translate-y-0">Read the API</Link>
                <Link href="/docs/getting-started" className="rounded-sm border border-[#3a4439] px-5 py-3 font-mono text-sm text-[#e5e8e1] transition-colors hover:border-[#c6f661]">Quick start</Link>
              </div>
            </div>
            <p className="font-mono text-xs text-[#758075]">ONE API / MANY APPETITES / ZERO SEMANTIC CHAOS</p>
          </div>

          <div className="border-t border-[#29302a] bg-[#0e110e]/90 p-5 sm:p-8 lg:border-l lg:border-t-0">
            <div className="flex h-full flex-col justify-between">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#9ba39a]">One consent model / three voices</p>
              <pre className="overflow-x-auto font-mono text-sm leading-7 text-[#dbe5d5]"><code>{`createConsentCuisine({
  locale: visitor.locale,
  cuisine: true,
  locales: [enGB, frFR, ptBR]
});`}</code></pre>
              <div className="border-t border-[#29302a] pt-5 font-mono text-xs">
                {localeSamples.map((sample) => (
                  <div key={sample.locale} className="grid grid-cols-[4.5rem_1fr] gap-3 border-b border-[#29302a] py-3 last:border-b-0">
                    <span className="text-[#9ba39a]">{sample.locale}</span>
                    <span className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1"><strong style={{ color: sample.tone }}>{sample.food}</strong><span className="text-right text-[#c5ccc3]">{sample.category}</span></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-x border-[#29302a] px-5 py-20 sm:px-8">
        <div className="grid gap-px bg-[#29302a] md:grid-cols-3">
          {principles.map(([number, title, description]) => (
            <article key={number} className="min-h-56 bg-[#0a0c0b] p-6 sm:p-8">
              <p className="font-mono text-xs text-[#c6f661]">{number}</p>
              <h2 className="mt-14 text-2xl font-semibold tracking-[-0.045em]">{title}</h2>
              <p className="mt-3 max-w-xs leading-7 text-[#9ba39a]">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
