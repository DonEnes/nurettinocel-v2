import { useEffect, useRef, useState } from 'react';

export const useParallax = (speed: number = 0.5) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!elementRef.current) return;
            const scrolled = window.pageYOffset;
            setOffset(scrolled * speed);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return { ref: elementRef, style: { transform: `translateY(${offset}px)` } };
};
