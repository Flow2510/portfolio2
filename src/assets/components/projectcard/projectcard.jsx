import { useState } from 'react';
import './projectcard.scss';
import Slider from '../slider/slider';

export default function ProjectCard({ source, alt, image, title, text, tags }) {
    const [showModal, setShowModal] = useState(false)

    return(
       <>
            <button className='projectcard' onClick={() => {setShowModal(prev => !prev)}}>
                <img className='projectcard__image' src={source} alt={alt} />
                <div className='projectcard__overlay'>
                    <h2>{title}</h2>
                    <div className='projectcard__overlay-tags'>
                        {tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                </div>
            </button>
            {showModal && 
                <div className='modal'>
                    <button className='modal__button' onClick={()=>setShowModal(false)}>X</button>
                    <Slider 
                        image={image}
                    />
                    <div className='modal__content'>
                        <h2 className='modal__content-title'>{title}</h2>
                        <p className='modal__content-text'>{text}</p>
                    </div>
                    <div className='modal__tag-wrapper'>
                        {tags.map((tag) => (
                            <span className='modal__content-tag' key={tag}>{tag}</span>
                        ))}
                    </div>
                </div>
            }
       </>
    )
}