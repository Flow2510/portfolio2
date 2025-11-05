import Gallery from "../assets/components/gallery/gallery";
import Header from "../assets/components/header/header";
import './projectpage.scss'

export default function ProjectsPage() {
    return(
            <>
                <Header />
                <main>
                    <section className="projectpage__content">
                        <h2 className="projectpage__content-title">Mes Projets</h2>
                        <p className="projectpage__content-text">Bienvenue dans ma galerie de projets !</p>
                        <p className="projectpage__content-text">J’aime concevoir des interfaces claires, dynamiques et centrées sur l’expérience utilisateur. Vous pouvez également visiter mon GitHub pour explorer l’ensemble de mes réalisations et suivre mes expérimentations en développement.</p>
                        <p className="projectpage__content-text">Découvrez ici une sélection de mes projets réalisés en tant que développeur front-end:</p>
                    </section>
                    <Gallery />
                </main>
            </>
        )
}