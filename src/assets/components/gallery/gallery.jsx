import './gallery.scss';
import projects from '../../../data/projects.json'
import ProjectCard from '../projectcard/projectcard';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

export default function Gallery({title}) {

    return(
        <section className='gallery'>
            <div className='gallery__content'>
                <motion.h2 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className='gallery__content-title'
                >
                    {title}
                </motion.h2>
            </div>
            <div className='gallery__wrapper'>
                {projects.map((project) => (
                    <Link className='gallery__wrapper-link' key={project.title} to={`/${project.id}`}> 
                        <ProjectCard 
                        source={project.image}
                        alt={project.alt}
                        image={project.image}
                        title={project.title}
                        text={project.description}
                        tags={project.tags}
                    />
                    </Link>
                ))}
            </div>
        </section>
    )
}