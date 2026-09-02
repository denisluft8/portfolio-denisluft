import styled from "styled-components";
import { Container } from "../components/ui/primitives";
import { useTranslation } from "../hooks/useTranslation";
import { theme } from "../styles/theme";

const Wrapper = styled.footer`
  border-top: 1px solid ${theme.color.border};
  padding-block: ${theme.space(8)};
`;

/* Com só o crédito no rodapé, centralizar lê melhor que o espaço entre duas
   pontas que o `space-between` deixava. */
const Inner = styled(Container)`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: ${theme.font.mono};
  font-size: ${theme.size.xs};
  color: ${theme.color.textFaint};
`;

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Inner>
        <p>
          © {new Date().getFullYear()} Dênis Augusto Luft. {t.footer.rights}
        </p>
      </Inner>
    </Wrapper>
  );
};
