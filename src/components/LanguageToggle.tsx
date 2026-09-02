import styled from "styled-components";
import { useTranslation } from "../hooks/useTranslation";
import { theme } from "../styles/theme";
import type { Language } from "../i18n/LanguageContext";

const Group = styled.div`
  display: inline-flex;
  border: 1px solid ${theme.color.borderStrong};
  border-radius: ${theme.radius.pill};
  padding: 2px;
  background: rgba(5, 7, 12, 0.6);
`;

const Option = styled.button<{ $active: boolean }>`
  border: none;
  cursor: pointer;
  padding: 4px 12px;
  border-radius: ${theme.radius.pill};
  font-family: ${theme.font.mono};
  font-size: ${theme.size.xs};
  font-weight: 700;
  letter-spacing: 0.06em;
  background: ${(p) => (p.$active ? theme.color.brand : "transparent")};
  color: ${(p) => (p.$active ? "#fff" : theme.color.textMuted)};
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    color: ${(p) => (p.$active ? "#fff" : theme.color.text)};
  }
`;

const OPTIONS: { value: Language; label: string }[] = [
  { value: "pt", label: "PT" },
  { value: "en", label: "EN" },
];

export const LanguageToggle = () => {
  const { language, setLanguage, t } = useTranslation();

  return (
    <Group role="group" aria-label={t.nav.langLabel}>
      {OPTIONS.map(({ value, label }) => (
        <Option
          key={value}
          type="button"
          lang={value}
          $active={language === value}
          aria-pressed={language === value}
          onClick={() => setLanguage(value)}
        >
          {label}
        </Option>
      ))}
    </Group>
  );
};
