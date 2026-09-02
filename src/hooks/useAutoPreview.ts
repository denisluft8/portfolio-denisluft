import { useEffect, useState, type RefObject } from "react";

/**
 * No celular não existe hover, então o preview em vídeo nunca era acionado.
 * Este hook devolve `true` quando o card está de fato em tela num aparelho de
 * toque, para o vídeo tocar sozinho — com um atraso para não disparar em cards
 * que só passaram voando durante a rolagem.
 *
 * Não roda quando: o aparelho tem hover (aí o mouse manda), o visitante pediu
 * menos movimento, ou o navegador está em economia de dados — nesses casos o
 * card fica na imagem estática.
 */
export function useAutoPreview<T extends Element>(
  ref: RefObject<T | null>,
  { delay = 1000 } = {}
) {
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const semHover = window.matchMedia("(hover: none)").matches;
    const menosMovimento = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    // `saveData` só existe em alguns navegadores; ausente significa "não pediu"
    const economiaDeDados = Boolean(
      (navigator as { connection?: { saveData?: boolean } }).connection?.saveData
    );

    if (!semHover || menosMovimento || economiaDeDados) return;

    const node = ref.current;
    if (!node) return;

    let timer: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // espera o card assentar na tela antes de começar
          timer = setTimeout(() => setShouldPlay(true), delay);
        } else {
          if (timer) clearTimeout(timer);
          setShouldPlay(false);
        }
      },
      // exige boa parte do card visível: evita tocar o que está de passagem
      { threshold: 0.6 }
    );

    observer.observe(node);
    return () => {
      if (timer) clearTimeout(timer);
      observer.disconnect();
    };
  }, [ref, delay]);

  return shouldPlay;
}
