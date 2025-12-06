import CallToAction from "../assets/components/calltoaction/calltoaction";
import Gallery from "../assets/components/gallery/gallery";
import Header from "../assets/components/header/header";
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import './projectpage.scss'

export default function ProjectsPage() {
    return(
            <>
                <Header />
                <main>
                    <section className="projectpage__hero"></section>
                    <motion.section 
                        className="projectpage__content"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <h2 className="projectpage__content-title">Mes Projets</h2>
                        <p className="projectpage__content-text">Bienvenue dans ma galerie de projets !</p>
                        <p className="projectpage__content-text">J’aime concevoir des interfaces claires, dynamiques et centrées sur l’expérience utilisateur. Vous pouvez également visiter mon GitHub pour explorer l’ensemble de mes réalisations et suivre mes expérimentations en développement.</p>
                        <p className="projectpage__content-text">Découvrez ici une sélection de mes projets réalisés en tant que développeur front-end:</p>
                    </motion.section>
                    <Gallery />
                    <CallToAction 
                        buttonText= " Contact"
                        title= "N’hésitez pas à me contacter pour toute question ou opportunité"
                        to= "/contact"
                    />
                </main>
            </>
        )
}