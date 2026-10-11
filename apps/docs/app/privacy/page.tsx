import Link from "next/link";

export const metadata = {
  title: "Privacy",
  description: "How the Consent Cuisine website handles data."
};

export default function PrivacyPage() {
  return (
    <main className="site-shell inner-page">
      <nav className="site-nav"><Link href="/" className="brand-mark" aria-label="Consent Cuisine home"><span>cc</span><i>.</i></Link><div className="site-nav-links"><Link href="/playground">Playground</Link><Link href="/about">About</Link><Link href="/docs">Docs</Link></div><a className="nav-github" href="https://github.com/viincnt/ConsentCuisine" target="_blank" rel="noreferrer">GitHub <span>↗</span></a></nav>
      <article className="legal-page">
        <p className="kicker">Privacy</p>
        <h1>A short privacy policy.</h1>
        <p className="legal-lede">This website is a documentation and product site. It is intentionally built without advertising, analytics, accounts, forms, or tracking cookies.</p>
        <div className="legal-sections">
          <section><h2>What this site collects</h2><p>Consent Cuisine does not intentionally collect personal information through this website. There are no contact forms, user accounts, behavioural analytics, advertising pixels, or marketing cookies in the application.</p></section>
          <section><h2>Hosting and technical logs</h2><p>The hosting provider may process standard technical information needed to deliver a page, such as an IP address, browser details, and request time. Those logs are controlled by the host, not used by Consent Cuisine to profile visitors, and may be retained according to the host&apos;s own policy.</p></section>
          <section><h2>External services</h2><p>Links to GitHub and npm take you to services with their own privacy policies. Consent Cuisine does not send visitor information to them until you choose to follow one of those links.</p></section>
          <section><h2>Changes and contact</h2><p>If this site ever adds a data-collecting feature, this page will be updated before that feature is used. Questions or corrections can be opened as an issue in the project repository.</p></section>
        </div>
        <p className="legal-updated">Last updated: October 2026</p>
      </article>
    </main>
  );
}
