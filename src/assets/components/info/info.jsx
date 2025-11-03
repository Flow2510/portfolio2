import InfoCard from '../infocard/infocard';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import './info.scss';

export default function Info(){
    const infos = [
        {
            "source": "/images/settings.svg",
            "iconAlt": "représentation d'un engrenage",
            "title": "Code Sémantique",
            "text": "Un code propre et bien structuré, pensé pour être facile à lire, maintenir et faire évoluer."
        },
        {
            "source": "/images/smartphone.svg",
            "iconAlt": "représentation d'un smartphone",
            "title": "Design Responsive",
            "text": "Un site qui s’adapte parfaitement à tous les écrans, avec une approche mobile-first pour une expérience fluide."
        },
        {
            "source": "/images/users.svg",
            "iconAlt": "représentation d'une personne",
            "title": "Accessibilité et UX",
            "text": "Des interfaces inclusives et intuitives, conçues pour que chaque utilisateur s’y retrouve facilement."
        },
        {
            "source": "/images/image.svg",
            "iconAlt": "représentation d'un dessin",
            "title": "Intégration",
            "text": "De la maquette au code, je veille à respecter chaque détail visuel et interaction pour un rendu fidèle et professionnel."
        }
    ]

    return(
        <section className='info'>
            <div className='info__wrapper'>
                <div className='info__content'>
                    <motion.h3 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                        className='info__content-title'>
                            Mon Approche du Développement Web
                    </motion.h3>
                    <motion.p 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                        className='info__content-text'>
                            Un aperçu de ma manière de concevoir le web
                    </motion.p>

                </div>
                <div className='info__cards'>
                    {infos.map((info) => (
                        <InfoCard 
                            key={info.title}
                            icon={info.source}
                            iconAlt={info.iconAlt}
                            title={info.title}
                            text={info.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}