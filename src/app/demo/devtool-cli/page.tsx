"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ─── Data ───────────────────────────────────────────────────────── */
const BRAND = "Forge CLI";
const PRIMARY = "#10B981";
const ACCENT = "#06B6D4";

const TERMINAL_STEPS = [
  { prompt: "$ ", command: "npm install -g forge-cli", output: ["added 1 package in 2.1s"], delay: 60 },
  { prompt: "$ ", command: "forge init my-project", output: ["✔ Template selected: typescript-api", "✔ Dependencies installed", "✔ Git initialized", "→ Project ready at ./my-project"], delay: 45 },
  { prompt: "$ ", command: "forge deploy --prod", output: ["▸ Building...", "▸ Optimizing assets...", "✔ Deployed to https://my-project.forge.sh", "🚀 Live in 4.2s"], delay: 50 },
];

const FEATURES = [
  {
    title: "Zero-Config Builds",
    desc: "Automatic framework detection. No webpack configs, no esbuild setups. Just code and ship.",
    code: `# forge.config.ts\nexport default {\n  framework: "auto",\n  optimize: true,\n  target: "edge"\n}`,
  },
  {
    title: "Live Preview",
    desc: "Instant preview URLs for every branch and PR. Share with your team before merging.",
    code: `$ forge preview\n\n✔ Building preview...\n✔ Preview ready:\nhttps://pr-42.preview.forge.sh`,
  },
  {
    title: "Secret Management",
    desc: "Encrypted environment variables with role-based access. No more .env files in Slack.",
    code: `$ forge secrets set API_KEY=sk_...\n$ forge secrets set DB_URL=postgres://\n\n✔ 2 secrets encrypted\n✔ Synced to production`,
  },
];

const BEFORE_STEPS = [
  "$ docker build -t myapp .",
  "$ docker tag myapp registry/myapp:v1.2",
  "$ docker push registry/myapp:v1.2",
  "$ kubectl apply -f deployment.yaml",
  "$ kubectl rollout status deploy/myapp",
];

const AFTER_COMMAND = "$ forge deploy --prod";
const AFTER_OUTPUT = [
  "▸ Building container...",
  "▸ Pushing to edge network...",
  "▸ Rolling out to 12 regions...",
  "✔ Deployed in 4.2s",
  "→ https://myapp.forge.sh",
];

