import CallToAction from "../assets/components/calltoaction/calltoaction";
import Header from "../assets/components/header/header";
import Skills from "../assets/components/skills/skills";
import './aboutpage.scss'

export default function AboutPage(){
    return(
        <>
            <Header />
            <main>
                <section className="aboutpage__hero"></section>
                <section className="aboutpage__content">
                    <h2 className="aboutpage__content-title">À propos de moi</h2>
                    <img className="aboutpage__content-image" src="/images/worker.webp" alt="un homme travaillant sur son ordinateur devant un bureau" />
                    <p className="aboutpage__content-text">
                    Bonjour, je m’appelle Florian. Passionné d’informatique et de technologies depuis mon enfance, j’ai commencé mon parcours professionnel dans la maintenance industrielle et ferroviaire, avant de me tourner vers la maintenance informatique.
                    </p>
                    <p className="aboutpage__content-text">
                    Depuis juin 2025, je me forme au développement web avec OpenClassrooms, où j’apprends à construire des sites modernes et responsives avec HTML, CSS / SASS et JavaScript.
                    </p>
                    <p className="aboutpage__content-text">
                    Je suis particulièrement à l’aise avec React et j’explore régulièrement des aspects plus avancés du JavaScript et des animations en SCSS pour rendre mes interfaces interactives et fluides.
                    </p>
                    <p className="aboutpage__content-text">
                    J’ai également commencé à me familiariser avec le back-end grâce à Node.js et Express, ce qui me permet de comprendre l’ensemble de la chaîne de développement.
                    </p>
                    <p className="aboutpage__content-text">
                    Curieux et motivé, je continue à apprendre chaque jour pour améliorer mes projets et relever de nouveaux défis dans le développement web.
                    </p>
                    <Skills />
                    <div className="aboutpage__link-wrapper">
                        <p>🔗 Vous pouvez retrouver mes projets et suivre mon évolution ici :</p>
                        <a className="aboutpage__link" href="https://github.com/Flow2510?tab=repositories" target="__blank"><i className="fa-brands fa-github"></i>Mon GitHub</a>
                        <a className="aboutpage__link" href="https://www.linkedin.com/in/florian-sendra-3270961a1/" target="__blank"><i className="fa-brands fa-square-linkedin"></i>Mon LinkedIn</a>
                    </div>
                </section>
                <CallToAction 
                    buttonText= "Projets"
                    title= "Découvrez mes projets récents"
                    to= "/projects"
                />
            </main>
        </>
    )
}