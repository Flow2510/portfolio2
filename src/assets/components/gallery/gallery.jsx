import './gallery.scss';
import projects from '../../../data/projects.json'
import ProjectCard from '../projectcard/projectcard';
import { Link } from 'react-router-dom';

export default function Gallery() {

    return(
        <section className='gallery'>
            <div className='gallery__content'>
                <h3 className='gallery__content-title'>Mes Projets</h3>
            </div>
            <div className='gallery__wrapper'>
                {projects.map((project) => (
                    <Link key={project.title} to={`/${project.id}`}> 
                        <ProjectCard 
                        source={project.images[0]}
                        alt={project.alt}
                        image={project.images}
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