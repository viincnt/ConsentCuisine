"use client";

import { useState } from "react";

const installers = {
  pnpm: "pnpm add @consent-cuisine/core @consent-cuisine/cuisines",
  npm: "npm install @consent-cuisine/core @consent-cuisine/cuisines",
  yarn: "yarn add @consent-cuisine/core @consent-cuisine/cuisines",
  bun: "bun add @consent-cuisine/core @consent-cuisine/cuisines"
} as const;

type Installer = keyof typeof installers;

export function InstallCommand() {
  const [installer, setInstaller] = useState<Installer>("pnpm");
  const [copied, setCopied] = useState(false);
  const command = installers[installer];

  async function copyCommand() {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="install-selector">
      <div className="install-tabs" role="tablist" aria-label="Package manager">
        {(Object.keys(installers) as Installer[]).map((name) => (
          <button
            key={name}
            type="button"
            role="tab"
            aria-selected={installer === name}
            className={installer === name ? "is-active" : ""}
            onClick={() => { setInstaller(name); setCopied(false); }}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="install-command">
        <code><span>$</span> {command}</code>
        <button type="button" className="copy-command" onClick={copyCommand} aria-label="Copy installation command">
          <i aria-hidden="true" />
          <b>{copied ? "Copied" : "Copy"}</b>
        </button>
      </div>
    </div>
  );
}
