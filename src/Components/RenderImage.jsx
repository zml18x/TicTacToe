import React from 'react';
import XImage from '../Img/X.png';
import OImage from '../Img/O.png';

export const RenderImage = (value) => {
    return value === 'X' ? <img src={XImage} alt='X' /> : (value === 'O' ? <img src={OImage} alt='O' /> : null);
};