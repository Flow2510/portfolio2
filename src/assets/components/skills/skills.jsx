import SkillBar from '../skillbar/skillbar'
import './skills.scss'

export default function Skills() {
    return(
        <section className='skills'>
            <h3 className='skills__title'>Technologies :</h3>
            <div className='skills__content'>
                <SkillBar 
                    title="HTML/CSS"
                    score="75"
                />
                <SkillBar 
                    title="Javascript"
                    score="65"
                />
                <SkillBar 
                    title="React"
                    score="55"
                />
                <SkillBar 
                    title="Node.js"
                    score="35"
                />
                <SkillBar 
                    title="Git"
                    score="60"
                />
                <SkillBar 
                    title="Design"
                    score="50"
                />
            </div>
        </section>
    )
}