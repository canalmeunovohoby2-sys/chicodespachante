import { useEffect, useState } from "react";
import { site } from "../data/site";
import { WhatsAppIcon } from "./Icons";
import "./WhatsAppFloat.css";

export function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      className={`wa-float${show ? " is-visible" : ""}`}
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar no WhatsApp ${site.phoneLabel}`}
    >
      <span className="wa-float__icon">
        <WhatsAppIcon filled />
      </span>
      <span className="wa-float__label">
        <strong>Fale com um especialista</strong>
        <em>{site.phoneLabel}</em>
      </span>
    </a>
  );
}
