interface LogoIconProps {
  className?: string;
  size?: number;
}

export function LogoIcon({ className = "", size = 36 }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 110 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* F - vertical bar */}
      <rect x="0" y="0" width="20" height="130" fill="#0F172A" />
      {/* F - top horizontal bar */}
      <rect x="0" y="0" width="85" height="20" fill="#0F172A" />
      {/* F - middle horizontal bar */}
      <rect x="20" y="52" width="55" height="18" fill="#0F172A" />

      {/* Diamond gem - upper-left dark facet */}
      {/* Points: top=center, left=bottom-left, bottom=bottom-center */}
      <polygon points="62,26 92,56 74,74 44,44" fill="#1B3A5C" />
      {/* Diamond gem - lower-right lighter facet */}
      <polygon points="92,56 110,74 92,92 74,74" fill="#7FA4BF" />
    </svg>
  );
}
