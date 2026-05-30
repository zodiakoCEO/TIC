import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

export default function useAnimeReveal(ref) {
  useEffect(() => {
    if (!ref?.current) return;

    const targets = ref.current.querySelectorAll('[data-anime]');
    if (!targets.length) return;

    const animation = anime({
      targets,
      opacity: [0, 1],
      translateY: [24, 0],
      scale: [0.98, 1],
      delay: anime.stagger(80),
      duration: 700,
      easing: 'easeOutQuad'
    });

    return () => animation.pause();
  }, [ref]);
}
