"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────

type HeadingFont = "Inter" | "DM Sans" | "Geist" | "Space Grotesk" | "Manrope" | "Plus Jakarta Sans";
type BodyFont = "Inter" | "DM Sans" | "Geist" | "Source Sans 3" | "Nunito Sans";
type AccentFont = "Instrument Serif" | "Playfair Display" | "Lora" | "Cormorant Garamond" | "None";
type PaletteName = "Midnight" | "Ocean" | "Forest" | "Sunset" | "Rose" | "Light Clean" | "Custom";
type ComponentStyle = "Glassmorphism" | "Brutalist" | "Minimal" | "Neobrutalist" | "Soft";
type AnimationStyle = "Framer Motion" | "CSS Only" | "Minimal" | "None";

interface ColorPalette {
  bg: string;
  text: string;
  primary: string;
  accent: string;
}

interface CursorRulesConfig {
  headingFont: HeadingFont;
  bodyFont: BodyFont;
  accentFont: AccentFont;
  palette: PaletteName;
  customColors: ColorPalette;
  componentStyle: ComponentStyle;
  animationStyle: AnimationStyle;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const HEADING_FONTS: HeadingFont[] = ["Inter", "DM Sans", "Geist", "Space Grotesk", "Manrope", "Plus Jakarta Sans"];
const BODY_FONTS: BodyFont[] = ["Inter", "DM Sans", "Geist", "Source Sans 3", "Nunito Sans"];
const ACCENT_FONTS: AccentFont[] = ["Instrument Serif", "Playfair Display", "Lora", "Cormorant Garamond", "None"];

const PALETTES: Record<Exclude<PaletteName, "Custom">, ColorPalette> = {
  Midnight: { bg: "#050510", text: "#f8fafc", primary: "#6366f1", accent: "#818cf8" },
  Ocean: { bg: "#0f172a", text: "#f1f5f9", primary: "#0ea5e9", accent: "#38bdf8" },
  Forest: { bg: "#022c22", text: "#ecfdf5", primary: "#10b981", accent: "#34d399" },
  Sunset: { bg: "#1c1917", text: "#fafaf9", primary: "#f97316", accent: "#fb923c" },
  Rose: { bg: "#1a0a14", text: "#fdf2f8", primary: "#ec4899", accent: "#f472b6" },
  "Light Clean": { bg: "#fafaf9", text: "#1c1917", primary: "#2563eb", accent: "#3b82f6" },
};

const COMPONENT_STYLES: { name: ComponentStyle; desc: string }[] = [
  { name: "Glassmorphism", desc: "Frosted glass, backdrop-blur, translucent borders" },
  { name: "Brutalist", desc: "Sharp corners, bold borders, raw aesthetic" },
  { name: "Minimal", desc: "Clean lines, subtle shadows, whitespace-focused" },
  { name: "Neobrutalist", desc: "Thick borders, offset shadows, playful" },
  { name: "Soft", desc: "Large radius, subtle gradients, gentle shadows" },
];

const ANIMATION_STYLES: { name: AnimationStyle; desc: string }[] = [
  { name: "Framer Motion", desc: "Full motion library with springs, gestures" },
  { name: "CSS Only", desc: "Keyframes + transitions, no dependencies" },
  { name: "Minimal", desc: "Subtle transitions only" },
  { name: "None", desc: "No animation rules" },
];

// ─── Generator ───────────────────────────────────────────────────────────────

function getColors(config: CursorRulesConfig): ColorPalette {
  if (config.palette === "Custom") return config.customColors;
  return PALETTES[config.palette];
}

function isDark(palette: ColorPalette): boolean {
  const hex = palette.bg.replace("#", "");
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 < 128;
}

function hexToRgb(hex: string): string {
  const h = hex.replace("#", "");
  return `${parseInt(h.slice(0, 2), 16)}, ${parseInt(h.slice(2, 4), 16)}, ${parseInt(h.slice(4, 6), 16)}`;
}

function fontImportUrl(heading: HeadingFont, body: BodyFont, accent: AccentFont): string {
  const families = new Set<string>();
  const encode = (f: string, weights: string, extras?: string) =>
    `family=${f.replace(/ /g, "+")}:${extras ? extras + "," : ""}wght@${weights}`;
  families.add(encode(heading, "400;500;600;700;900"));
  if (body !== heading) families.add(encode(body, "400;500;600;700"));
  if (accent !== "None") {
    families.add(encode(accent, "400;700", "ital@0..1"));
  }
  return `https://fonts.googleapis.com/css2?${[...families].join("&")}&display=swap`;
}

function generateComponentRules(style: ComponentStyle, colors: ColorPalette, dark: boolean): string {
  const p = colors.primary;
  const pRgb = hexToRgb(p);

  switch (style) {
    case "Glassmorphism":
      return `### Navigation
- Floating glassmorphism: bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl${dark ? "" : " (adjust to bg-black/5 border-black/5 for light)"}.
- Position: fixed top-0 w-full z-50, inner content max-w-6xl mx-auto.
- Apply \`backdrop-filter: blur(20px) saturate(1.4)\` with \`-webkit-\` prefix.
- Logo: font-bold text-lg tracking-[-0.02em].
- Nav links: text-sm font-medium, opacity 60% default → 100% on hover, transition-colors duration-200.
- CTA button in nav: rounded-full px-5 py-2 text-sm font-medium bg-[${p}].

### Buttons
- Primary: rounded-full, px-8 py-4 for hero CTAs, px-5 py-2 for nav/inline.
- Add a glow div behind primary buttons: absolute -inset-1 bg-[${p}] rounded-full blur-lg opacity-20, animate to opacity-60 on group-hover.
- Hover: scale(1.05) with transition duration 200ms ease [0.23, 1, 0.32, 1].
- Active/tap: scale(0.97).
- Shadow on primary: shadow-[0_0_30px_rgba(${pRgb},0.4)], increase to 0.6 on hover.

### Cards
- ${dark ? "bg-white/5 border border-white/10 rounded-2xl p-8" : "bg-white border border-black/5 rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"}.
- Hover: translateY(-4px) + border-[${colors.accent}]/30 + shadow-[0_0_30px_rgba(${hexToRgb(colors.accent)},0.15)].
- Transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1).`;

    case "Brutalist":
      return `### Navigation
- bg-${dark ? "black border-b-4 border-white" : "white border-b-4 border-black"}.
- Position: fixed top-0 w-full z-50.
- Logo: font-black text-xl uppercase tracking-[0.15em].
- Nav links: text-sm font-bold uppercase tracking-[0.1em], hover:underline underline-offset-4.
- CTA button in nav: border-2 ${dark ? "border-white text-white" : "border-black text-black"} px-5 py-2 uppercase tracking-widest text-xs font-bold hover:invert.

### Buttons
- Primary: border-2 ${dark ? "border-white text-white" : "border-black text-black"} px-8 py-4 uppercase tracking-[0.15em] font-bold.
- Hover: invert colors (hover:bg-${dark ? "white hover:text-black" : "black hover:text-white"}).
- No rounded corners. No shadows. Raw and direct.
- Active: scale(0.97).

### Cards
- bg-${dark ? "black border-2 border-white" : "white border-2 border-black"} p-6.
- No rounded corners.
- Hover: invert border color, no translateY.
- Title: font-black uppercase tracking-wide.`;

    case "Minimal":
      return `### Navigation
- ${dark ? "bg-[" + colors.bg + "]/80" : "bg-white/80"} backdrop-blur-sm border-b ${dark ? "border-white/10" : "border-gray-100"}.
- Position: fixed top-0 w-full z-50.
- Logo: font-semibold text-lg tracking-[-0.01em].
- Nav links: text-sm font-medium text-${dark ? "white/60 hover:text-white" : "[#1f2937]/60 hover:text-[#1f2937]"} transition-colors duration-200.
- CTA button in nav: rounded-lg px-5 py-2 text-sm font-medium bg-[${p}] text-white.

### Buttons
- Primary: rounded-lg px-8 py-4, bg-[${p}] text-white, shadow-sm hover:shadow-md.
- Hover: scale(1.02), transition duration 200ms.
- Active: scale(0.98).
- No glow effects. Clean and understated.

### Cards
- ${dark ? "bg-white/5 border border-white/10" : "bg-white border border-gray-100"} rounded-xl shadow-sm p-8.
- Hover: shadow-md, translateY(-2px).
- Transition: all 200ms ease.`;

    case "Neobrutalist":
      return `### Navigation
- bg-[${p}] border-b-4 border-black rounded-none.
- Position: fixed top-0 w-full z-50.
- Logo: font-black text-xl text-white.
- Nav links: text-sm font-bold text-white/80 hover:text-white.
- CTA button in nav: bg-white text-black border-2 border-black px-5 py-2 font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)].

### Buttons
- Primary: bg-[${p}] text-white border-2 border-black px-8 py-4 font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)].
- Hover: translate-x-[2px] translate-y-[2px] shadow-none. Transition: all 150ms.
- Active: translate-x-[3px] translate-y-[3px].
- Rounded-xl (not full).

### Cards
- bg-white border-3 border-black rounded-xl p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)].
- Hover: shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px].
- Title: font-black text-black.`;

    case "Soft":
      return `### Navigation
- ${dark ? "bg-white/10" : "bg-white/90"} backdrop-blur-md rounded-full shadow-sm mx-4 mt-4.
- Position: fixed top-0 w-full z-50.
- Logo: font-semibold text-lg.
- Nav links: text-sm font-medium, smooth color transitions.
- CTA button in nav: rounded-full px-5 py-2 text-sm font-medium bg-gradient-to-r from-[${p}] to-[${colors.accent}] text-white shadow-lg.

### Buttons
- Primary: rounded-full px-8 py-4, bg-gradient-to-r from-[${p}] to-[${colors.accent}] text-white, shadow-lg.
- Hover: shadow-xl, scale(1.03). Transition: all 200ms ease.
- Active: scale(0.97).
- Subtle gradient shift on hover.

### Cards
- ${dark ? "bg-white/5" : "bg-white"} rounded-3xl shadow-[0_2px_15px_rgba(0,0,0,0.04)] ${dark ? "border border-white/5" : "border border-gray-50"} p-8.
- Hover: shadow-[0_4px_25px_rgba(0,0,0,0.08)], translateY(-2px).
- Transition: all 300ms ease.`;
  }
}

function generateAnimationRules(style: AnimationStyle): string {
  switch (style) {
    case "Framer Motion":
      return `## Animations (Framer Motion)

### Entry animations
- Default entry: initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
- BlurIn (premium): initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.6 }}
- Stagger children: use staggerChildren: 0.08 in parent, each child gets delay: index * 0.08.
- Word splitting: wrap each word in motion.span, stagger by 0.08s per word.

### Hover interactions
- Cards: whileHover={{ y: -4, scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 30 }}
- Buttons: whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
- Links: underline animation with pseudo-element scaleX(0) → scaleX(1) from left.

### Scroll animations
- Use useInView with { once: true, margin: "-100px" }.
- Stats/counters: animate from 0 to value with requestAnimationFrame over 2000ms, easing cubic-bezier(0.16, 1, 0.3, 1).
- Sections: fade-in-up with 0.6s duration triggered by intersection.`;

    case "CSS Only":
      return `## Animations (CSS Only)

### Entry animations
- Use @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
- Apply: animation: fadeInUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
- Stagger with animation-delay on nth-child: nth-child(1) 0s, nth-child(2) 0.08s, etc.

### Hover interactions
- Cards: transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease; hover: transform: translateY(-4px).
- Buttons: transition: transform 0.2s ease; hover: transform: scale(1.05); active: transform: scale(0.97).

### Scroll animations
- Use IntersectionObserver to add .visible class when elements enter viewport.
- .animate-on-scroll { opacity: 0; transform: translateY(20px); transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1); }
- .animate-on-scroll.visible { opacity: 1; transform: translateY(0); }`;

    case "Minimal":
      return `## Animations (Minimal)

### Transitions only
- All interactive elements: transition-all duration-200 ease.
- Buttons: hover:scale-[1.02] active:scale-[0.98].
- Cards: hover:-translate-y-0.5.
- Links: transition-colors duration-200.
- No entry animations. No scroll animations. Keep it subtle.`;

    case "None":
      return `## Animations
- No animation rules. Focus on layout, typography, and color.
- Interactive elements should still have cursor:pointer and basic hover color changes.`;
  }
}

function generateCursorrules(config: CursorRulesConfig): string {
  const colors = getColors(config);
  const dark = isDark(colors);
  const pRgb = hexToRgb(colors.primary);
  const accentRgb = hexToRgb(colors.accent);
  const fontUrl = fontImportUrl(config.headingFont, config.bodyFont, config.accentFont);
  const accentFontNote = config.accentFont !== "None"
    ? ` and one serif or display font for accent text (${config.accentFont}).`
    : ".";

  return `# Design-First Cursor Rules
# Generated by Code Bonito — codebonito.com/cursorrules
# Drop this file in your project root. Cursor reads it automatically.

## Typography
- Use "${config.headingFont}" for headings and "${config.bodyFont}" for body text${accentFontNote}
- Import fonts explicitly: \`@import url('${fontUrl}')\`
- Headings: font-weight 700-900, tracking tight (tracking-[-0.02em] to tracking-[-0.04em]), leading snug (leading-[1.05] to leading-[1.2]).
- Body text: 16px base, font-weight 400, leading relaxed (leading-[1.6] to leading-[1.7]).
- Use specific sizes, never vague: text-[72px] not "text-7xl", text-[48px] not "text-5xl" — precision matters.
- For hero headlines, go big: minimum text-[56px] on desktop, text-[36px] on mobile.

## Colors
- Background: ${colors.bg}
- Text: ${colors.text}
- Primary (brand): ${colors.primary}
- Accent: ${colors.accent}
- Muted text: use opacity (${dark ? "text-white/50" : "text-black/40"}) rather than gray shades — it adapts to any background.
- Use exact hex values, never Tailwind defaults: \`bg-[${colors.bg}]\` not generic utility classes.
- Accent color appears sparingly: only on 1-2 CTAs, links, and icon highlights. Never as large backgrounds.

## Spacing & Layout
- Use an 8px grid: spacing values should be multiples of 8 (8, 16, 24, 32, 48, 64, 96).
- Hero sections: min-h-screen, content centered with flex flex-col items-center justify-center.
- Section padding: py-24 minimum, py-32 preferred on desktop.
- Max content width: max-w-6xl for full layouts, max-w-3xl for text-heavy sections.
- Cards in grids: always gap-6 or gap-8, never gap-4.

## Components

${generateComponentRules(config.componentStyle, colors, dark)}

### Badges/Pills
- ${dark ? "bg-white/10 border border-white/10" : "bg-black/5 border border-black/5"} rounded-full px-4 py-1.5 text-xs uppercase tracking-wide.

${generateAnimationRules(config.animationStyle)}

## Effects

### Gradient text
- background: linear-gradient(135deg, ${colors.primary}, ${colors.accent})
- -webkit-background-clip: text
- -webkit-text-fill-color: transparent
${config.componentStyle === "Glassmorphism" || config.componentStyle === "Soft" ? `
### Glassmorphism
- bg-white/5 (or bg-white/10) + backdrop-blur-xl + border border-white/10.
- Always include -webkit-backdrop-filter for Safari support.
- Saturate: backdrop-filter: blur(20px) saturate(1.4).
` : ""}
### Glow effects
- Button glow: div behind with blur-lg, opacity 0.2→0.6 on hover.
- Card border glow: box-shadow: 0 0 30px rgba(${accentRgb}, 0.15) on hover.
- Never use Tailwind's ring utilities for glow — they look flat.

## Anti-patterns (NEVER do these)
- Never use default Tailwind colors without overriding (bg-blue-500, text-gray-600 etc.)
- Never hardcode shadows as shadow-sm/md/lg — specify exact rgba values.
- Never use generic spacing (p-4, m-2) on hero sections — hero needs generous spacing (py-32, gap-8).
- Never skip the hover state — every interactive element needs a transition.
- Never use color names in classes (bg-red-500) — use hex values via arbitrary values (bg-[#ef4444]).
- Never animate with duration-300 alone — always specify an easing curve.
- Never use text-xl or text-2xl for hero headlines — go bigger (text-[48px]+).
`;
}

// ─── UI Components ───────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-[#1f2937]/40 mb-4">
      {children}
    </h3>
  );
}

