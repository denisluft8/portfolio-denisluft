import { useEffect, useState } from "react";

interface Options {
  typeSpeed?: number;
  deleteSpeed?: number;
  holdDelay?: number;
}

/**
 * Substitui a dependencia `react-typed` (sem manutencao e incompativel com
 * React 19) por ~40 linhas. Cicla pelas frases digitando e apagando.
 */
export function useTypewriter(phrases: string[], options: Options = {}) {
  const { typeSpeed = 70, deleteSpeed = 35, holdDelay = 2200 } = options;
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const key = phrases.join("|");

  // Troca de idioma reinicia a animacao em vez de digitar por cima do texto antigo
  useEffect(() => {
    setIndex(0);
    setText("");
    setIsDeleting(false);
  }, [key]);

  useEffect(() => {
    if (phrases.length === 0) return;
    const current = phrases[index % phrases.length];

    if (!isDeleting && text === current) {
      // Frase unica: digita e para, sem apagar num loop infinito
      if (phrases.length === 1) return;
      const hold = setTimeout(() => setIsDeleting(true), holdDelay);
      return () => clearTimeout(hold);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const tick = setTimeout(
      () =>
        setText((prev) =>
          isDeleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        ),
      isDeleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(tick);
  }, [text, isDeleting, index, phrases, typeSpeed, deleteSpeed, holdDelay]);

  return text;
}
