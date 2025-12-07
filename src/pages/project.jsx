import { Link, useParams } from "react-router-dom"
import projects from '../data/projects.json'
import CallToAction from '../assets/components/calltoaction/calltoaction'
import './project.scss'
import Contact from "../assets/components/contact/contact"
import Slider from "../assets/components/slider/slider"
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import Header from "../assets/components/header/header"

export default function Project() {
    const { projectId } = useParams();
    const project = projects.find(p => p.id === projectId)

    return(
        <>
            <Header />
            <main>
                <div className='project'>
                    <motion.h2 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                        className='project__title'
                    >
                        {project.title}
                    </motion.h2>
                    <div className="project__image-wrapper">
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.4 }}
                            className="project__image-desktop" 
                            src={project.imageDesktop} 
                            alt={project.alt} 
                        />
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.4 }}
                            className="project__image-mobile" 
                            src={project.imageMobile} 
                            alt={project.alt} 
                        />
                    </div>
                    <div className='project__content'>
                        <motion.p 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.4 }}  
                            className='project__content-description' 
                            style={{ whiteSpace: 'pre-line' }}
                        >
                            {project.description}
                        </motion.p>
                        <div className="project__objectifs">
                            <motion.h3
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.4 }}
                            >
                                Objectifs :
                            </motion.h3>
                            <ul>
                                {project.objectifs.map((obj, index) => (
                                    <motion.li 
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        viewport={{ once: true, amount: 0.4 }}  
                                        className='project__objectifs-objectif'
                                        key={obj + index}
                                    >
                                        {obj}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <div className='project__stacks'>
                            <h3 className="project__stacks-title">Technologies :</h3>
                            <div className="project__stacks-wrapper">
                                <p><b>Languages : </b></p>
                                <p>{project.stacks.langages}</p>
                            </div>
                            <div className="project__stacks-wrapper">
                                <p><b>Librairies : </b></p>
                                <p>{project.stacks.libraries}</p>
                            </div>
                            {project.stacks.apis &&
                                <div className="project__stacks-wrapper">
                                    <p><b>API : </b></p>
                                    <p>{project.stacks.apis}</p>
                                </div>
                            }
                            <div className="project__stacks-wrapper">
                                <p><b>Autres : </b></p>
                                <p>{project.stacks.other}</p>
                            </div>
                        </div>
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.4 }}  
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
                   title="Autres Projets"
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