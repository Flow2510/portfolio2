import InfoCard from '../infocard/infocard';
import './info.scss';

export default function Info(){
    const infos = [
        {
            "source": "/public/images/settings.svg",
            "iconAlt": "alt",
            "title": "Code Sémantique",
            "text": "Un code propre et bien structuré, pensé pour être facile à lire, maintenir et faire évoluer."
        },
        {
            "source": "/public/images/smartphone.svg",
            "iconAlt": "alt",
            "title": "Design Responsive",
            "text": "Un site qui s’adapte parfaitement à tous les écrans, avec une approche mobile-first pour une expérience fluide."
        },
        {
            "source": "/public/images/users.svg",
            "iconAlt": "alt",
            "title": "Accessibilité et UX",
            "text": "Des interfaces inclusives et intuitives, conçues pour que chaque utilisateur s’y retrouve facilement."
        },
        {
            "source": "/public/images/image.svg",
            "iconAlt": "alt",
            "title": "Intégration",
            "text": "De la maquette au code, je veille à respecter chaque détail visuel et interaction pour un rendu fidèle et professionnel."
        }
    ]

    return(
        <section className='info'>
            <div className='info__wrapper'>
                <div className='info__content'>
                    <h3 className='info__content-title'>titre</h3>
                    <p className='info__content-subtitle'>Un aperçu de ma manière de concevoir le web</p>
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