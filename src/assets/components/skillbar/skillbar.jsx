import './skillbar.scss'

export default function SkillBar({title, score}){
    return(
        <article className='skillbar'>
            <span className='skillbar__title'>{title} :</span>
            <div className='skillbar__wrapper'>
                <div 
                    className='skillbar__score'
                    style={{ width: `${score}%` }}
                >
                </div>
            </div>
        </article>
    )
}