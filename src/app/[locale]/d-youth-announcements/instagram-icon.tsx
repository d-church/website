export const InstagramIcon = ({ size = 48, color = "white", className = "" }: { size?: number; color?: string; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    width={size}
    height={size}
    className={className}
  >
    <rect
      x="60"
      y="45"
      width="280"
      height="280"
      rx="70"
      ry="70"
      fill="none"
      stroke={color}
      strokeWidth="35"
    />
    <circle
      cx="200"
      cy="185"
      r="70"
      fill="none"
      stroke={color}
      strokeWidth="35"
    />
    <circle cx="287" cy="110" r="15" fill={color} />
  </svg>
);

