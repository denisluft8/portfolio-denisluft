import { useState, type FormEvent } from "react";
import styled from "styled-components";
import gitIcon from "../assets/github-icon-1.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import { Reveal } from "../components/Reveal";
import {
  Card,
  Container,
  Eyebrow,
  PrimaryButton,
  SectionLead,
  SectionTitle,
} from "../components/ui/primitives";
import {
  EMAIL_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
} from "../data/contact";
import { useTranslation } from "../hooks/useTranslation";
import { theme } from "../styles/theme";

const Section = styled.section`
  padding-block: clamp(80px, 12vh, 140px);
  background:
    radial-gradient(70% 60% at 50% 100%, rgba(99, 32, 56, 0.16), transparent 70%),
    ${theme.color.surface};
  border-top: 1px solid ${theme.color.border};
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  gap: clamp(32px, 6vw, 72px);
  margin-top: ${theme.space(12)};
  align-items: start;

  ${theme.bp.md} {
    grid-template-columns: 1fr;
  }
`;

const Channels = styled.div`
  display: grid;
  gap: ${theme.space(3)};
`;

const Channel = styled.a`
  display: flex;
  align-items: center;
  gap: ${theme.space(4)};
  padding: ${theme.space(4)} ${theme.space(5)};
  border: 1px solid ${theme.color.border};
  border-radius: ${theme.radius.md};
  background: ${theme.color.surfaceRaised};
  color: ${theme.color.text};
  text-decoration: none;
  font-family: ${theme.font.mono};
  font-size: ${theme.size.sm};
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${theme.color.accent};
    transform: translateX(4px);
  }

  img,
  svg {
    width: 26px;
    height: 26px;
    flex: none;
  }

  span:last-child {
    margin-left: auto;
    color: ${theme.color.textFaint};
  }
`;

const Form = styled(Card).attrs({ as: "form" })`
  display: grid;
  gap: ${theme.space(5)};
  padding: ${theme.space(7)};
`;

const Field = styled.div`
  display: grid;
  gap: ${theme.space(2)};

  label {
    font-family: ${theme.font.mono};
    font-size: ${theme.size.xs};
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${theme.color.textMuted};
  }

  input,
  textarea {
    width: 100%;
    padding: ${theme.space(3)} ${theme.space(4)};
    border-radius: ${theme.radius.sm};
    border: 1px solid ${theme.color.border};
    background: rgba(5, 7, 12, 0.65);
    color: ${theme.color.text};
    font-size: ${theme.size.sm};
    transition: border-color 0.2s ease;
  }

  textarea {
    min-height: 140px;
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${theme.color.textFaint};
  }

  input:focus,
  textarea:focus {
    border-color: ${theme.color.accent};
  }

  &[data-invalid="true"] input,
  &[data-invalid="true"] textarea {
    border-color: ${theme.color.danger};
  }
`;

const FieldError = styled.p`
  font-size: ${theme.size.xs};
  color: ${theme.color.danger};
`;

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke={theme.color.accent}
    strokeWidth="1.7"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M3 6h18v12H3zM3 7l9 6 9-6" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="#25D366" width="22" height="22" aria-hidden="true">
    <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.86 9.86 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.13c-.25.69-1.44 1.32-1.98 1.36-.53.05-1.02.24-3.45-.72-2.9-1.14-4.73-4.1-4.87-4.29-.14-.19-1.16-1.54-1.16-2.94s.73-2.09 1-2.37c.26-.29.57-.36.76-.36h.55c.18 0 .41-.03.64.49.25.58.83 2 .9 2.14.07.15.12.32.02.5-.09.19-.14.3-.28.47l-.42.48c-.14.14-.28.29-.12.57.15.28.68 1.13 1.47 1.83 1.01.9 1.87 1.18 2.14 1.32.27.14.42.12.58-.07.16-.19.66-.77.84-1.04.18-.27.35-.22.59-.13.24.09 1.53.72 1.79.85.26.14.44.21.5.32.06.11.06.64-.19 1.33Z" />
  </svg>
);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (field: keyof typeof form) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const { [field]: _removed, ...rest } = prev;
      return rest;
    });
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = t.contact.errorRequired;
    // o retorno agora acontece no WhatsApp, então o contato alternativo é opcional
    if (form.email.trim() && form.email.includes("@") && !EMAIL_PATTERN.test(form.email.trim()))
      next.email = t.contact.errorEmail;
    if (!form.message.trim()) next.message = t.contact.errorRequired;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  /**
   * O formulário monta a mensagem e abre a conversa no WhatsApp.
   *
   * Antes ele enviava pelo EmailJS, mas o plano gratuito não oferece
   * restrição por domínio: as três credenciais ficam legíveis no JavaScript
   * publicado e qualquer pessoa poderia gastar a cota mensal da conta. Assim
   * não há credencial alguma no cliente — e nada para abusar.
   */
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    const texto = [
      `Olá, Dênis! Meu nome é ${form.name.trim()}.`,
      form.email.trim() ? `Contato: ${form.email.trim()}.` : "",
      form.message.trim(),
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Section id="contact">
      <Container>
        <Reveal>
          <Eyebrow>{t.contact.eyebrow}</Eyebrow>
          <SectionTitle>{t.contact.title}</SectionTitle>
          <SectionLead>{t.contact.subtitle}</SectionLead>
        </Reveal>

        <Layout>
          <Reveal>
            <Channels>
              <Channel
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                {t.contact.whatsapp}
                <span aria-hidden="true">↗</span>
              </Channel>
              <Channel
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="" aria-hidden="true" />
                {t.contact.linkedin}
                <span aria-hidden="true">↗</span>
              </Channel>
              <Channel
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gitIcon} alt="" aria-hidden="true" />
                {t.contact.github}
                <span aria-hidden="true">↗</span>
              </Channel>
              <Channel href={EMAIL_URL}>
                <MailIcon />
                {t.contact.email}
                <span aria-hidden="true">→</span>
              </Channel>
            </Channels>

          </Reveal>

          <Reveal delay={90}>
            <Form onSubmit={onSubmit} noValidate>
              <Field data-invalid={Boolean(errors.name)}>
                <label htmlFor="contact-name">{t.contact.nameLabel}</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder={t.contact.namePlaceholder}
                  value={form.name}
                  onChange={(e) => update("name")(e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "err-name" : undefined}
                />
                {errors.name && <FieldError id="err-name">{errors.name}</FieldError>}
              </Field>

              <Field data-invalid={Boolean(errors.email)}>
                <label htmlFor="contact-email">{t.contact.emailLabel}</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={t.contact.emailPlaceholder}
                  value={form.email}
                  onChange={(e) => update("email")(e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "err-email" : undefined}
                />
                {errors.email && (
                  <FieldError id="err-email">{errors.email}</FieldError>
                )}
              </Field>

              <Field data-invalid={Boolean(errors.message)}>
                <label htmlFor="contact-message">{t.contact.messageLabel}</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder={t.contact.messagePlaceholder}
                  value={form.message}
                  onChange={(e) => update("message")(e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "err-message" : undefined}
                />
                {errors.message && (
                  <FieldError id="err-message">{errors.message}</FieldError>
                )}
              </Field>

              <PrimaryButton type="submit">
                <WhatsAppIcon />
                {t.contact.send}
              </PrimaryButton>
            </Form>
          </Reveal>
        </Layout>
      </Container>
    </Section>
  );
};
