import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { nav, site } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";
import {
  ArrowRight,
  CloseIcon,
  MenuIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "./Icons";
import { Logo } from "./Logo";
import "./Header.css";

const sectionIds = nav.map((item) => item.href.replace("#", ""));

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className={`site-header${solid ? " is-solid" : ""}`}>
      <div className="site-header__inner container--wide">
        <a href="#inicio" className="site-header__brand" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="site-header__nav" aria-label="Navegação principal">
          {nav.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={`site-header__link${active === id ? " is-active" : ""}`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="site-header__actions">
          <a
            className="btn btn--gold site-header__cta"
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon filled />
            WhatsApp
          </a>
          <button
            type="button"
            className="site-header__toggle"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        className={`mobile-menu${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="mobile-menu__nav" aria-label="Navegação mobile">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-menu__link"
              style={{ "--i": i } as CSSProperties}
              onClick={() => setOpen(false)}
            >
              <span className="mobile-menu__index">0{i + 1}</span>
              {item.label}
              <ArrowRight className="mobile-menu__arrow" />
            </a>
          ))}
        </nav>

        <div className="mobile-menu__footer">
          <a
            className="btn btn--gold btn--lg mobile-menu__wa"
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon filled />
            Falar no WhatsApp
          </a>
          <a className="mobile-menu__phone" href={`tel:+5573988227000`}>
            <PhoneIcon />
            {site.phoneLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
