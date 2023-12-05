import React, { useState } from 'react';

const Portfolio = () => {
    const [skillIndex, setSkillIndex] = useState(0)
    const skills = [
        {title: 'a'},
        {title: 'b'},
        {title: 'c'}
    ]

    const handleNext = () => setSkillIndex(skillIndex + 1)
    const handlePrev = () => setSkillIndex(skillIndex - 1)

    return (
        <section className='px-42 py-16'>
            <p>{skills[skillIndex].title}</p>
            {skillIndex === skills.length-1 ? '' : <button onClick={handleNext}>next</button>}
            {skillIndex === 0 ? '' : <button onClick={handlePrev}>prev</button>}
        </section>
    );
}

export default Portfolio;
