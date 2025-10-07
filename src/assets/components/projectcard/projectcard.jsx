import './projectcard.scss';

export default function ProjectCard({ source, alt, title, tags }) {

    return(
            <button className='projectcard'>
                <img className='projectcard__image' src={source} alt={alt} />
                <div className='projectcard__overlay'>
                    <h2>{title}</h2>
                    <div className='projectcard__overlay-tags'>
                        {tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                </div>
            </button>
    )
}