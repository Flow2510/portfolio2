import { useState } from 'react';
import './slider.scss';

export default function Slider({ image, alt, }) {
    const [index, setIndex] = useState(0)
    const nextHandleClick = () => {
        setIndex(prev => (prev + 1) % image.length);
    };

    const prevHandleClick = () => {
        setIndex(prev => (prev - 1 + image.length) % image.length);
    };

    return(
        <div className='slider'>
            <img className='slider__image' src={image[index]} alt={alt} />
            <div className='slider__dot'>
                <button className='slider__dot-left' onClick={prevHandleClick} ><img className='slider__dot-image' src="/public/images/arrow-left.svg" alt="left arrow"/></button>
                <button className='slider__dot-right' onClick={nextHandleClick} ><img className='slider__dot-image' src="/public/images/arrow-right.svg" alt="right arrow"/></button>
            </div>
        </div>
    )
}