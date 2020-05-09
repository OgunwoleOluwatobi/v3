import gsap from 'gsap';

export const fadeIn = element => {
    gsap.to(element, 1, {
        opacity: 1,
        y: -60,
        ease: 'power4.out',
        stagger: {
            amount: .3
        }
    });
};

export const fadeOut = element => {
    gsap.to(element, 1, {
        opacity: 0,
        y: -20,
        ease: 'power4.out',
    });
};

export const fadeOutDown = element => {
    gsap.to(element, 1, {
        opacity: 0,
        y: 20,
        ease: 'power4.out',
    });
};