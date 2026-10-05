import { Reveal } from "../components/Reveal";
import { MapPinIcon } from "../components/Icons";
import "./Community.css";

export function Community() {
  return (
    <section className="community">
      <div className="container--wide community__inner">
        <div className="community__content">
          <Reveal as="p" className="eyebrow eyebrow--light">
            Parte da comunidade
          </Reveal>
          <Reveal as="h2" className="community__title" delay={80}>
            Presença que vai além do atendimento.
          </Reveal>
          <Reveal as="p" className="community__text" delay={140}>
            A Chico Despachante faz parte da vida da região. Apoiamos iniciativas e
            eventos locais, porque acreditamos que estar perto também é uma forma de
            atender bem.
          </Reveal>

          <Reveal className="community__event" delay={200}>
            <span className="community__event-icon">
              <MapPinIcon />
            </span>
            <div className="community__event-body">
              <span className="community__event-tag">Apoio local</span>
              <strong>1º Cicloturismo Guaratiba</strong>
              <span className="community__event-place">Prado – Bahia</span>
            </div>
          </Reveal>
        </div>

        <Reveal className="community__visual" variant="scale">
          <figure className="community__photo">
            <img
              src="/cicloturismo.png"
              alt="1º Cicloturismo Guaratiba, em Prado – Bahia, evento apoiado pela Chico Despachante."
              loading="lazy"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
