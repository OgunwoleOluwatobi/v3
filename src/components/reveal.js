import { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react';
import sr from '@utils/sr';
import { theme } from '@styles';
import { prefersReducedMotion } from './loader';

// True once the intro hands off, or straight away when it doesn't play. Defaults to true outside Layout.
export const RevealContext = createContext(true);
export const useRevealed = () => useContext(RevealContext);

const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

// Visible on the server, hidden before the first paint while the intro runs, then animated in
export const useEntrance = () => {
    const revealed = useRevealed();
    const [phase, setPhase] = useState('initial');

    useIsomorphicLayoutEffect(() => {
        if (!revealed) setPhase('hidden');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!revealed || phase !== 'hidden') return;
        const frame = requestAnimationFrame(() => setPhase('shown'));
        return () => cancelAnimationFrame(frame);
    }, [revealed, phase]);

    return phase;
};

export const entranceStyle = (phase, { delay = 0, y = 0, duration = 300 } = {}) => {
    if (phase === 'hidden') {
        return { opacity: 0.01, transform: `translateY(${y}px)`, transition: 'none' };
    }
    if (phase === 'shown') {
        // Also overrides the element's own transition, so reduced motion snaps into place
        return prefersReducedMotion() ? { transition: 'none' } : {
            transition: `opacity ${duration}ms ${theme.easing}, transform ${duration}ms ${theme.easing}`,
            transitionDelay: `${delay}ms`,
        };
    }
    return {};
};

// Waits for the reveal, so sections already in view don't animate behind the intro
export const useScrollReveal = register => {
    const revealed = useRevealed();
    useEffect(() => {
        if (revealed && sr) register(sr);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [revealed]);
};

// For class components
export const Entrance = ({ children }) => children(useEntrance());
