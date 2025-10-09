import './about.scss';

export default function About() {
    return(
        <section className="about" id="about">
            <div className="about__content">
                <h1 className="about__content-title">Développeur Web Junior</h1>
                <p className="about__content-text">
                    Salut, je m’appelle Florian et je suis développeur web junior en plein apprentissage Full-Stack JavaScript. 
                    Je suis actuellement sur la formation d'intégrateur Web d'OpenClassrooms, où je crée des sites et applications web performants et accessibles. 
                </p>
                <p className="about__content-text">
                    J’ai déjà réalisé plusieurs projets concrets, allant de sites vitrines à des applications interactives, et je mets un point d’honneur à produire un code propre, efficace et maintenable.
                </p>
                <p  className="about__content-text">
                    Passionné par le développement et l’expérience utilisateur, je suis toujours à l’affût de nouvelles technologies et de bonnes pratiques pour améliorer mes projets.
                    Mon objectif : transformer ma passion du code en une première expérience professionnelle.
                </p>
            </div>
        </section>
    )
}