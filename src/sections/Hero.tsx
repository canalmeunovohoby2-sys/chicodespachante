import { Reveal } from "../components/Reveal";
import { ArrowRight, MapPinIcon, ShieldIcon, WhatsAppIcon } from "../components/Icons";
import { site } from "../data/site";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg" aria-hidden="true" />
      <div className="grid-lines hero__grid" aria-hidden="true" />
      <div className="hero__glow hero__glow--a" aria-hidden="true" />
      <div className="hero__glow hero__glow--b" aria-hidden="true" />
      <div className="hero__speedlines" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="container--wide hero__inner">
        <div className="hero__content">
          <Reveal as="p" className="hero__eyebrow">
            Despachante de trânsito <b aria-hidden="true">•</b> Teixeira de Freitas – BA
          </Reveal>

          <Reveal as="h1" className="hero__title" delay={90}>
            Há mais de 45 anos <span className="hero__title-accent">facilitando a sua vida</span> no trânsito.
          </Reveal>

          <Reveal as="p" className="hero__lead" delay={170}>
            Emplacamento, transferência, licenciamento e documentação de veículos com
            atendimento próximo, experiência e agilidade.
          </Reveal>

          <Reveal className="hero__ctas" delay={240}>
            <a
              className="btn btn--gold btn--lg"
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon filled />
              Falar com um especialista
            </a>
            <a className="btn btn--ghost-light btn--lg" href="#servicos">
              Conhecer nossos serviços
              <ArrowRight className="btn__arrow" />
            </a>
          </Reveal>

          <Reveal className="hero__meta" delay={320}>
            <span className="hero__chip">
              <ShieldIcon />
              Presteza e agilidade
            </span>
            <span className="hero__chip">
              <MapPinIcon />
              Atendimento local
            </span>
          </Reveal>
        </div>

        <Reveal className="hero__visual" delay={200} variant="scale">
          <div className="hero__compose">
            <figure className="hero__photo" data-parallax="0.16">
              <img
                src="/fotoloja.jpeg"
                alt="Frente da loja da Chico Despachante em Teixeira de Freitas – BA."
                width={1280}
                height={960}
                loading="eager"
              />
              <span className="hero__photo-overlay" aria-hidden="true" />
            </figure>

            <div className="hero__plate" aria-hidden="true">
              <span className="hero__plate-tag">BR</span>
              <span className="hero__plate-text">CHICO DESPACHANTE</span>
            </div>
          </div>

          <div className="hero__seal">
            <span className="hero__seal-number">45+</span>
            <span className="hero__seal-text">
              anos de
              <br />
              experiência
            </span>
          </div>
        </Reveal>
      </div>

      <a className="hero__scroll" href="#sobre" aria-label="Rolar para a próxima seção">
        <span className="hero__scroll-track">
          <span className="hero__scroll-dot" />
        </span>
        Role para descobrir
      </a>
    </section>
  );
}
