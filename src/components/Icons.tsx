import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
  focusable: false,
};

export function WhatsAppIcon({ filled, ...props }: IconProps & { filled?: boolean }) {
  if (filled) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden focusable="false" {...props}>
        <path
          fill="currentColor"
          d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.94L2 22l5.36-1.4a9.84 9.84 0 0 0 4.68 1.2h.01c5.43 0 9.84-4.4 9.84-9.84 0-2.63-1.02-5.1-2.88-6.96A9.78 9.78 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.13 8.13 0 0 1-1.25-4.35c0-4.52 3.68-8.19 8.2-8.19 2.19 0 4.25.86 5.8 2.4a8.13 8.13 0 0 1 2.4 5.8c0 4.52-3.68 8.18-8.2 8.18Zm4.5-6.13c-.25-.12-1.46-.72-1.68-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05 0 1.2.88 2.37 1 2.53.12.16 1.73 2.64 4.2 3.7.59.25 1.05.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.07.15-1.17-.06-.1-.22-.16-.47-.28Z"
        />
      </svg>
    );
  }
  return (
    <svg {...base} {...props}>
      <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.4 8.5 8.5 0 0 1-4-1L3 20l1.1-5.4a8.4 8.4 0 0 1-1-4A8.38 8.38 0 0 1 11.6 2 8.38 8.38 0 0 1 21 11.5Z" />
      <path d="M8.5 8.5c0 3 2 5 5 5" />
    </svg>
  );
}

export function InstagramIcon({ ...props }: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 3h-2A1.5 1.5 0 0 0 3 4.6C3 13 11 21 19.4 21A1.5 1.5 0 0 0 21 19.5v-2a1.5 1.5 0 0 0-1.3-1.5l-2.6-.4a1.5 1.5 0 0 0-1.5.7l-.7 1.2a12.6 12.6 0 0 1-5.4-5.4l1.2-.7a1.5 1.5 0 0 0 .7-1.5l-.4-2.6A1.5 1.5 0 0 0 6.5 3Z" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function CarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 16v2.2a1 1 0 0 0 1 1h1.6a1 1 0 0 0 1-1V16" />
      <path d="M15.4 16v2.2a1 1 0 0 0 1 1H18a1 1 0 0 0 1-1V16" />
      <path d="M4.2 16h15.6a1.2 1.2 0 0 0 1.2-1.3l-.5-3.6a3 3 0 0 0-1.5-2.2l-2.6-1.4a4 4 0 0 0-1.9-.5H9.5a4 4 0 0 0-1.9.5L5 8.9a3 3 0 0 0-1.5 2.2L3 14.7A1.2 1.2 0 0 0 4.2 16Z" />
      <path d="M3.4 12.4h17.2" />
    </svg>
  );
}

export function TransferIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8h13l-3-3" />
      <path d="M20 16H7l3 3" />
    </svg>
  );
}

export function LicenseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v4h4" />
      <path d="m9.5 14 1.8 1.8 3.4-3.6" />
    </svg>
  );
}

export function TaxiIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 16v2.2a1 1 0 0 0 1 1h1.4a1 1 0 0 0 1-1V16" />
      <path d="M15.6 16v2.2a1 1 0 0 0 1 1H18a1 1 0 0 0 1-1V16" />
      <path d="M4.4 16h15.2a1.1 1.1 0 0 0 1.1-1.2l-.5-3.4a2.8 2.8 0 0 0-1.4-2l-2.5-1.3a3.8 3.8 0 0 0-1.8-.4H9.5a3.8 3.8 0 0 0-1.8.4L5.2 9.4a2.8 2.8 0 0 0-1.4 2l-.5 3.4A1.1 1.1 0 0 0 4.4 16Z" />
      <path d="M9 6h6" />
    </svg>
  );
}

export function PcdIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="5" r="2" />
      <path d="M11 8.5V14h4l2.5 6" />
      <path d="M11 14a4.5 4.5 0 1 0 3.4 7.5" />
    </svg>
  );
}

export function DocumentIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 6v6c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z" />
      <path d="m9.2 12 1.9 1.9 3.7-4" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="m6 6 2.5 2.5" />
      <path d="m15.5 15.5 2.5 2.5" />
      <path d="m18 6-2.5 2.5" />
      <path d="m8.5 15.5-2.5 2.5" />
    </svg>
  );
}

export function HandshakeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m11 7 2-2 3 3 2-1 3 3-4 4-2-1" />
      <path d="m13 7-3 3-2-1-4 4 4 4 2-1 2 2 3-3" />
    </svg>
  );
}

export const serviceIcons = {
  car: CarIcon,
  transfer: TransferIcon,
  license: LicenseIcon,
  taxi: TaxiIcon,
  pcd: PcdIcon,
  document: DocumentIcon,
};
