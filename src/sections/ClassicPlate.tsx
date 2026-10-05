import { Reveal } from "../components/Reveal";
import { ArrowRight, DocumentIcon } from "../components/Icons";
import { waLink } from "../data/site";
import "./ClassicPlate.css";

export function ClassicPlate() {
  return (
    <section className="plate" id="placa-preta">
      <div className="container plate__inner">
        <Reveal className="plate__visual" variant="scale">
          <div className="plate__tag" aria-hidden="true">
            <span className="plate__tag-flag">★</span>
            <span className="plate__tag-text">
              CHICO
              <br />
              DESPACHANTE
            </span>
          </div>
          <span className="plate__shadow" aria-hidden="true" />
        </Reveal>

        <div className="plate__content">
          <Reveal as="p" className="eyebrow eyebrow--light">
            Placa Preta
          </Reveal>
          <Reveal as="h2" className="plate__title" delay={80}>
            Seu veículo antigo está pronto para a Placa Preta?
          </Reveal>
          <Reveal as="p" className="plate__text" delay={140}>
            A Placa Preta é o processo voltado a veículos antigos que atendem aos
            critérios de coleção. A Chico Despachante orienta você sobre o caminho e
            auxilia no encaminhamento junto aos órgãos responsáveis.
          </Reveal>
          <Reveal className="plate__note" delay={190}>
            <DocumentIcon />
            <span>
              Mora com dúvidas sobre o processo? Fale com a gente e receba as
              orientações para o seu caso.
            </span>
          </Reveal>

          <Reveal delay={250}>
            <a
              className="btn btn--gold btn--lg plate__cta"
              href={waLink("Olá! Quero saber mais sobre o processo de Placa Preta.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Saiba mais
              <ArrowRight className="btn__arrow" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