const INTEGRATIONS = [
  { name: "GitHub", path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" },
  { name: "Docker", path: "M20.8 10.7c-.1-.1-.5-.4-1.5-.4-.3 0-.5 0-.8.1-.3-1-.9-1.8-1.8-2.5l-.4-.3-.3.4c-.4.5-.6 1.2-.6 1.8 0 .7.2 1.3.5 1.8-.7.4-1.5.5-2.3.5H2.1l-.1.5c-.1.8-.1 1.6.1 2.5.3 1.1.8 2 1.5 2.8 1.5 1.6 3.8 2.4 6.4 2.4 5.6 0 9.8-2.6 11.7-7.3.8 0 2.4 0 3.2-1.6l.2-.3-.3-.2zM5.3 11.8H7c.1 0 .2-.1.2-.2V10c0-.1-.1-.2-.2-.2H5.3c-.1 0-.2.1-.2.2v1.6c0 .1.1.2.2.2zm2.5 0H9.5c.1 0 .2-.1.2-.2V10c0-.1-.1-.2-.2-.2H7.8c-.1 0-.2.1-.2.2v1.6c0 .1.1.2.2.2zm2.5 0H12c.1 0 .2-.1.2-.2V10c0-.1-.1-.2-.2-.2h-1.7c-.1 0-.2.1-.2.2v1.6c0 .1.1.2.2.2zm2.5 0h1.7c.1 0 .2-.1.2-.2V10c0-.1-.1-.2-.2-.2h-1.7c-.1 0-.2.1-.2.2v1.6c0 .1.1.2.2.2zm-5-2.5H9.5c.1 0 .2-.1.2-.2V7.5c0-.1-.1-.2-.2-.2H7.8c-.1 0-.2.1-.2.2v1.6c0 .1.1.2.2.2zm2.5 0H12c.1 0 .2-.1.2-.2V7.5c0-.1-.1-.2-.2-.2h-1.7c-.1 0-.2.1-.2.2v1.6c0 .1.1.2.2.2zm2.5 0h1.7c.1 0 .2-.1.2-.2V7.5c0-.1-.1-.2-.2-.2h-1.7c-.1 0-.2.1-.2.2v1.6c0 .1.1.2.2.2z" },
  { name: "AWS", path: "M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.374 6.18 6.18 0 01-.248-.467c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.032-.863.104-.296.072-.583.16-.862.272a2.287 2.287 0 01-.28.104.488.488 0 01-.127.024c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.288a.596.596 0 01.224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 011.246-.152c.95 0 1.644.216 2.091.647.44.432.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.311-.08h.743c.128 0 .2.064.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.17c-.048.16-.104.264-.168.312a.549.549 0 01-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 01-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.415-.287-.806-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.806a1.903 1.903 0 01-.399-1.164c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.511-.32.83-.415a3.549 3.549 0 011.005-.144c.176 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.255.096.336.144a.69.69 0 01.24.2.43.43 0 01.071.263v.375c0 .168-.064.256-.184.256a.83.83 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.878.44l1.134.358c.574.184.99.44 1.237.767.248.328.375.703.375 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z" },
  { name: "Vercel", path: "M12 2L2 19.5h20L12 2z" },
  { name: "Redis", path: "M21.2 13.5c-.7.4-4.4 1.9-5.2 2.3-.8.4-1.2.4-1.8.1-.6-.3-4.6-1.9-5.3-2.2-.7-.3-.7-.6 0-.9.7-.3 4.6-1.8 5.3-2.1.7-.3 1.1-.3 1.8 0 .7.3 4.5 1.8 5.2 2.1.7.3.7.4 0 .7zm-5.4-2.8L12 12.3l-3.8-1.6L12 9.1l3.8 1.6zM12 3c-.4 0-.8.1-1.1.2L5.3 5.9c-.6.3-1 .8-1 1.4v6.4c0 .6.4 1.1 1 1.4l5.6 2.7c.3.1.7.2 1.1.2s.8-.1 1.1-.2l5.6-2.7c.6-.3 1-.8 1-1.4V7.3c0-.6-.4-1.1-1-1.4l-5.6-2.7c-.3-.1-.7-.2-1.1-.2z" },
  { name: "PostgreSQL", path: "M17.128 0a10.134 10.134 0 00-2.755.403l-.063.02A10.922 10.922 0 0012.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.14.403 2.804.775 1.814 1.82.826 2.865.334 4.482.636 6.748c.09.675.272 1.384.516 2.117.244.733.55 1.49.927 2.254.376.764.818 1.522 1.347 2.236.529.714 1.088 1.33 1.74 1.825.651.495 1.262.79 1.96.915l.09.014c.178.027.348.04.508.04a2.37 2.37 0 001.108-.282 2.6 2.6 0 00.135.168c.113.134.242.262.384.38a5.255 5.255 0 00-.323 1.796c-.015.614.04 1.313.197 1.97.157.657.425 1.293.911 1.758.487.466 1.147.667 1.829.59.682-.078 1.22-.417 1.63-.865.412-.447.713-1.016.938-1.648.226-.632.38-1.326.488-2.007a19.89 19.89 0 00.173-1.727l.003-.046a1.71 1.71 0 00.148.038l.033.007a3.81 3.81 0 001.376.04c.35-.058.667-.154.953-.274-.008.216-.01.432 0 .647.024.569.098 1.153.29 1.674.191.52.506.988.988 1.282.482.294 1.1.378 1.702.21.603-.168 1.07-.58 1.42-1.057.35-.477.596-1.027.788-1.584.192-.557.332-1.12.448-1.612l.001-.003c.071-.303.137-.558.202-.77.113-.367.22-.637.329-.837a3.7 3.7 0 001.26-1.418c.283-.572.414-1.16.38-1.69A9.075 9.075 0 0023.1 6.57c-.253-.656-.597-1.218-.998-1.693-.4-.475-.861-.868-1.367-1.151A5.3 5.3 0 0019.2 3.2c-.426-.091-.867-.133-1.304-.122a5.753 5.753 0 00-.768.05V3.12z" },
];

const STATS = [
  { value: 847000, label: "npm downloads", suffix: "" },
  { value: 12400, label: "GitHub stars", suffix: "" },
  { value: 99.9, label: "uptime", suffix: "%" },
];

const PRICING = [
  {
    name: "Hobby",
    price: "Free",
    period: "",
    desc: "For personal projects and experiments",
    features: ["3 projects", "1 GB bandwidth / mo", "Preview deployments", "Community support", "Shared compute"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$20",
    period: "/mo",
    desc: "For professional developers and small teams",
    features: ["Unlimited projects", "100 GB bandwidth / mo", "Custom domains", "Team collaboration", "Priority support", "Secrets management"],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For organizations with advanced needs",
    features: ["Everything in Pro", "Unlimited bandwidth", "SSO / SAML", "SLA guarantee", "Dedicated support", "Audit logs", "On-prem option"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

/* ─── StatCounter ────────────────────────────────────────────────── */
function StatCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2200;
          const start = performance.now();
          const isDecimal = value % 1 !== 0;
          function tick(now: number) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = eased * value;
            if (el) {
              if (isDecimal) el.textContent = current.toFixed(1);
              else if (value >= 1000000) el.textContent = (current / 1000000).toFixed(1) + "M";
              else if (value >= 1000) el.textContent = (current / 1000).toFixed(1) + "K";
              else el.textContent = Math.floor(current).toString();
            }
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>0</span>
  );
}

/* ─── FadeInSection ──────────────────────────────────────────────── */
function FadeInSection({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(40px)",
      transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}s, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ─── AnimatedTerminal (Hero) ────────────────────────────────────── */
function AnimatedTerminal() {
  const [lines, setLines] = useState<{ text: string; type: "prompt" | "output" | "typing" }[]>([]);
  const started = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    let cancelled = false;
    const allLines: { text: string; type: "prompt" | "output" | "typing" }[] = [];

    async function runSteps() {
      for (const step of TERMINAL_STEPS) {
        if (cancelled) return;
        // Type command character by character
        const fullPrompt = step.prompt + step.command;
        for (let i = 0; i <= step.command.length; i++) {
          if (cancelled) return;
          const partial = step.prompt + step.command.slice(0, i) + "█";
          const current = [...allLines, { text: partial, type: "typing" as const }];
          setLines([...current]);
          await new Promise((r) => setTimeout(r, step.delay));
        }
        // Finish command line
        allLines.push({ text: fullPrompt, type: "prompt" as const });
        setLines([...allLines]);
        await new Promise((r) => setTimeout(r, 300));
        // Output lines
        for (const out of step.output) {
          if (cancelled) return;
          allLines.push({ text: out, type: "output" as const });
          setLines([...allLines]);
          await new Promise((r) => setTimeout(r, 180));
        }
        await new Promise((r) => setTimeout(r, 600));
      }
    }

    runSteps();
    return () => { cancelled = true; };
  }, []);

  // Auto-scroll
  useEffect(() => {
    const el = containerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  return (
    <div style={{
      background: "rgba(0,0,0,0.6)",
      border: `1px solid rgba(16,185,129,0.2)`,
      borderRadius: 16,
      overflow: "hidden",
      boxShadow: `0 25px 80px rgba(0,0,0,0.5), 0 0 60px rgba(16,185,129,0.08)`,
      width: "100%",
      maxWidth: 640,
    }}>
      {/* Title bar */}
      <div style={{
        display: "flex", alignItems: "center", gap: 6,
        padding: "12px 16px",
        background: "rgba(255,255,255,0.03)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        <span style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.4)" }}>terminal</span>
      </div>
      {/* Body */}
      <div ref={containerRef} style={{
        padding: "20px 20px",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 13,
        lineHeight: 1.7,
        minHeight: 260,
        maxHeight: 320,
        overflowY: "auto",
      }}>
        {lines.map((line, i) => {
          if (line.type === "typing") {
            return (
              <div key={i} style={{ color: PRIMARY, whiteSpace: "pre-wrap" }}>
                <span style={{ color: PRIMARY }}>{line.text.slice(0, 2)}</span>
                <span style={{ color: "#e2e8f0" }}>{line.text.slice(2)}</span>
              </div>
            );
          }
          if (line.type === "prompt") {
            return (
              <div key={i} style={{ whiteSpace: "pre-wrap" }}>
                <span style={{ color: PRIMARY }}>{line.text.slice(0, 2)}</span>
                <span style={{ color: "#e2e8f0" }}>{line.text.slice(2)}</span>
              </div>
            );
          }
          // output
          const isSuccess = line.text.startsWith("✔") || line.text.startsWith("🚀");
          const isArrow = line.text.startsWith("→");
          return (
            <div key={i} style={{
              color: isSuccess ? PRIMARY : isArrow ? ACCENT : "rgba(148,163,184,0.8)",
              whiteSpace: "pre-wrap",
            }}>
              {line.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── CopyInstallBar ─────────────────────────────────────────────── */
function CopyInstallBar() {
  const [copied, setCopied] = useState(false);
  const cmd = "npm install -g forge-cli";

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(cmd).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [cmd]);

  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 12,
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(16,185,129,0.15)",
      borderRadius: 12, padding: "12px 20px",
      fontFamily: "'JetBrains Mono', monospace", fontSize: 14,
      color: "rgba(255,255,255,0.8)",
      cursor: "pointer",
      transition: "all 0.3s ease",
    }}
    onClick={handleCopy}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(16,185,129,0.4)";
      (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.06)";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(16,185,129,0.15)";
      (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
    }}
    >
      <span style={{ color: "rgba(148,163,184,0.5)" }}>$</span>
      <span>{cmd}</span>
      <span style={{ color: copied ? PRIMARY : "rgba(148,163,184,0.5)", fontSize: 12, marginLeft: 8, minWidth: 60 }}>
        {copied ? "✓ Copied!" : "Copy"}
      </span>
    </div>
  );
}

/* ─── FeatureCard ────────────────────────────────────────────────── */
function FeatureCard({ feature, delay }: { feature: typeof FEATURES[0]; delay: number }) {
  return (
    <FadeInSection delay={delay}>
      <div
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(16,185,129,0.1)",
          borderRadius: 16,
          padding: 28,
          transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
          cursor: "default",
          height: "100%",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.borderColor = "rgba(16,185,129,0.3)";
          el.style.background = "rgba(16,185,129,0.04)";
          el.style.transform = "translateY(-4px)";
          el.style.boxShadow = "0 20px 60px rgba(16,185,129,0.08)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.borderColor = "rgba(16,185,129,0.1)";
          el.style.background = "rgba(255,255,255,0.02)";
          el.style.transform = "translateY(0)";
          el.style.boxShadow = "none";
        }}
      >
        <h3 style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 18, fontWeight: 700,
          color: "#f8fafc", marginBottom: 8,
          letterSpacing: "-0.02em",
        }}>{feature.title}</h3>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 14, color: "rgba(148,163,184,0.7)",
          lineHeight: 1.6, marginBottom: 16,
        }}>{feature.desc}</p>
        {/* Code snippet */}
        <div style={{
          background: "rgba(0,0,0,0.4)",
          borderRadius: 10,
          padding: "14px 16px",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12, lineHeight: 1.7,
          border: "1px solid rgba(255,255,255,0.05)",
          overflowX: "auto",
        }}>
          {feature.code.split("\n").map((line, i) => {
            // Basic syntax highlighting
            let color = "#abb2bf";
            if (line.startsWith("#") || line.startsWith("$")) color = "rgba(148,163,184,0.5)";
            else if (line.startsWith("✔")) color = PRIMARY;
            else if (line.startsWith("→") || line.includes("https://")) color = ACCENT;
            else if (line.includes(":")) {
              const parts = line.split(":");
              return (
                <div key={i} style={{ whiteSpace: "pre" }}>
                  <span style={{ color: "#e5c07b" }}>{parts[0]}</span>
                  <span style={{ color: "#abb2bf" }}>:</span>
                  <span style={{ color: line.includes('"') ? "#98c379" : "#d19a66" }}>{parts.slice(1).join(":")}</span>
                </div>
              );
            }
            return <div key={i} style={{ color, whiteSpace: "pre" }}>{line}</div>;
          })}
        </div>
      </div>
    </FadeInSection>
  );
}