function Select<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: readonly T[];
  onChange: (v: T) => void;
}) {
  return (
    <label className="block mb-4">
      <span className="text-sm font-medium text-[#1f2937]/70 mb-1 block">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/30 focus:border-[#2563eb] transition-all"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function PaletteOption({
  name,
  colors,
  selected,
  onSelect,
}: {
  name: string;
  colors: ColorPalette;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={`flex items-center gap-3 w-full rounded-xl border px-4 py-3 text-left transition-all duration-200 ${
        selected
          ? "border-[#2563eb] bg-[#2563eb]/5 ring-2 ring-[#2563eb]/20"
          : "border-black/10 bg-white hover:border-black/20"
      }`}
    >
      <div className="flex gap-1 shrink-0">
        {[colors.bg, colors.text, colors.primary, colors.accent].map((c, i) => (
          <div
            key={i}
            className="w-5 h-5 rounded-full border border-black/10"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
      <span className="text-sm font-medium text-[#1f2937]">{name}</span>
    </button>
  );
}

function ColorInput({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="flex items-center gap-2">
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-8 h-8 rounded-lg border border-black/10 cursor-pointer bg-transparent p-0"
      />
      <div>
        <span className="text-xs text-[#1f2937]/50 block">{label}</span>
        <span className="text-xs font-mono text-[#1f2937]/70">{value}</span>
      </div>
    </label>
  );
}

function StyleCard({
  name,
  desc,
  selected,
  onSelect,
}: {
  name: string;
  desc: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={`w-full text-left rounded-xl border px-4 py-3 transition-all duration-200 ${
        selected
          ? "border-[#2563eb] bg-[#2563eb]/5 ring-2 ring-[#2563eb]/20"
          : "border-black/10 bg-white hover:border-black/20"
      }`}
    >
      <span className="text-sm font-semibold text-[#1f2937] block">{name}</span>
      <span className="text-xs text-[#1f2937]/50">{desc}</span>
    </button>
  );
}

function RadioOption({
  name,
  desc,
  selected,
  onSelect,
}: {
  name: string;
  desc: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={`flex items-start gap-3 w-full text-left rounded-xl border px-4 py-3 transition-all duration-200 ${
        selected
          ? "border-[#2563eb] bg-[#2563eb]/5 ring-2 ring-[#2563eb]/20"
          : "border-black/10 bg-white hover:border-black/20"
      }`}
    >
      <div
        className={`mt-0.5 w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center ${
          selected ? "border-[#2563eb]" : "border-black/20"
        }`}
      >
        {selected && <div className="w-2 h-2 rounded-full bg-[#2563eb]" />}
      </div>
      <div>
        <span className="text-sm font-medium text-[#1f2937] block">{name}{name === "Framer Motion" ? " (recommended)" : ""}</span>
        <span className="text-xs text-[#1f2937]/50">{desc}</span>
      </div>
    </button>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 border border-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-all duration-200"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

function LineContent({ line }: { line: string }) {
  if (line.startsWith("###")) {
    return <span className="text-[#94e2d5] font-semibold">{line}</span>;
  }
  if (line.startsWith("##")) {
    return <span className="text-[#89b4fa] font-bold">{line}</span>;
  }
  if (line.startsWith("#")) {
    return <span className="text-[#cba6f7] font-bold">{line}</span>;
  }
  if (line.startsWith("- ")) {
    return (
      <span className="text-[#a6e3a1]">
        <span className="text-[#f9e2af]">- </span>
        {line.slice(2)}
      </span>
    );
  }
  return <span className="text-white/70">{line}</span>;
}

function CodePreview({ content }: { content: string }) {
  const lines = content.split("\n");

  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#1e1e2e] h-full flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-xs text-white/40 font-[family-name:var(--font-jetbrains-mono)]">
          .cursorrules
        </span>
        <CopyButton text={content} />
      </div>
      <div className="overflow-auto flex-1">
        <table className="w-full">
          <tbody>
            {lines.map((line, i) => (
              <tr key={i} className="hover:bg-white/5">
                <td className="px-4 py-0 text-right text-white/20 text-xs font-[family-name:var(--font-jetbrains-mono)] select-none w-12 align-top leading-[1.7]">
                  {i + 1}
                </td>
                <td className="px-4 py-0 text-sm font-[family-name:var(--font-jetbrains-mono)] leading-[1.7] whitespace-pre-wrap break-words">
                  <LineContent line={line} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export function CursorRulesClient() {
  const [config, setConfig] = useState<CursorRulesConfig>({
    headingFont: "Inter",
    bodyFont: "Inter",
    accentFont: "Instrument Serif",
    palette: "Midnight",
    customColors: { bg: "#050510", text: "#f8fafc", primary: "#6366f1", accent: "#818cf8" },
    componentStyle: "Glassmorphism",
    animationStyle: "Framer Motion",
  });

  const update = useCallback(<K extends keyof CursorRulesConfig>(key: K, val: CursorRulesConfig[K]) => {
    setConfig((prev) => ({ ...prev, [key]: val }));
  }, []);

  const updateCustomColor = useCallback((key: keyof ColorPalette, val: string) => {
    setConfig((prev) => ({
      ...prev,
      customColors: { ...prev.customColors, [key]: val },
    }));
  }, []);

  const generated = useMemo(() => generateCursorrules(config), [config]);

  const [showEmailGate, setShowEmailGate] = useState(false);
  const [gateEmail, setGateEmail] = useState("");
  const [gateLoading, setGateLoading] = useState(false);
  const [gateError, setGateError] = useState("");

  const triggerDownload = useCallback(() => {
    const blob = new Blob([generated], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = ".cursorrules";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [generated]);

  const handleDownload = useCallback(() => {
    setShowEmailGate(true);
  }, []);

  const handleEmailSubmit = useCallback(async () => {
    if (!gateEmail || !gateEmail.includes("@")) {
      setGateError("Enter a valid email");
      return;
    }
    setGateLoading(true);
    setGateError("");
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: gateEmail, source: "cursorrules" }),
      });
      setShowEmailGate(false);
      triggerDownload();
    } catch {
      setGateError("Something went wrong. Try again.");
    } finally {
      setGateLoading(false);
    }
  }, [gateEmail, triggerDownload]);

  return (
    <div className="bg-[#fafafa] text-[#1f2937] min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-inter)] font-black text-[36px] md:text-[56px] tracking-[-0.04em] leading-[1.05] mb-4">
            Build Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2563eb, #f59e0b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              .cursorrules
            </span>
          </h1>
          <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#1f2937]/60 max-w-xl mx-auto">
            Choose your design system. Get a .cursorrules file that makes Cursor
            generate beautiful code — every time.
          </p>
        </div>
      </section>

      {/* Configurator */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LEFT — Form */}
            <div className="space-y-8">
              {/* Typography */}
              <div className="bg-white rounded-2xl border border-black/5 p-6" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                <SectionLabel>1. Typography</SectionLabel>
                <Select label="Heading Font" value={config.headingFont} options={HEADING_FONTS} onChange={(v) => update("headingFont", v)} />
                <Select label="Body Font" value={config.bodyFont} options={BODY_FONTS} onChange={(v) => update("bodyFont", v)} />
                <Select label="Accent Font (italic/display)" value={config.accentFont} options={ACCENT_FONTS} onChange={(v) => update("accentFont", v)} />
              </div>

              {/* Colors */}
              <div className="bg-white rounded-2xl border border-black/5 p-6" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                <SectionLabel>2. Colors</SectionLabel>
                <div className="space-y-2 mb-2">
                  {(Object.keys(PALETTES) as Exclude<PaletteName, "Custom">[]).map((name) => (
                    <PaletteOption
                      key={name}
                      name={name}
                      colors={PALETTES[name]}
                      selected={config.palette === name}
                      onSelect={() => update("palette", name)}
                    />
                  ))}
                  {/* Custom */}
                  <button
                    onClick={() => update("palette", "Custom")}
                    className={`flex items-center gap-3 w-full rounded-xl border px-4 py-3 text-left transition-all duration-200 ${
                      config.palette === "Custom"
                        ? "border-[#2563eb] bg-[#2563eb]/5 ring-2 ring-[#2563eb]/20"
                        : "border-black/10 bg-white hover:border-black/20"
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full border-2 border-dashed border-black/20 flex items-center justify-center text-[10px] text-black/30">
                      +
                    </div>
                    <span className="text-sm font-medium text-[#1f2937]">Custom</span>
                  </button>
                </div>
                {config.palette === "Custom" && (
                  <div className="grid grid-cols-2 gap-4 mt-4 pl-2">
                    <ColorInput label="Background" value={config.customColors.bg} onChange={(v) => updateCustomColor("bg", v)} />
                    <ColorInput label="Text" value={config.customColors.text} onChange={(v) => updateCustomColor("text", v)} />
                    <ColorInput label="Primary" value={config.customColors.primary} onChange={(v) => updateCustomColor("primary", v)} />
                    <ColorInput label="Accent" value={config.customColors.accent} onChange={(v) => updateCustomColor("accent", v)} />
                  </div>
                )}
              </div>

              {/* Component Style */}
              <div className="bg-white rounded-2xl border border-black/5 p-6" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                <SectionLabel>3. Component Style</SectionLabel>
                <div className="space-y-2">
                  {COMPONENT_STYLES.map((s) => (
                    <StyleCard
                      key={s.name}
                      name={s.name}
                      desc={s.desc}
                      selected={config.componentStyle === s.name}
                      onSelect={() => update("componentStyle", s.name)}
                    />
                  ))}
                </div>
              </div>

              {/* Animations */}
              <div className="bg-white rounded-2xl border border-black/5 p-6" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                <SectionLabel>4. Animations</SectionLabel>
                <div className="space-y-2">
                  {ANIMATION_STYLES.map((s) => (
                    <RadioOption
                      key={s.name}
                      name={s.name}
                      desc={s.desc}
                      selected={config.animationStyle === s.name}
                      onSelect={() => update("animationStyle", s.name)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — Live Preview */}
            <div className="lg:sticky lg:top-8 lg:self-start lg:max-h-[calc(100vh-4rem)]">
              <CodePreview content={generated} />
            </div>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <button
            onClick={handleDownload}
            className="group relative inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-white bg-[#2563eb] transition-all duration-200 hover:scale-105 active:scale-[0.97] mb-4"
            style={{ boxShadow: "0 0 30px rgba(37, 99, 235, 0.4)" }}
          >
            <span className="absolute -inset-1 bg-[#2563eb] rounded-full blur-lg opacity-20 group-hover:opacity-60 transition-opacity duration-200" />
            <span className="relative flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download .cursorrules
            </span>
          </button>
          <div>
            <Link
              href="/browse"
              className="inline-flex items-center gap-1 text-sm font-medium text-[#1f2937]/60 hover:text-[#2563eb] transition-colors duration-200"
            >
              Browse 100+ Design Templates →
            </Link>
          </div>
          <p className="text-xs text-[#1f2937]/40 mt-4">
            Works with Cursor IDE. Drop the file in your project root.
          </p>
        </div>
      </section>

      {/* Email Gate Modal */}
      {showEmailGate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowEmailGate(false)}
              className="absolute top-4 right-4 text-[#1f2937]/40 hover:text-[#1f2937] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="font-bold text-xl text-[#1f2937] mb-2">Almost there!</h3>
            <p className="text-sm text-[#1f2937]/60 mb-6">
              Enter your email to download your custom .cursorrules file. We&apos;ll also send you design tips and new template drops.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                value={gateEmail}
                onChange={(e) => setGateEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleEmailSubmit()}
                placeholder="you@example.com"
                className="flex-1 px-4 py-3 rounded-xl border border-[#1f2937]/10 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb]/30 focus:border-[#2563eb] bg-[#fafafa]"
                autoFocus
              />
              <button
                onClick={handleEmailSubmit}
                disabled={gateLoading}
                className="px-6 py-3 bg-[#2563eb] text-white rounded-xl text-sm font-medium hover:bg-[#1d4ed8] transition-colors disabled:opacity-50"
              >
                {gateLoading ? "..." : "Download"}
              </button>
            </div>
            {gateError && (
              <p className="text-xs text-red-500 mt-2">{gateError}</p>
            )}
            <p className="text-xs text-[#1f2937]/30 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
