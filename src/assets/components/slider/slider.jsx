import { useState } from 'react';
import './slider.scss';

export default function Slider({ image, alt, }) {
    const [showModal, setShowModal] = useState(false);
    const [index, setIndex] = useState(0)
    const nextHandleClick = () => {
        setIndex(prev => (prev + 1) % image.length);
    };

    const prevHandleClick = () => {
        setIndex(prev => (prev - 1 + image.length) % image.length);
    };
    const modalHandleClick = () => {
        setShowModal(prev => !prev);
    }

    return(
        <div className='slider'>
            <button className='slider__button' onClick={modalHandleClick}>
                <img className='slider__image' src={image[index]} alt={alt} />
                {showModal && 
                    <div className='slider__modal'>
                        <img className='slider__modal-image' src={image[index]} alt={alt} />
                    </div>
                }
            </button>
            <div className='slider__dot'>
                <button className='slider__dot-left' onClick={prevHandleClick} ><img className='slider__dot-image' src="/public/images/arrow-left.svg" alt="left arrow"/></button>
                <button className='slider__dot-right' onClick={nextHandleClick} ><img className='slider__dot-image' src="/public/images/arrow-right.svg" alt="right arrow"/></button>
            </div>
        </div>
    )
}