/* ─── CLI Showcase ───────────────────────────────────────────────── */
function CLIShowcase() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24,
      maxWidth: 1000,
      margin: "0 auto",
      width: "100%",
    }}>
      {/* Before */}
      <FadeInSection delay={0.1}>
        <div style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(239,68,68,0.15)",
          borderRadius: 16,
          overflow: "hidden",
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "10px 16px",
            background: "rgba(239,68,68,0.05)",
            borderBottom: "1px solid rgba(239,68,68,0.1)",
          }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
            <span style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "rgba(239,68,68,0.6)" }}>without forge</span>
          </div>
          <div style={{
            padding: "16px 20px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12, lineHeight: 2.0,
          }}>
            {BEFORE_STEPS.map((step, i) => (
              <div key={i} style={{ color: "rgba(148,163,184,0.6)", whiteSpace: "pre" }}>
                <span style={{ color: "rgba(239,68,68,0.5)" }}>$ </span>
                <span>{step.slice(2)}</span>
              </div>
            ))}
            <div style={{ color: "rgba(148,163,184,0.3)", marginTop: 8, fontSize: 11 }}>⏱ ~8 minutes, 5 commands</div>
          </div>
        </div>
      </FadeInSection>

      {/* After */}
      <FadeInSection delay={0.2}>
        <div style={{
          background: "rgba(255,255,255,0.02)",
          border: `1px solid rgba(16,185,129,0.2)`,
          borderRadius: 16,
          overflow: "hidden",
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "10px 16px",
            background: "rgba(16,185,129,0.05)",
            borderBottom: `1px solid rgba(16,185,129,0.1)`,
          }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
            <span style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: PRIMARY }}>with forge</span>
          </div>
          <div style={{
            padding: "16px 20px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12, lineHeight: 2.0,
          }}>
            <div style={{ whiteSpace: "pre" }}>
              <span style={{ color: PRIMARY }}>$ </span>
              <span style={{ color: "#e2e8f0" }}>{AFTER_COMMAND.slice(2)}</span>
            </div>
            {AFTER_OUTPUT.map((line, i) => {
              const isSuccess = line.startsWith("✔");
              const isArrow = line.startsWith("→");
              return (
                <div key={i} style={{
                  color: isSuccess ? PRIMARY : isArrow ? ACCENT : "rgba(148,163,184,0.7)",
                  whiteSpace: "pre",
                }}>
                  {line}
                </div>
              );
            })}
            <div style={{ color: PRIMARY, marginTop: 8, fontSize: 11 }}>⚡ 4.2 seconds, 1 command</div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

