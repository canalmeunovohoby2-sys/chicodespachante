import { Reveal } from "../components/Reveal";
import { HandshakeIcon, MapPinIcon, ShieldIcon } from "../components/Icons";
import { site } from "../data/site";
import "./Experience45.css";

const pillars = [
  {
    icon: ShieldIcon,
    title: "Experiência de verdade",
    text: "Mais de quatro décadas de atuação e conhecimento no segmento de documentação de veículos.",
  },
  {
    icon: HandshakeIcon,
    title: "Atendimento próximo",
    text: "Atendimento humano, claro e próximo para ajudar o cliente a entender e resolver o que precisa.",
  },
  {
    icon: MapPinIcon,
    title: "Presença local",
    text: "Uma empresa presente em Teixeira de Freitas e conectada à comunidade local.",
  },
];

export function Experience45() {
  return (
    <section className="exp" id="sobre">
      <div className="container exp__inner">
        <header className="exp__head">
          <Reveal as="p" className="eyebrow">
            Sobre a empresa
          </Reveal>
          <Reveal as="h2" className="exp__title" delay={80}>
            Tradição que atende
          </Reveal>
        </header>

        <div className="exp__showcase">
          <Reveal className="exp__highlight" variant="left">
            <div className="exp__highlight-top">
              <span className="exp__number" aria-hidden="true">
                45<span className="exp__number-plus">+</span>
              </span>
              <span className="exp__number-label">
                Anos de
                <br />
                experiência
              </span>
            </div>

            <p className="exp__phrase">{site.tagline}</p>
            <p className="exp__sub">
              Uma história construída no dia a dia, ajudando pessoas a resolver a
              documentação dos seus veículos com tranquilidade.
            </p>
          </Reveal>

          <div className="exp__cards">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Reveal
                  key={pillar.title}
                  className="exp__card"
                  variant="right"
                  delay={120 + i * 90}
                >
                  <span className="exp__card-icon">
                    <Icon />
                  </span>
                  <div className="exp__card-body">
                    <h3 className="exp__card-title">{pillar.title}</h3>
                    <p className="exp__card-text">{pillar.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
