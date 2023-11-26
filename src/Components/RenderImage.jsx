import React from 'react';
import XImage from '../Assets/Img/X.png';
import OImage from '../Assets/Img/O.png';
import '../Style/RenderImage.css';

export const RenderImage = (value) => {
    return value === 'X' ? <img src={XImage} alt='X' className='xoImage' /> : (value === 'O' ? <img src={OImage} alt='O' className='xoImage'/> : null);
};