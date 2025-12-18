export const InstagramIcon = ({
  size = 48,
  color = "white",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) => (
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

export const YouTubeIcon = ({
  size = 48,
  color = "white",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
  >
    <path
      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      fill={color}
    />
  </svg>
);

export const StarCircleIcon = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    width={size}
    height={size}
    className={className}
  >
    <circle cx="200" cy="200" r="180" fill="transparent" />
    <g transform="translate(200, 200) rotate(7)">
      <line x1="0" y1="0" x2="0" y2="-100" stroke="white" strokeWidth="45" />
      <line x1="0" y1="0" x2="95" y2="-31" stroke="white" strokeWidth="45" />
      <line x1="0" y1="0" x2="58" y2="81" stroke="white" strokeWidth="45" />
      <line x1="0" y1="0" x2="-58" y2="81" stroke="white" strokeWidth="45" />
      <line x1="0" y1="0" x2="-95" y2="-31" stroke="white" strokeWidth="45" />
    </g>
  </svg>
);

export const TriangleUp = ({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <path d="M12 7 L4 17 L20 17 Z" fill="#202020" />
  </svg>
);

export const TriangleDown = ({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <path d="M12 17 L4 7 L20 7 Z" fill="#202020" />
  </svg>
);

