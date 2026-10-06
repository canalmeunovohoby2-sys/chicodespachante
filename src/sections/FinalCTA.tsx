import { Reveal } from "../components/Reveal";
import { WhatsAppIcon } from "../components/Icons";
import { site, waLink } from "../data/site";
import "./FinalCTA.css";

export function FinalCTA() {
  return (
    <section className="final">
      <div className="final__ring final__ring--a" aria-hidden="true" />
      <div className="final__ring final__ring--b" aria-hidden="true" />
      <div className="final__speed" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="container final__inner">
        <Reveal as="p" className="final__eyebrow">
          Chico Despachante
        </Reveal>
        <Reveal as="h2" className="final__title" variant="pop" delay={80}>
          Precisa resolver a documentação do seu veículo?
        </Reveal>
        <Reveal as="p" className="final__text" delay={140}>
          Fale com a nossa equipe e conte o que você precisa.
        </Reveal>
        <Reveal className="final__actions" delay={200}>
          <a
            className="btn btn--gold btn--lg final__btn"
            href={waLink("Olá! Preciso resolver a documentação do meu veículo.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon filled />
            Chamar no WhatsApp
          </a>
          <span className="final__phone">{site.phoneLabel}</span>
        </Reveal>
      </div>
    </section>
  );
}
