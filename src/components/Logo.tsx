import "./Logo.css";

interface LogoProps {
  className?: string;
}

/**
 * Logo oficial da Chico Despachante (public/logo.png).
 * PNG com fundo transparente — deve ser aplicada sobre fundos azuis/escuros.
 */
export function Logo({ className }: LogoProps) {
  return (
    <img
      className={`logo${className ? ` ${className}` : ""}`}
      src="/logo.png"
      alt="Chico Despachante"
      width={3994}
      height={1320}
      decoding="async"
    />
  );
}
