import './slider.scss';
import projects from '../../../data/projects.json';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Slider() {
    const { projectId } = useParams();
    const otherProjects = projects.filter(p => p.id !== projectId);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [sliceIndex, setSliceIndex] = useState(0);

    const prevHandleClick = () => {
        setSliceIndex(prev => Math.max(prev - 3, 0));
    };

    const nextHandleClick = () => {
        setSliceIndex(prev => Math.min(prev + 3, otherProjects.length - 3));
    };

    return (
        <section className='slider'>
            <h2 className='slider__title'>Plus de projets</h2>
            <Link className='slider__link' to={`/${otherProjects[currentIndex].id}`}>
                <img
                    className='slider__link-image'
                    src={otherProjects[currentIndex].imageDesktop}
                    alt={otherProjects[currentIndex].altDesktop}
                />
            </Link>

            <div className='slider__dots'>
                <button
                    onClick={prevHandleClick}
                    className={`slider__dots-dot${sliceIndex === 0 ? " slider__dots-dot--hidden" : ""}`}
                >
                    <i className="fa-solid fa-chevron-left"></i>
                </button>

                {otherProjects.slice(sliceIndex, sliceIndex + 3).map((project, index) => (
                    <button
                        className='slider__dots-dot'
                        key={project.id}
                        onClick={() => setCurrentIndex(index + sliceIndex)}
                    >
                        <img src={project.image} alt={project.alt} />
                    </button>
                ))}

                <button
                    className={`slider__dots-dot${sliceIndex >= otherProjects.length - 3 ? " slider__dots-dot--hidden" : ""}`}
                    onClick={nextHandleClick}
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </section>
    );
}