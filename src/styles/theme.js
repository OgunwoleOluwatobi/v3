import { hex2rgba } from '@utils';

const DARK_BG = '#14181E';
const ACCENT = '#4DC932';
const SHADOW = '#000000';
const KWITE = '#D3CDC6';
const BLACK = '#000000';

const theme = {
    colors: {
        darkBlue: DARK_BG,
        green: ACCENT,
        white: '#FFFFFF',
        greenButton: hex2rgba(ACCENT, 0.2),
        logoHover: hex2rgba(ACCENT, 0.3),
        shadowBlue: hex2rgba(SHADOW, 0.2),
        shadowGreen: hex2rgba(ACCENT, 0.3),
        range: hex2rgba(ACCENT, 0.7),
        shadowWhite: hex2rgba(KWITE, 0.2),
        shadowBlack: hex2rgba(BLACK, 0.5),
        dustyWhite: '#C0C0C0',
        hamblue: '#181D23',
    },

    fonts: {
        Calibre:
            'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
        SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
    },

    fontSizes: {
        xs: '12px',
        smish: '13px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        xxl: '22px',
        h3: '35px',
    },

    transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

    hamburgerWidth: 28,
    hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
    hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
    hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
    hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,

    navHeight: '100px',
    navScrollHeight: '70px',
    navDelay: 1000,
    loaderDelay: 2000
}

export default theme;