/* ─── Main Page ──────────────────────────────────────────────────── */
export default function DevToolCLIPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #09090B; color: #f8fafc; -webkit-font-smoothing: antialiased; }
        ::selection { background: rgba(16,185,129,0.3); }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes pulse-glow { 0%,100% { box-shadow: 0 0 20px rgba(16,185,129,0.2); } 50% { box-shadow: 0 0 40px rgba(16,185,129,0.4); } }
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(16,185,129,0.2); border-radius: 3px; }
      `}</style>

      {/* ─── Navbar ──────────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      }}>
        <div style={{
          maxWidth: 1200, margin: "12px auto 0",
          padding: "14px 28px",
          background: "rgba(9,9,11,0.7)",
          backdropFilter: "blur(24px) saturate(1.5)",
          border: "1px solid rgba(16,185,129,0.08)",
          borderRadius: 16,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700, fontSize: 18,
            background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-0.04em",
          }}>
            {BRAND}
          </div>
          <div style={{ display: "flex", gap: 32 }}>
            {["Docs", "GitHub"].map((link) => (
              <a key={link} href="#" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14, fontWeight: 500,
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#fff"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)"; }}
              >{link}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* ─── Hero Section ────────────────────────────────────────── */}
      <section style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center",
        padding: "120px 24px 60px",
        position: "relative", overflow: "hidden",
      }}>
        {/* Dot grid background */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.4, pointerEvents: "none" }}>
          <defs>
            <pattern id="dotgrid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="16" cy="16" r="1" fill="rgba(16,185,129,0.15)" />
            </pattern>
            <radialGradient id="dotmask">
              <stop offset="0%" stopColor="white" />
              <stop offset="70%" stopColor="white" stopOpacity="0.3" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="dmask">
              <rect width="100%" height="100%" fill="url(#dotmask)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotgrid)" mask="url(#dmask)" />
        </svg>

        {/* Glow orb */}
        <div style={{
          position: "absolute",
          top: "20%", left: "50%", transform: "translateX(-50%)",
          width: 600, height: 600,
          background: `radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 60%)`,
          pointerEvents: "none",
        }} />

        {/* Status badge */}
        <FadeInSection delay={0}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(16,185,129,0.08)",
            border: "1px solid rgba(16,185,129,0.2)",
            borderRadius: 999, padding: "6px 16px",
            marginBottom: 32,
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: "50%",
              background: PRIMARY,
              boxShadow: `0 0 8px rgba(16,185,129,0.5)`,
            }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11, fontWeight: 600,
              color: PRIMARY,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}>v2.4.0 — Now with Edge Functions</span>
          </div>
        </FadeInSection>

        {/* Headline */}
        <FadeInSection delay={0.15}>
          <h1 style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: 700,
            letterSpacing: "-0.05em",
            lineHeight: 1.05,
            marginBottom: 20,
          }}>
            <span style={{ color: "#f8fafc" }}>Ship faster.</span>
            <br />
            <span style={{
              background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Deploy instantly.
            </span>
          </h1>
        </FadeInSection>

        {/* Subheadline */}
        <FadeInSection delay={0.3}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
            color: "rgba(148,163,184,0.8)",
            maxWidth: 560, margin: "0 auto",
            lineHeight: 1.6, letterSpacing: "-0.01em",
          }}>
            The CLI that replaces your entire deployment pipeline. Build, preview, and ship to the edge — all from your terminal.
          </p>
        </FadeInSection>

        {/* Install bar */}
        <FadeInSection delay={0.45} style={{ marginTop: 40 }}>
          <CopyInstallBar />
        </FadeInSection>

        {/* Terminal animation */}
        <FadeInSection delay={0.6} style={{ marginTop: 48, width: "100%", display: "flex", justifyContent: "center" }}>
          <AnimatedTerminal />
        </FadeInSection>
      </section>

      {/* ─── Stats ───────────────────────────────────────────────── */}
      <section style={{
        padding: "60px 24px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}>
        <div style={{
          maxWidth: 900, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: 40, textAlign: "center",
        }}>
          {STATS.map((stat, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  color: PRIMARY,
                }}>
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                  {stat.suffix}
                </div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14, color: "rgba(148,163,184,0.6)",
                  marginTop: 4, textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}>{stat.label}</div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ─── Features ────────────────────────────────────────────── */}
      <section style={{ padding: "100px 24px" }}>
        <FadeInSection>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12, fontWeight: 600,
              color: ACCENT,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}>Features</span>
            <h2 style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 700,
              color: "#f8fafc",
              letterSpacing: "-0.04em",
              marginTop: 12,
            }}>Everything you need to ship</h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16, color: "rgba(148,163,184,0.6)",
              maxWidth: 480, margin: "12px auto 0",
              lineHeight: 1.6,
            }}>Zero config, maximum velocity. Every feature designed for developers who ship.</p>
          </div>
        </FadeInSection>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          maxWidth: 1100,
          margin: "0 auto",
        }}>
          {FEATURES.map((feature, i) => (
            <FeatureCard key={i} feature={feature} delay={0.1 + i * 0.1} />
          ))}
        </div>
      </section>

      {/* ─── CLI Showcase (Before / After) ───────────────────────── */}
      <section style={{ padding: "100px 24px" }}>
        <FadeInSection>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12, fontWeight: 600,
              color: ACCENT,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}>Workflow</span>
            <h2 style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 700,
              color: "#f8fafc",
              letterSpacing: "-0.04em",
              marginTop: 12,
            }}>5 steps → 1 command</h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16, color: "rgba(148,163,184,0.6)",
              maxWidth: 480, margin: "12px auto 0",
              lineHeight: 1.6,
            }}>Stop context-switching. One command does it all.</p>
          </div>
        </FadeInSection>
        <CLIShowcase />
      </section>

      {/* ─── Integrations ────────────────────────────────────────── */}
      <section style={{ padding: "100px 24px" }}>
        <FadeInSection>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12, fontWeight: 600,
              color: ACCENT,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}>Integrations</span>
            <h2 style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 700,
              color: "#f8fafc",
              letterSpacing: "-0.04em",
              marginTop: 12,
            }}>Works with your stack</h2>
          </div>
        </FadeInSection>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 20,
          maxWidth: 800,
          margin: "0 auto",
        }}>
          {INTEGRATIONS.map((item, i) => (
            <FadeInSection key={i} delay={i * 0.08}>
              <div style={{
                display: "flex", flexDirection: "column",
                alignItems: "center", gap: 10,
                padding: "24px 16px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 14,
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(16,185,129,0.3)";
                el.style.background = "rgba(16,185,129,0.04)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(255,255,255,0.06)";
                el.style.background = "rgba(255,255,255,0.02)";
                el.style.transform = "translateY(0)";
              }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)">
                  <path d={item.path} />
                </svg>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11, fontWeight: 600,
                  color: "rgba(148,163,184,0.6)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}>{item.name}</span>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ─── Pricing ─────────────────────────────────────────────── */}
      <section style={{ padding: "100px 24px" }}>
        <FadeInSection>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12, fontWeight: 600,
              color: ACCENT,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}>Pricing</span>
            <h2 style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 700,
              color: "#f8fafc",
              letterSpacing: "-0.04em",
              marginTop: 12,
            }}>Start free, scale as you grow</h2>
          </div>
        </FadeInSection>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          maxWidth: 1000,
          margin: "0 auto",
        }}>
          {PRICING.map((plan, i) => (
            <FadeInSection key={i} delay={0.1 + i * 0.1}>
              <div style={{
                background: plan.highlighted ? "rgba(16,185,129,0.06)" : "rgba(255,255,255,0.02)",
                border: `1px solid ${plan.highlighted ? "rgba(16,185,129,0.3)" : "rgba(255,255,255,0.06)"}`,
                borderRadius: 20,
                padding: "36px 28px",
                position: "relative",
                transition: "all 0.4s ease",
                display: "flex", flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = plan.highlighted ? `0 20px 60px rgba(16,185,129,0.12)` : "0 20px 60px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
              >
                {plan.highlighted && (
                  <div style={{
                    position: "absolute", top: -1, left: 0, right: 0, height: 2,
                    background: `linear-gradient(90deg, transparent, ${PRIMARY}, transparent)`,
                    borderRadius: "20px 20px 0 0",
                  }} />
                )}
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 14, fontWeight: 600,
                  color: plan.highlighted ? PRIMARY : "rgba(148,163,184,0.7)",
                  marginBottom: 16,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}>{plan.name}</div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 40, fontWeight: 700,
                  color: "#f8fafc",
                  marginBottom: 4,
                }}>
                  {plan.price}
                  {plan.period && <span style={{ fontSize: 16, color: "rgba(148,163,184,0.5)", fontWeight: 400 }}>{plan.period}</span>}
                </div>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14, color: "rgba(148,163,184,0.6)",
                  marginBottom: 24, lineHeight: 1.5,
                }}>{plan.desc}</p>
                <ul style={{ listStyle: "none", marginBottom: 32, flex: 1 }}>
                  {plan.features.map((f, j) => (
                    <li key={j} style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14, color: "rgba(255,255,255,0.7)",
                      padding: "6px 0",
                      display: "flex", alignItems: "center", gap: 10,
                    }}>
                      <span style={{ color: PRIMARY, fontSize: 14 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 14, fontWeight: 600,
                  padding: "12px 24px",
                  borderRadius: 10,
                  border: plan.highlighted ? "none" : "1px solid rgba(255,255,255,0.1)",
                  background: plan.highlighted ? PRIMARY : "transparent",
                  color: plan.highlighted ? "#09090B" : "rgba(255,255,255,0.7)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  width: "100%",
                  ...(plan.highlighted ? { animation: "pulse-glow 3s ease-in-out infinite" } : {}),
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  if (!plan.highlighted) {
                    el.style.borderColor = "rgba(16,185,129,0.4)";
                    el.style.color = "#fff";
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  if (!plan.highlighted) {
                    el.style.borderColor = "rgba(255,255,255,0.1)";
                    el.style.color = "rgba(255,255,255,0.7)";
                  }
                }}
                >{plan.cta}</button>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ─── Footer ──────────────────────────────────────────────── */}
      <footer style={{
        padding: "60px 24px 40px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700, fontSize: 16,
            background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>{BRAND}</div>
          <div style={{ display: "flex", gap: 28 }}>
            {["GitHub", "Discord", "Docs", "Blog", "Status"].map((link) => (
              <a key={link} href="#" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13, color: "rgba(148,163,184,0.5)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "rgba(148,163,184,0.8)"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "rgba(148,163,184,0.5)"; }}
              >{link}</a>
            ))}
          </div>
        </div>
        <div style={{
          maxWidth: 1100, margin: "24px auto 0",
          textAlign: "center",
          fontFamily: "'Inter', sans-serif",
          fontSize: 12,
          color: "rgba(148,163,184,0.3)",
        }}>
          © 2024 {BRAND}. Built for developers, by developers.
        </div>
      </footer>
    </>
  );
}
