import ScrollReveal from 'scrollreveal';

const isWeb = typeof window === 'undefined';
const sr = isWeb ? null : ScrollReveal();

export default sr;