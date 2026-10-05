import { Reveal } from "../components/Reveal";
import { ArrowRight, HandshakeIcon, ShieldIcon, SparkIcon } from "../components/Icons";
import { waLink } from "../data/site";
import "./Transferencia.css";

const highlights = [
  {
    icon: HandshakeIcon,
    title: "Atendimento humano",
    text: "Você é acompanhado por pessoas que explicam cada etapa do processo.",
  },
  {
    icon: ShieldIcon,
    title: "Orientação clara",
    text: "Orientamos sobre o que é necessário para a transferência do seu veículo.",
  },
  {
    icon: SparkIcon,
    title: "Menos preocupação",
    text: "Cuidamos do encaminhamento para você não perder tempo com burocracia.",
  },
];

export function Transferencia() {
  return (
    <section className="transfer">
      <div className="container--wide transfer__inner">
        <div className="transfer__content">
          <Reveal as="p" className="eyebrow">
            Transferência de veículos
          </Reveal>
          <Reveal as="h2" className="transfer__title" delay={80}>
            Sua transferência resolvida sem surpresas.
          </Reveal>
          <Reveal as="p" className="lead transfer__lead" delay={140}>
            A Chico Despachante auxilia você em todo o processo de transferência do
            veículo, com acompanhamento próximo e orientação em cada etapa.
          </Reveal>

          <div className="transfer__highlights">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} className="transfer__highlight" delay={200 + i * 70}>
                  <span className="transfer__highlight-icon">
                    <Icon />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={440}>
            <a
              className="btn btn--blue btn--lg transfer__cta"
              href={waLink("Olá! Quero falar sobre transferência de veículo.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com a Chico
              <ArrowRight className="btn__arrow" />
            </a>
          </Reveal>
        </div>

        <Reveal className="transfer__visual" variant="right">
          <figure className="transfer__photo">
            <img
              src="/fotomulher2.png"
              alt="Atendimento da Chico Despachante no processo de transferência de veículo."
              loading="lazy"
            />
          </figure>

          <span className="transfer__seal" aria-hidden="true">
            Sem
            <br />
            surpresas
          </span>
        </Reveal>
      </div>
    </section>
  );
}
