import { nav, site } from "../data/site";
import { InstagramIcon, MapPinIcon, WhatsAppIcon } from "./Icons";
import { Logo } from "./Logo";
import "./Footer.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contato">
      <div className="footer__glow" aria-hidden="true" />
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo />
          <p className="footer__tagline">{site.tagline}</p>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <h3 className="footer__title">Contato</h3>
            <a className="footer__item" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon filled />
              <span>{site.phoneLabel}</span>
            </a>
            <span className="footer__item footer__item--static">
              <MapPinIcon />
              <span>{site.address}</span>
            </span>
            <a
              className="footer__item"
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
              <span>{site.instagramHandle}</span>
            </a>
          </div>

          <div className="footer__col">
            <h3 className="footer__title">Navegação</h3>
            {nav.map((item) => (
              <a key={item.href} className="footer__link" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="footer__col">
            <h3 className="footer__title">Atendimento</h3>
            <p className="footer__note">
              Fale com a nossa equipe e conte o que você precisa. Emplacamento,
              transferência, licenciamento e documentação de veículos.
            </p>
            <a
              className="btn btn--gold footer__cta"
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon filled />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {year} {site.name}. Todos os direitos reservados.
        </span>
        <span>{site.city} – {site.state}</span>
      </div>
    </footer>
  );
}
