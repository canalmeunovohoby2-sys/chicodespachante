import { Reveal } from "../components/Reveal";
import { ArrowRight, WhatsAppIcon } from "../components/Icons";
import { site, steps, waLink } from "../data/site";
import "./HowItWorks.css";

export function HowItWorks() {
  return (
    <section className="how" id="como-funciona">
      <div className="grid-lines how__grid" aria-hidden="true" />
      <div className="container how__inner">
        <header className="how__head">
          <Reveal as="p" className="eyebrow eyebrow--light eyebrow--center">
            Como funciona
          </Reveal>
          <Reveal as="h2" className="how__title section-title--center" delay={80}>
            Simples do começo ao fim.
          </Reveal>
          <Reveal as="p" className="how__lead" delay={140}>
            Do primeiro contato ao encaminhamento da sua documentação, você sabe
            exatamente o que acontece em cada etapa.
          </Reveal>
        </header>

        <ol className="how__steps">
          {steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.number}
              className="how__step"
              delay={i * 110}
            >
              <span className="how__step-number" aria-hidden="true">
                {step.number}
              </span>
              <h3 className="how__step-title">{step.title}</h3>
              <p className="how__step-text">{step.description}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="how__cta-wrap" delay={200}>
          <a
            className="btn btn--gold btn--lg"
            href={waLink("Olá! Quero dar início ao meu atendimento.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon filled />
            Começar agora
            <ArrowRight className="btn__arrow" />
          </a>
          <span className="how__cta-note">
            Atendimento pelo WhatsApp {site.phoneLabel}
          </span>
        </Reveal>
      </div>
    </section>
  );
}
