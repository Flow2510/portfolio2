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
            "text": "Je produis un code propre, structuré et commenté. C'est l'assurance d'une lecture et d'une maintenance faciles pour toute l'équipe, et d'une évolution sereine du produit."
        },
        {
            "source": "/images/smartphone.svg",
            "iconAlt": "représentation d'un smartphone",
            "title": "Design Responsive",
            "text": "J'adopte l'approche Mobile-First systématiquement. Le résultat : un site qui s'adapte parfaitement à tous les écrans et garantit une expérience utilisateur optimale quel que soit l'appareil."
        },
        {
            "source": "/images/users.svg",
            "iconAlt": "représentation d'une personne",
            "title": "Accessibilité et UX",
            "text": "Je crée des interfaces inclusives et intuitives (UX). Je m'assure que le site soit navigable par tous les utilisateurs (y compris ceux utilisant des outils d'assistance), augmentant ainsi votre portée et votre conformité."
        },
        {
            "source": "/images/image.svg",
            "iconAlt": "représentation d'un dessin",
            "title": "Intégration",
            "text": "Je garantis une intégration fidèle de la maquette au code. Chaque détail visuel et interaction est respecté pour un rendu professionnel, sans surprise entre le design et le produit final."
        }
    ]

    return(
        <section className='info'>
            <div className='info__wrapper'>
                <div className='info__content'>
                    <motion.h2 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
                        className='info__content-title'>
                            Mon Approche du Développement Web
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}
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