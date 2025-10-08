import { Link, useParams } from "react-router-dom"
import projects from '../data/projects.json'
import Slider from '../assets/components/slider/slider'
import HeaderProject from '../assets/components/headerproject/headerproject'
import CallToAction from '../assets/components/calltoaction/calltoaction'
import './project.scss'
import Contact from "../assets/components/contact/contact"

export default function Project() {
    const { projectId } = useParams();
    const project = projects.find(p => p.id === projectId)

    return(
        <>
            <HeaderProject />
            <main>
                <div className='project'>
                    <div className="project__image-wrapper">
                        <img className="project__image-desktop" src={project.imageDesktop} alt="" />
                        <img className="project__image-mobile" src={project.imageMobile} alt="" />
                    </div>
                    <div className='project__content'>
                        <h2 className='project__content-title'>{project.title}</h2>
                        <p className='project__content-text' style={{ whiteSpace: 'pre-line' }}>{project.description}</p>
                        <div className='project__tag-wrapper'>
                            {project.tags.map((tag) => (
                                <span className='project__tag' key={tag}>{tag}</span>
                            ))}
                        </div>
                        <Link className="project__link" to={project.git} target="__blank"><i className="fa-brands fa-github"></i> Lien dépot Github</Link>
                    </div>
                </div>
                <CallToAction
                    title="Téléchargez mon CV"
                    buttonText="Télécharger"
                    to="/cv.pdf"
                    isFile
                />
                <Contact />
            </main>
        </>
    )
}