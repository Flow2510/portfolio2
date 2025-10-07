import { useParams } from "react-router-dom"
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
                    <Slider 
                        image={project.images}
                    />
                    <div className='project__content'>
                        <h2 className='project__content-title'>{project.title}</h2>
                        <p className='project__content-text'>{project.description}</p>
                    </div>
                    <div className='project__tag-wrapper'>
                        {project.tags.map((tag) => (
                            <span className='project__content-tag' key={tag}>{tag}</span>
                        ))}
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