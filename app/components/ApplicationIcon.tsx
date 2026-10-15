const paths = {
  agriculture:
    "M16 28V14M16 21C4 22 3 11 4 5c8 0 12 3 12 11M16 18C28 19 29 8 28 3c-8 0-12 4-12 11M7 9l9 11M24 8l-8 10",
  construction:
    "M3 28h26M6 28V13h20v15M10 13V6h12v7M9 18h4v4H9zM19 18h4v4h-4zM14 28v-5h4v5M9 6h14",
  industrial:
    "M3 28V15l9-5v7l8-5v16M20 28V4h5l3 24M3 28h25M7 22h3M15 22h3M21 9h5",
  logistics:
    "M3 21h19V9H3zM22 14h4l3 5v5h-7M7 27a3 3 0 1 0 0-6 3 3 0 0 0 0 6M25 27a3 3 0 1 0 0-6 3 3 0 0 0 0 6M9 9V4h9v5M7 14h10",
  municipal:
    "M3 28h26M6 28V11l10-7 10 7v17M10 15h3M19 15h3M10 20h3M19 20h3M14 28v-5h4v5",
  modular:
    "M4 4h9v9H4zM19 4h9v9h-9zM4 19h9v9H4zM19 19h9v9h-9zM13 8h6M8 13v6M24 13v6M13 24h6",
};
export default function ApplicationIcon({
  kind,
}: {
  kind: keyof typeof paths;
}) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[kind]} />
    </svg>
  );
}
