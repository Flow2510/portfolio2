import './slider.scss';
import projects from '../../../data/projects.json';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

export default function Slider({title}) {
    const { projectId } = useParams();
    const otherProjects = projects.filter(p => p.id !== projectId);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translate, setTranslate] = useState(0);
    const [galleryIndex, setGalleryIndex] = useState(0);
   const maxClick = Math.ceil(otherProjects.length / 3);

    const prevHandleClick = () => {
       setTranslate(prev => Math.max(prev - 249, 0));
       setGalleryIndex(prev => prev - 1)
    };

    const nextHandleClick = () => {
        if (galleryIndex < maxClick - 1) {
            setTranslate(prev => Math.min(prev + 249));
            setGalleryIndex(prev => prev + 1)
        }
    };

    return (
        <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className='slider'
        >
            <h2 className='slider__title'>{title}</h2>
            <p className='slider__subtitle'>{otherProjects[currentIndex].id}</p>
            <Link className='slider__link' to={`/${otherProjects[currentIndex].id}`}>
                <motion.img
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className='slider__link-image'
                    src={otherProjects[currentIndex].imageDesktop}
                    alt={otherProjects[currentIndex].altDesktop}
                />
            </Link>
            <div className='slider__dots-wrapper'>
                <button
                    onClick={prevHandleClick}
                    className={`slider__dots-arrow${galleryIndex === 0? " slider__dots-arrow--hidden" : ""}`}
                >
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <div className='slider__dots'>
                    {otherProjects.map((project, index) => (
                        <button
                            className='slider__dots-dot'
                            key={project.id}
                            onClick={() => setCurrentIndex(index)}
                            style={{ transform: `translateX(-${translate}px)` }}
                        >
                            <img src={project.image} alt={project.alt} />
                        </button>
                    ))}
                </div>
                <button
                    className={`slider__dots-arrow${galleryIndex === maxClick - 1? " slider__dots-arrow--hidden" : ""}`}
                    onClick={nextHandleClick}
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </motion.section>
    );
}