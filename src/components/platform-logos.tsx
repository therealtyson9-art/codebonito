// Platform logo SVGs — inline for easy color control
// Gray default, colored on hover

interface LogoProps {
  className?: string;
}

export function CursorLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Cursor">
      <path fill="currentColor" d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23"/>
    </svg>
  );
}

export function V0Logo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="v0">
      <path fill="currentColor" d="M14.066 6.028v2.22h5.729q.075-.001.148.005l-5.853 5.752a2 2 0 0 1-.024-.309V8.247h-2.353v5.45c0 2.322 1.935 4.222 4.258 4.222h5.675v-2.22h-5.675q-.03 0-.059-.003l5.729-5.629q.006.082.006.166v5.465H24v-5.465a4.204 4.204 0 0 0-4.205-4.205zM0 8.245l8.28 9.266c.839.94 2.396.346 2.396-.914V8.245H8.19v5.44l-4.86-5.44Z"/>
    </svg>
  );
}

export function BoltLogo({ className }: LogoProps) {
  // Bolt lightning bolt mark (simplified, clean path)
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Bolt">
      <path fill="currentColor" d="M13 2L4.5 13.5H11L9.5 22L20 10H13.5L13 2Z"/>
    </svg>
  );
}

export function LovableLogo({ className }: LogoProps) {
  // Lovable heart-like mark
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Lovable">
      <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35z"/>
    </svg>
  );
}

export function ClaudeLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Claude Code">
      <path fill="currentColor" d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"/>
    </svg>
  );
}

export function OpenClawLogo({ className }: LogoProps) {
  // Simple claw/bracket mark representing OpenClaw
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="OpenClaw">
      <path fill="currentColor" d="M7 4C5 4 3 6 3 8v8c0 2 2 4 4 4H7v-2H7c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h0V4H7zm10 0v2c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2v2c2 0 4-2 4-4V8c0-2-2-4-4-4zm-5 4l-3 4h2l-2 6 7-6h-3l2-4h-3z"/>
    </svg>
  );
}
