import CallToAction from "../assets/components/calltoaction/calltoaction";
import Header from "../assets/components/header/header";
import Skills from "../assets/components/skills/skills";
import Slider from "../assets/components/slider/slider";
import './aboutpage.scss'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

export default function AboutPage(){
    return(
        <>
            <Header />
            <main>
                <section className="aboutpage__hero"></section>
                <section className="aboutpage__content">
                    <motion.h2 
                        className="aboutpage__content-title"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        À propos de moi
                    </motion.h2>
                    <motion.img 
                        className="aboutpage__content-image"                     
                        src="/images/worker.webp" alt="un homme travaillant sur son ordinateur devant un bureau" 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }} 
                    />
                    <motion.p 
                        className="aboutpage__content-text"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }} 
                    > 
                        Bonjour, je m’appelle Florian. Passionné d’informatique et de technologies depuis mon enfance, j’ai commencé mon parcours professionnel dans la maintenance industrielle et ferroviaire, avant de me tourner vers la maintenance informatique.
                    </motion.p>
                    <motion.p 
                        className="aboutpage__content-text"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }} 
                    >                        
                        Depuis juin 2025, je me forme au développement web avec OpenClassrooms, où j’apprends à construire des sites modernes et responsives avec HTML, CSS / SASS et JavaScript.
                    </motion.p>
                    <motion.p 
                        className="aboutpage__content-text"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }} 
                    >                        
                        Je suis particulièrement à l’aise avec React et j’explore régulièrement des aspects plus avancés du JavaScript et des animations en SCSS pour rendre mes interfaces interactives et fluides.
                    </motion.p>
                    <motion.p 
                        className="aboutpage__content-text"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }} 
                    >                        
                        J’ai également commencé à me familiariser avec le back-end grâce à Node.js et Express, ce qui me permet de comprendre l’ensemble de la chaîne de développement.
                    </motion.p>
                    <motion.p 
                        className="aboutpage__content-text"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }} 
                    >                        
                        Curieux et motivé, je continue à apprendre chaque jour pour améliorer mes projets et relever de nouveaux défis dans le développement web.
                    </motion.p>
                    <Skills />
                    <motion.div 
                        className="aboutpage__link-wrapper"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }} 
                    >
                        <p>Vous pouvez retrouver mes projets et suivre mon évolution ici :</p>
                        <a className="aboutpage__link" href="https://github.com/Flow2510?tab=repositories" target="__blank"><i className="fa-brands fa-github"></i>Mon GitHub</a>
                        <a className="aboutpage__link" href="https://www.linkedin.com/in/florian-sendra-3270961a1/" target="__blank"><i className="fa-brands fa-square-linkedin"></i>Mon LinkedIn</a>
                    </motion.div>
                </section>
                <CallToAction
                    title="Téléchargez mon CV"
                    buttonText="Télécharger"
                    to="/cv.pdf"
                    isFile
                />
                <Slider 
                    title="Projets"
                />
            </main>
        </>
    )
}