import './projectcard.scss';

export default function ProjectCard({ source, alt, title, tags }) {

    return(
            <button className='projectcard'>
                <img className='projectcard__image' src={source} alt={alt} />
                <div className='projectcard__overlay'>
                    <h2>{title}</h2>
                    <div className='projectcard__overlay-tags'>
                        <span key={tags[0]}>{tags[0]}</span>
                        <span key={tags[1]}>{tags[1]}</span>
                        <span key={tags[2]}>{tags[2]}</span>
                    </div>
                </div>
            </button>
    )
}