import { useEffect, useRef, useState } from "react";

interface ScrollState {
  /** Header some ao rolar para baixo e volta ao rolar para cima. */
  isHidden: boolean;
  /** True enquanto a pagina esta no topo — usado para deixar o header transparente. */
  isAtTop: boolean;
}

/**
 * A versao anterior guardava a posicao anterior em `useState` e listava
 * `prevScrollPos` nas dependencias do efeito, o que removia e registrava o
 * listener de scroll a cada frame de rolagem. Aqui a posicao vive num ref, o
 * listener e registrado uma unica vez e a leitura acontece dentro de
 * requestAnimationFrame.
 */
export function useScrollDirection(threshold = 8): ScrollState {
  const [state, setState] = useState<ScrollState>({
    isHidden: false,
    isAtTop: true,
  });
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      const y = Math.max(0, window.scrollY);
      const delta = y - lastY.current;

      if (Math.abs(delta) > threshold) {
        setState({ isHidden: delta > 0 && y > 80, isAtTop: y < 12 });
        lastY.current = y;
      } else {
        setState((prev) =>
          prev.isAtTop === y < 12 ? prev : { ...prev, isAtTop: y < 12 }
        );
      }
      ticking.current = false;
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(update);
    };

    lastY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return state;
}
