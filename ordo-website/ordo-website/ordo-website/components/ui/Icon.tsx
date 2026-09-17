export type IconName =
  | "pin"
  | "clock"
  | "layers"
  | "gear"
  | "partner"
  | "specialist"
  | "tech"
  | "shield"
  | "chat"
  | "chart"
  | "arrow"
  | "phone";

const paths: Record<IconName, React.ReactNode> = {
  pin: (
    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
  ),
  clock: (
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-14v5l3.5 2" />
  ),
  layers: (
    <path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" />
  ),
  gear: (
    <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 9 19.36a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.64 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.64 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.64 1.7 1.7 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.64a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.36 9c.14.6.5 1.1 1 1.4a1.7 1.7 0 0 0 .64.6H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1Z" />
  ),
  partner: <path d="M17 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M13 4.13a4 4 0 0 1 0 7.75M21 20v-2a4 4 0 0 0-3-3.87M11 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />,
  specialist: <path d="M14.5 2a2.5 2.5 0 0 1 2.5 2.5V6l3 3-1.5 1.5-3-3H14l-2 2 6 6-1.5 1.5-6-6-2 2v1.5L5 16.5 3.5 15l3.5-3.5H8.5l2-2-3-3 1.5-1.5 3 3V6l2-2Z" />,
  tech: <path d="M9 18h6M10 22h4M6 2h12a1 1 0 0 1 1 1v9a7 7 0 1 1-14 0V3a1 1 0 0 1 1-1Z" />,
  shield: <path d="M12 2 4 5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V5l-8-3ZM9 12l2 2 4-4" />,
  chat: <path d="M21 12a8 8 0 1 1-3.2-6.4M21 4v6h-6" />,
  chart: <path d="M4 20V10M12 20V4M20 20v-7" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
  ),
};

export default function Icon({
  name,
  className = "w-5 h-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
