// Platform logo SVGs — inline for easy color control
// Gray default, colored on hover

interface LogoProps {
  className?: string;
}

// ✅ Correct: from cursor.com via simpleicons (hexagon with diagonal cut)
export function CursorLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Cursor">
      <path fill="currentColor" d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23"/>
    </svg>
  );
}

// ✅ Correct: from simpleicons (Z-shaped v0 wordmark)
export function V0Logo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="v0">
      <path fill="currentColor" d="M14.066 6.028v2.22h5.729q.075-.001.148.005l-5.853 5.752a2 2 0 0 1-.024-.309V8.247h-2.353v5.45c0 2.322 1.935 4.222 4.258 4.222h5.675v-2.22h-5.675q-.03 0-.059-.003l5.729-5.629q.006.082.006.166v5.465H24v-5.465a4.204 4.204 0 0 0-4.205-4.205zM0 8.245l8.28 9.266c.839.94 2.396.346 2.396-.914V8.245H8.19v5.44l-4.86-5.44Z"/>
    </svg>
  );
}

// ✅ Correct: bolt.new official "b" favicon mark
export function BoltLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Bolt">
      <rect width="16" height="16" rx="4" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.64368 11.7731C7.91976 11.7731 7.20901 11.5147 6.80099 10.9591L6.65707 11.6143L4 13L4.28684 11.6143L6.22186 3H8.59103L7.9066 6.03634C8.45941 5.44199 8.97273 5.22234 9.63083 5.22234C11.0523 5.22234 12 6.1397 12 7.81938C12 9.55074 10.9076 11.7731 8.64368 11.7731ZM9.55186 8.31036C9.55186 9.11144 8.97273 9.71871 8.22249 9.71871C7.8013 9.71871 7.4196 9.56366 7.16952 9.29233L7.53806 7.70309C7.81447 7.43176 8.13036 7.27671 8.49889 7.27671C9.06486 7.27671 9.55186 7.69017 9.55186 8.31036Z" fill="white"/>
    </svg>
  );
}

// ✅ Correct: heart mark (lovable.dev brand uses heart)
export function LovableLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Lovable">
      <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35z"/>
    </svg>
  );
}

// ✅ Correct: Anthropic "A" from simpleicons
export function ClaudeLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Claude Code">
      <path fill="currentColor" d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"/>
    </svg>
  );
}

// ✅ Correct: OpenClaw official lobster logo (from openclaw.ai/favicon.svg)
// Uses brand colors directly — not currentColor — to match official mark
export function OpenClawLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="OpenClaw">
      <defs>
        <linearGradient id="oc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff4d4d"/>
          <stop offset="100%" stopColor="#991b1b"/>
        </linearGradient>
      </defs>
      <path d="M60 10 C30 10 15 35 15 55 C15 75 30 95 45 100 L45 110 L55 110 L55 100 C55 100 60 102 65 100 L65 110 L75 110 L75 100 C90 95 105 75 105 55 C105 35 90 10 60 10Z" fill="url(#oc-grad)"/>
      <path d="M20 45 C5 40 0 50 5 60 C10 70 20 65 25 55 C28 48 25 45 20 45Z" fill="url(#oc-grad)"/>
      <path d="M100 45 C115 40 120 50 115 60 C110 70 100 65 95 55 C92 48 95 45 100 45Z" fill="url(#oc-grad)"/>
      <path d="M45 15 Q35 5 30 8" stroke="#ff4d4d" strokeWidth="3" strokeLinecap="round"/>
      <path d="M75 15 Q85 5 90 8" stroke="#ff4d4d" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="45" cy="35" r="6" fill="#050810"/>
      <circle cx="75" cy="35" r="6" fill="#050810"/>
      <circle cx="46" cy="34" r="2.5" fill="#00e5cc"/>
      <circle cx="76" cy="34" r="2.5" fill="#00e5cc"/>
    </svg>
  );
}
