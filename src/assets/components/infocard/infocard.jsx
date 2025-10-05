import './infocard.scss';

export default function InfoCard({ icon, iconAlt, title, text }){
    return(
        <article className='infocard'>
            <img className='infocard__icon' src={icon} alt={iconAlt} />
            <div className='infocard__content'>
                <h4 className='infocard__content-title'>{title}</h4>
                <p className='infocard__content-text'>{text}</p>
            </div>
        </article>
    )
}