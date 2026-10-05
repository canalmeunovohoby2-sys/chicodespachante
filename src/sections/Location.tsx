import { Reveal } from "../components/Reveal";
import { ArrowUpRight, MapPinIcon, PhoneIcon, WhatsAppIcon } from "../components/Icons";
import { site } from "../data/site";
import "./Location.css";

export function Location() {
  return (
    <section className="local" id="localizacao">
      <div className="container--wide local__inner">
        <div className="local__content">
          <Reveal as="p" className="eyebrow">
            Onde estamos
          </Reveal>
          <Reveal as="h2" className="local__title" delay={80}>
            Estamos em Teixeira de Freitas
          </Reveal>

          <Reveal className="local__card" delay={140}>
            <span className="local__card-icon">
              <MapPinIcon />
            </span>
            <div>
              <span className="local__card-label">Endereço</span>
              <strong>{site.address}</strong>
              <span className="local__card-city">
                {site.city} – {site.state}
              </span>
            </div>
          </Reveal>

          <Reveal className="local__alert" delay={180}>
            <PhoneIcon />
            <span>
              Prefere falar antes de vir? É só chamar no WhatsApp{" "}
              <strong>{site.phoneLabel}</strong>.
            </span>
          </Reveal>

          <Reveal className="local__actions" delay={230}>
            <a
              className="btn btn--gold"
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon filled />
              Chamar no WhatsApp
            </a>
            <a
              className="btn btn--ghost"
              href={site.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver rota
              <ArrowUpRight />
            </a>
          </Reveal>
        </div>

        <Reveal className="local__map" variant="right">
          <iframe
            title="Mapa da localização da Chico Despachante em Teixeira de Freitas"
            src={site.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <span className="local__map-frame" aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  );
}
