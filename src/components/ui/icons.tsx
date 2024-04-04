type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  youtube: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="group-hover:fill-[#ffff]"
      {...props}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path
        fill="white"
        className="group-hover:fill-current"
        d="m10 15 5-3-5-3z"
      />
    </svg>
  ),
  facebook: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -2 24 28"
      stroke="1"
      fill="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="24"
      height="24"
      {...props}
    >
      <path d="M9 8h-3v4h3v12h5v-12h3.5l.5-4h-4v-2c0-1.1.5-2 2-2h2v-4h-3c-4 0-5 2.7-5 6v2z" />
    </svg>
  ),
  instagram: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect
        width="20"
        height="20"
        x="2"
        y="2"
        rx="5"
        ry="5"
        fill="currentColor"
        className="group-hover:fill-[#ffff]"
      />
      <path
        d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
        fill="white"
        className="group-hover:fill-current"
      />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="white"
        className="group-hover:fill-current"
      />
    </svg>
  ),
};
