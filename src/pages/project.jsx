import { Link, useParams } from "react-router-dom"
import projects from '../data/projects.json'
import HeaderProject from '../assets/components/headerproject/headerproject'
import CallToAction from '../assets/components/calltoaction/calltoaction'
import './project.scss'
import Contact from "../assets/components/contact/contact"
import Slider from "../assets/components/slider/slider"
import { motion } from "motion/react"

export default function Project() {
    const { projectId } = useParams();
    const project = projects.find(p => p.id === projectId)

    return(
        <>
            <HeaderProject />
            <main>
                <div className='project'>
                    <div className="project__image-wrapper">
                        <img className="project__image-desktop" src={project.imageDesktop} alt={project.alt} />
                        <img className="project__image-mobile" src={project.imageMobile} alt={project.alt} />
                    </div>
                    <div className='project__content'>
                        <motion.h2 
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.5 }}  
                            className='project__content-title'
                        >
                            {project.title}
                        </motion.h2>
                        <motion.p 
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.5 }}  
                            className='project__content-text' 
                            style={{ whiteSpace: 'pre-line' }}
                        >
                            {project.description}
                        </motion.p>
                        <div className='project__tag-wrapper'>
                            {project.tags.map((tag) => (
                                <motion.span 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.5 }}  
                                    className='project__tag' 
                                    key={tag}
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                        <motion.div 
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.5 }}  
                            className="project__link-wrapper"
                        >
                            <Link className="project__link" to={project.git} target="__blank"><i className="fa-brands fa-github"></i> Lien dépot Github</Link>
                            {project.page && 
                                <Link className="project__link" to={project.page} target="__blank"><i className="fa-solid fa-link"></i> Lien vers le site</Link>
                            }
                        </motion.div>
                    </div>
                </div>
                <CallToAction
                    to="contact"
                    title="Discutons d’une opportunité"
                    buttonText="Me Contacter"
                />
                <Slider 
                   
                />
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