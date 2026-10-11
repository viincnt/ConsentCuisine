import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <Link href="/" className="brand-mark" aria-label="Consent Cuisine home"><span>cc</span><i>.</i></Link>
      <div className="not-found-copy"><p className="kicker">404 / course not found</p><h1>This plate<br />is empty.</h1><p>The page you asked for does not exist, has moved, or was never on the menu.</p><div className="hero-actions"><Link href="/" className="button button-primary">Go home <span>→</span></Link><Link href="/docs" className="button button-ghost">Read the docs</Link></div></div>
      <p className="not-found-code">status: not_found</p>
    </main>
  );
}
