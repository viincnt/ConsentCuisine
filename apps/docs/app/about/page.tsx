import Link from "next/link";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="site-shell inner-page">
      <nav className="site-nav"><Link href="/" className="brand-mark" aria-label="Consent Cuisine home"><span>cc</span><i>.</i></Link><div className="site-nav-links"><Link href="/playground">Playground</Link><Link href="/about">About</Link><Link href="/docs">Docs</Link></div><a className="nav-github" href="https://github.com/viincnt/ConsentCuisine" target="_blank" rel="noreferrer">GitHub <span>↗</span></a></nav>
      <section className="inner-hero"><p className="kicker">About the project</p><h1>Good privacy language<br />is product design.</h1><p>Consent Cuisine is an open-source experiment in making a necessary interaction feel considered, local, and still technically trustworthy.</p></section>
      <section className="about-grid"><div><p className="section-index">The premise</p><h2>The record should be boring.<br /><em>The experience should not.</em></h2></div><div className="about-copy"><p>Consent notices tend to arrive as a legal afterthought: generic labels, an imported tone, and no relationship to the product around them.</p><p>This project separates the compliance-sensitive part from the expressive part. The consent record stays stable. Locale modules are free to make the interface sound like it belongs.</p><p>Food is the first lens, not the limit. The architecture is designed for teams that want a clear technical foundation and a UI with an actual point of view.</p></div></section>
      <section className="about-links"><Link href="/docs/getting-started"><span>01</span><b>Read the getting started guide</b><i>→</i></Link><Link href="/playground"><span>02</span><b>Try a locale in the playground</b><i>→</i></Link><a href="https://github.com/viincnt/ConsentCuisine" target="_blank" rel="noreferrer"><span>03</span><b>Explore the source on GitHub</b><i>↗</i></a></section>
    </main>
  );
}
