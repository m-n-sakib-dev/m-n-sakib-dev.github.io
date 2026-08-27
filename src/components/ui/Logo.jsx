/**
 * Terminal-prompt mark: amber `>_` on a near-black square.
 * Same artwork as /public/favicon.svg — used in the navbar, footer, tab icon.
 */
export default function Logo({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Nazmul Sakib logo"
    >
      <rect width="32" height="32" rx="2" fill="#0a0a0a" />
      <rect
        x="0.75"
        y="0.75"
        width="30.5"
        height="30.5"
        rx="1.5"
        stroke="#ffb000"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <polyline
        points="8.5,9.5 16,16 8.5,22.5"
        stroke="#ffb000"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="17.5" y="18.8" width="7" height="3.4" rx="0.6" fill="#ffb000" />
    </svg>
  );
}
