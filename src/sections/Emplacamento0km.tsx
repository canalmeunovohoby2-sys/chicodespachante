import { Reveal } from "../components/Reveal";
import { CarIcon, WhatsAppIcon } from "../components/Icons";
import { waLink } from "../data/site";
import "./Emplacamento0km.css";

const points = [
  "Emplacamento do veículo novo",
  "Documentação necessária em ordem",
  "Acompanhamento do processo",
];

export function Emplacamento0km() {
  return (
    <section className="zero">
      <div className="zero__stripes" aria-hidden="true" />
      <div className="container--wide zero__inner">
        <Reveal className="zero__visual" variant="left">
          <div className="zero__frame">
            <img
              src="/carronovo.png"
              alt="Veículos prontos para o processo de emplacamento e documentação."
              loading="lazy"
            />
            <span className="zero__frame-tint" aria-hidden="true" />
          </div>
          <span className="zero__badge" aria-hidden="true">
            <CarIcon />
            0 km
          </span>
          <span className="zero__corner zero__corner--tl" aria-hidden="true" />
          <span className="zero__corner zero__corner--br" aria-hidden="true" />
        </Reveal>

        <div className="zero__content">
          <Reveal as="p" className="eyebrow eyebrow--light">
            Emplacamento 0 km
          </Reveal>
          <Reveal as="h2" className="zero__title" delay={90}>
            Comprou um carro <span className="gold-text">0 km</span>?
          </Reveal>
          <Reveal as="p" className="zero__text" delay={150}>
            Deixe a burocracia com a gente e aproveite seu carro novo com mais
            tranquilidade.
          </Reveal>

          <ul className="zero__list">
            {points.map((point, i) => (
              <Reveal as="li" key={point} delay={200 + i * 70}>
                <span className="zero__tick" aria-hidden="true" />
                {point}
              </Reveal>
            ))}
          </ul>

          <Reveal delay={420}>
            <a
              className="btn btn--gold btn--lg zero__cta"
              href={waLink("Olá! Quero atendimento para emplacamento de veículo 0 km.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon filled />
              Quero atendimento
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
