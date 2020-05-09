import { keyframes } from 'styled-components';

export const keyFramesRight = keyframes`
    0%{
        left: 40px;
    }
    50%{
        z-index: 5;
    }
    100%{
        left: 30px;
        top: -6px;
        z-index: 5;
    }
`;
export const keyFramesLeft = keyframes`
    0%{
        left: -40px;
    }
    50%{
        z-index: 5;
    }
    100%{
        left: -30px;
        top: -6px;
        z-index: 5;
    }
`;
export const keyFramesTop = keyframes`
    0%{
        left: 0;
        top: -45px;
    }
    50%{
        z-index: 5;
    }
    100%{
        left: 0;
        top: -35px;
        z-index: 5;
    }
`;