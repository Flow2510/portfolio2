import Header from "../assets/components/header/header";
import './aboutpage.scss'

export default function AboutPage(){
    return(
        <>
            <Header />
            <main>
                <section className="aboutpage__content">
                    <h2 className="aboutpage__content-title">about</h2>
                    <p className="aboutpage__content-text">Bonjour, moi c’est Florian, ancien technicien en maintenance industrielle et ferroviaire, aujourd’hui en reconversion dans le développement web.</p>
                    <p className="aboutpage__content-text">Après plusieurs années à travailler sur des systèmes concrets et techniques, j’ai eu envie de me tourner vers un domaine plus créatif et évolutif : le web.</p>
                    <p className="aboutpage__content-text">J’ai donc entrepris une formation d’Intégrateur Web avec OpenClassrooms, où j’ai appris à construire des sites modernes et responsives avec HTML, CSS / SASS, et JavaScript.</p>
                    <p className="aboutpage__content-text">A l’aise avec React et les bases du JavaScript. Je continue à progresser sur les aspects plus logiques (fonctions, boucles, manipulation du DOM) tout en explorant des animations avancées en SCSS pour rendre mes interfaces plus vivantes et fluides.</p>
                    <p className="aboutpage__content-text">J'aborde désormais le back-end avec Node.js et Express, ce qui me permet de comprendre l’ensemble de la chaîne de développement.</p>
                    <p className="aboutpage__content-text">Je suis actuellement basé à Perpignan, et j’aspire à intégrer une équipe où je pourrais continuer à apprendre, partager et développer des projets concrets. Si les opportunités s’y prêtent, je suis également ouvert à poursuivre ma formation pour aller encore plus loin.</p>
                    <p>🔗 Vous pouvez retrouver mes projets et suivre mon évolution ici :</p>
                    <div className="aboutpage__link-wrapper">
                        <a className="aboutpage__link" href="http://" target="__blank">Mon GitHub</a>
                        <a className="aboutpage__link" href="http://" target="__blank">Mon LinkedIn</a>
                    </div>
                </section>
            </main>
        </>
    )
}