import { useState } from "react";
import type { FormEvent } from "react";
import { Reveal } from "../components/Reveal";
import { ArrowRight, HandshakeIcon, ShieldIcon, WhatsAppIcon } from "../components/Icons";
import { site } from "../data/site";
import "./ContactForm.css";

const serviceOptions = [
  "Emplacamento 0 km",
  "Transferência de veículo",
  "Licenciamento",
  "Isenção para Táxi",
  "Isenção para PCD",
  "Outro",
];

type Feedback = { type: "success" | "error"; message: string } | null;

export function ContactForm() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [servico, setServico] = useState("");
  const [errors, setErrors] = useState<{ nome?: string; telefone?: string; servico?: string }>({});
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [sent, setSent] = useState(false);

  const validate = () => {
    const next: typeof errors = {};
    if (nome.trim().length < 2) next.nome = "Informe o seu nome.";
    const digits = telefone.replace(/\D/g, "");
    if (digits.length < 10) next.telefone = "Informe um telefone válido com DDD.";
    if (!servico) next.servico = "Selecione o serviço desejado.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);

    if (!validate()) {
      setFeedback({ type: "error", message: "Confira os campos destacados para continuar." });
      return;
    }

    const message =
      `Olá, Chico Despachante! Meu nome é ${nome.trim()}. ` +
      `Gostaria de atendimento sobre ${servico}. ` +
      `Meu telefone é ${telefone.trim()}.`;

    const url = `${site.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setSent(true);
    setFeedback({
      type: "success",
      message: "Tudo certo! Abrimos o WhatsApp com a sua mensagem pronta para enviar.",
    });
    window.setTimeout(() => setSent(false), 2600);
  };

  return (
    <section className="contact" id="fale-conosco">
      <div className="contact__glow" aria-hidden="true" />
      <div className="grid-lines contact__grid" aria-hidden="true" />

      <div className="container--wide contact__inner">
        <div className="contact__intro">
          <Reveal as="p" className="eyebrow">
            Atendimento
          </Reveal>
          <Reveal as="h2" className="contact__title" delay={80}>
            Fale com a Chico Despachante
          </Reveal>
          <Reveal as="p" className="lead contact__lead" delay={140}>
            Conte o que você precisa e nossa equipe entrará em contato para orientar
            você.
          </Reveal>

          <Reveal className="contact__points" delay={200}>
            <span className="contact__point">
              <ShieldIcon />
              Orientação sem complicação
            </span>
            <span className="contact__point">
              <HandshakeIcon />
              Atendimento próximo
            </span>
          </Reveal>

          <Reveal className="contact__direct" delay={260}>
            <span className="contact__direct-label">Prefere ir direto ao ponto?</span>
            <a
              className="contact__direct-link"
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon filled />
              Chamar no WhatsApp {site.phoneLabel}
            </a>
          </Reveal>
        </div>

        <Reveal className="contact__card" variant="blur" delay={120}>
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="lead-nome">Nome</label>
              <input
                id="lead-nome"
                name="nome"
                type="text"
                autoComplete="name"
                placeholder="Seu nome completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                aria-invalid={Boolean(errors.nome)}
                aria-describedby={errors.nome ? "err-nome" : undefined}
              />
              {errors.nome && (
                <span className="field__error" id="err-nome">
                  {errors.nome}
                </span>
              )}
            </div>

            <div className="field">
              <label htmlFor="lead-telefone">Telefone/WhatsApp</label>
              <input
                id="lead-telefone"
                name="telefone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="(73) 90000-0000"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                aria-invalid={Boolean(errors.telefone)}
                aria-describedby={errors.telefone ? "err-telefone" : undefined}
              />
              {errors.telefone && (
                <span className="field__error" id="err-telefone">
                  {errors.telefone}
                </span>
              )}
            </div>

            <div className="field">
              <label htmlFor="lead-servico">Serviço que deseja realizar</label>
              <div className="field__select">
                <select
                  id="lead-servico"
                  name="servico"
                  value={servico}
                  onChange={(e) => setServico(e.target.value)}
                  aria-invalid={Boolean(errors.servico)}
                  aria-describedby={errors.servico ? "err-servico" : undefined}
                >
                  <option value="" disabled>
                    Selecione o serviço
                  </option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              {errors.servico && (
                <span className="field__error" id="err-servico">
                  {errors.servico}
                </span>
              )}
            </div>

            <button
              type="submit"
              className={`btn btn--gold btn--lg contact__submit${sent ? " is-sent" : ""}`}
            >
              {sent ? (
                <>
                  <span className="contact__check" aria-hidden="true" />
                  Mensagem pronta!
                </>
              ) : (
                <>
                  <WhatsAppIcon filled />
                  Enviar pelo WhatsApp
                  <ArrowRight className="btn__arrow" />
                </>
              )}
            </button>

            <div className="contact__feedback" aria-live="polite">
              {feedback && (
                <span className={`contact__feedback-msg is-${feedback.type}`}>
                  {feedback.message}
                </span>
              )}
            </div>

            <p className="contact__privacy">
              Ao enviar, você será direcionado ao WhatsApp da Chico Despachante com a
              mensagem preenchida. Nenhum dado é armazenado neste site.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
