import { Reveal } from "../components/Reveal";
import { ArrowRight, DocumentIcon, serviceIcons } from "../components/Icons";
import { services, waLink } from "../data/site";
import "./Services.css";

const intro = {
  title: "Documentação de veículos sem complicação.",
  text: "Da transferência ao licenciamento, cuidamos dos principais processos para você resolver sua documentação com mais praticidade e tranquilidade.",
};

export function Services() {
  return (
    <section className="services" id="servicos">
      <div className="container--wide">
        <header className="services__head">
          <Reveal as="p" className="eyebrow">
            O que fazemos
          </Reveal>
          <Reveal as="h2" className="services__title" delay={80}>
            Resolva a documentação do seu veículo com quem entende.
          </Reveal>
          <Reveal as="p" className="lead services__lead" delay={150}>
            Emplacamento, transferência, licenciamento e processos de isenção — com
            atendimento próximo e a experiência de mais de 45 anos.
          </Reveal>
        </header>

        <div className="services__grid">
          <Reveal as="article" className="service service--featured" variant="scale">
            <img
              className="service__bg"
              src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1100&q=75&auto=format&fit=crop"
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
            <div className="service__top">
              <span className="service__icon">
                <DocumentIcon />
              </span>
              <span className="service__index" aria-hidden="true">
                01
              </span>
            </div>
            <div className="service__body">
              <h3 className="service__title">{intro.title}</h3>
              <p className="service__text">{intro.text}</p>
            </div>
            <a
              className="service__cta"
              href={waLink("Olá! Quero falar com um especialista sobre documentação de veículos.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com um especialista
              <ArrowRight className="service__cta-arrow" />
            </a>
          </Reveal>

          {services.slice(1).map((service, i) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Reveal
                as="article"
                key={service.id}
                className="service"
                delay={i * 70}
                variant="up"
              >
                <div className="service__top">
                  <span className="service__icon">
                    <Icon />
                  </span>
                  <span className="service__index" aria-hidden="true">
                    {service.index}
                  </span>
                </div>
                <div className="service__body">
                  <h3 className="service__title">{service.title}</h3>
                  <p className="service__text">{service.description}</p>
                </div>
                <a
                  className="service__cta"
                  href={waLink(`Olá! Quero falar sobre: ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {service.cta}
                  <ArrowRight className="service__cta-arrow" />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
