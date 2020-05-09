import React from 'react';
import { theme } from '../../styles';
const { colors } = theme;

const Range = () => (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 25 172">
        <g>
            <circle className="outer" cx="14" cy="14.5" r="10" fill="none" stroke={colors.dustyWhite} strokeMiterlimit="10" />
            <circle className="inner" cx="14" cy="14.5" r="6" stroke={colors.range} fill={colors.range} strokeMiterlimit="10" />
            <line className="line" x1="14" y1="24.5" x2="14" y2="166.5" fill="none" stroke={colors.dustyWhite} strokeMiterlimit="10" />
        </g>
    </svg>
);

export default Range;