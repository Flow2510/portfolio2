import { useState } from 'react';
import './projectcard.scss';

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
                <button className='modal' onClick={()=>setShowModal(false)}>
                    <img className='modal__image' src={image} alt={alt} />
                    <div className='modal__content'>
                        <h2>{title}</h2>
                        <p>{text}</p>
                        {tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                </button>
            }
       </>
    )
}