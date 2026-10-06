import { Reveal } from "../components/Reveal";
import { ArrowRight, HandshakeIcon, ShieldIcon, SparkIcon } from "../components/Icons";
import { site, waLink } from "../data/site";
import "./Team.css";

const values = [
  { icon: HandshakeIcon, label: "Atendimento próximo" },
  { icon: SparkIcon, label: "Presteza no dia a dia" },
  { icon: ShieldIcon, label: "Confiança de quem entende" },
];

export function Team() {
  return (
    <section className="team">
      <div className="container--wide team__inner">
        <Reveal className="team__visual" variant="blur">
          <figure className="team__photo">
            <img
              src="/gentequeatende.png"
              alt="Atendimento da equipe da Chico Despachante."
              loading="lazy"
            />
          </figure>
          <div className="team__quote" data-parallax="0.12">
            <span className="team__quote-mark" aria-hidden="true">“</span>
            <p>{site.tagline}</p>
          </div>
        </Reveal>

        <div className="team__content">
          <Reveal as="p" className="eyebrow">
            Gente que atende
          </Reveal>
          <Reveal as="h2" className="team__title" delay={80}>
            Experiência que atende pessoas.
          </Reveal>
          <Reveal as="p" className="lead team__lead" delay={140}>
            Por trás de cada processo existe atendimento de verdade. Aqui você
            encontra uma equipe acostumada a ouvir, orientar e acompanhar cada
            cliente com atenção.
          </Reveal>

          <ul className="team__values">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <Reveal as="li" key={value.label} className="team__value" delay={200 + i * 80}>
                  <span className="team__value-icon">
                    <Icon />
                  </span>
                  {value.label}
                </Reveal>
              );
            })}
          </ul>

          <Reveal delay={420}>
            <a
              className="team__cta"
              href={waLink("Olá! Quero falar com a equipe sobre um atendimento.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com nossa equipe
              <ArrowRight className="team__cta-arrow" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
