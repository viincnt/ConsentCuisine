"use client";

import Link from "next/link";
import { useState } from "react";
import { enGB, frFR, ptBR } from "@consent-cuisine/cuisines";

const categoryIds = ["necessary", "preferences", "analytics", "marketing"] as const;
type CategoryId = (typeof categoryIds)[number];

const locales = {
  "en-GB": {
    module: enGB,
    banner: { heading: "Your privacy matters", description: "We use cookies to keep this site working, understand how it is used, and tailor relevant content.", preferences: "Privacy preferences", optional: "Optional category", essential: "Always active", save: "Save choices", accept: "Accept all", reject: "Reject optional", enabled: "Enabled", disabled: "Disabled" }
  },
  "fr-FR": {
    module: frFR,
    banner: { heading: "Votre vie privée compte", description: "Nous utilisons des cookies pour assurer le bon fonctionnement du site, comprendre son utilisation et proposer du contenu pertinent.", preferences: "Préférences de confidentialité", optional: "Catégorie facultative", essential: "Toujours actif", save: "Enregistrer mes choix", accept: "Tout accepter", reject: "Refuser les options", enabled: "Activé", disabled: "Désactivé" }
  },
  "pt-BR": {
    module: ptBR,
    banner: { heading: "Sua privacidade importa", description: "Usamos cookies para manter o site funcionando, entender como ele é usado e oferecer conteúdo relevante.", preferences: "Preferências de privacidade", optional: "Categoria opcional", essential: "Sempre ativo", save: "Salvar escolhas", accept: "Aceitar todos", reject: "Recusar opcionais", enabled: "Ativado", disabled: "Desativado" }
  }
} as const;

type Locale = keyof typeof locales;

export default function PlaygroundPage() {
  const [locale, setLocale] = useState<Locale>("pt-BR");
  const [cuisine, setCuisine] = useState(true);
  const [selection, setSelection] = useState<Record<CategoryId, boolean>>({ necessary: true, preferences: true, analytics: true, marketing: false });
  const [saved, setSaved] = useState(false);
  const activeLocale = locales[locale];
  const activeCopy = cuisine ? activeLocale.module.cuisines[activeLocale.module.defaultCuisine ?? ""]?.categories : activeLocale.module.cookies;

  function updateCategory(id: CategoryId, value: boolean) {
    if (id === "necessary") return;
    setSaved(false);
    setSelection((current) => ({ ...current, [id]: value }));
  }

  function saveSelection(next?: Partial<Record<CategoryId, boolean>>) {
    if (next) setSelection((current) => ({ ...current, ...next, necessary: true }));
    setSaved(true);
  }

  return (
    <main className="site-shell inner-page">
      <nav className="site-nav"><Link href="/" className="brand-mark" aria-label="Consent Cuisine home"><span>cc</span><i>.</i></Link><div className="site-nav-links"><Link href="/playground">Playground</Link><Link href="/about">About</Link><Link href="/docs">Docs</Link></div><a className="nav-github" href="https://github.com/viincnt/ConsentCuisine" target="_blank" rel="noreferrer">GitHub <span>↗</span></a></nav>
      <section className="playground-intro"><p className="kicker">Locale playground</p><h1>Same consent.<br /><em>Different appetite.</em></h1><p>Switch the locale and presentation mode. The banner changes as a whole; the stored category IDs stay the same.</p></section>
      <section className="playground-grid">
        <div className="playground-controls"><p className="section-index">Choose a locale</p><div className="locale-buttons">{(Object.keys(locales) as Locale[]).map((code) => <button type="button" className={locale === code ? "is-active" : ""} onClick={() => { setLocale(code); setSaved(false); }} key={code}>{code}</button>)}</div><label className="toggle-row"><input type="checkbox" checked={cuisine} onChange={(event) => { setCuisine(event.target.checked); setSaved(false); }} /><span aria-hidden="true" /><b>Cuisine mode</b></label><p className="control-note">Cuisine mode changes every category label and description. Turn it off for conventional cookie language.</p></div>
        <div className="consent-preview" lang={locale}>
          <div className="preview-top"><span>{activeLocale.banner.preferences}</span><i aria-hidden="true">×</i></div>
          <div className="preview-body"><p className="preview-eyebrow">{activeLocale.banner.optional}</p><h2>{activeLocale.banner.heading}</h2><p>{activeLocale.banner.description}</p><div className="preview-categories">{categoryIds.map((id) => {
            const category = activeCopy?.[id] ?? activeLocale.module.cookies[id];
            const required = id === "necessary";
            const enabled = selection[id];
            return <div className="preview-category" key={id}><div><b>{category.label}</b><small>{category.description}</small></div><label className="preview-switch"><input type="checkbox" checked={enabled} disabled={required} onChange={(event) => updateCategory(id, event.target.checked)} /><span aria-hidden="true" /><em>{required ? activeLocale.banner.essential : enabled ? activeLocale.banner.enabled : activeLocale.banner.disabled}</em></label></div>;
          })}</div></div>
          <div className="preview-actions"><button type="button" onClick={() => saveSelection()}>{saved ? activeLocale.banner.save + " ✓" : activeLocale.banner.save}</button><button type="button" onClick={() => saveSelection({ preferences: true, analytics: true, marketing: true })}>{activeLocale.banner.accept}</button><button type="button" onClick={() => saveSelection({ preferences: false, analytics: false, marketing: false })}>{activeLocale.banner.reject}</button></div>
        </div>
      </section>
      <section className="playground-note"><span>What changed?</span><p>The complete language layer. The consent record still uses <code>necessary</code>, <code>preferences</code>, <code>analytics</code>, and <code>marketing</code>.</p><Link href="/docs/cuisines">See cuisine modes <i>→</i></Link></section>
    </main>
  );
}
