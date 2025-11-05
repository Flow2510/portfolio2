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
                        <p className="projectpage__content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sapiente voluptatibus. Eveniet placeat, sapiente quo magnam ipsa aspernatur quis sequi, maiores, reprehenderit aut voluptatum iusto fugiat consectetur nesciunt corporis eius!</p>
                        <p className="projectpage__content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sapiente voluptatibus. Eveniet placeat, sapiente quo magnam ipsa aspernatur quis sequi, maiores, reprehenderit aut voluptatum iusto fugiat consectetur nesciunt corporis eius!</p>
                    </section>
                    <Gallery />
                </main>
            </>
        )
}