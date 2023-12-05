import React from 'react';
import SkillBar from './SkillBar';

const Skills = () => {
    const skills = [
        {title: 'Backend Development', level: 80, tools: ['Ruby on Rails', 'Node JS + Typescript', 'Mongo DB', 'Postgres']},
        {title: 'Frontend Development', level: 60, tools: ['HTML', 'CSS', 'JS', 'Tailwind CSS', 'React JS']},
        {title: 'Infrastructure', level: 50, tools: ['AWS EC2, AWS S3', 'AWS RDS', 'Firebase'] }
    ];
    return (
        <section className='px-48 py-16 bg-[#FFFAF2]'>
            <h2>Skills</h2>
            <div className='flex justify-between'>
                <object data="../assets/bg.svg" type="image/svg+xml"></object>
                <div>
                    <div className='flex'>
                        <h3>Profile</h3>
                        <p>Full Stack Developer</p>
                    </div>
                    {skills.map((skill) => {
                        return <div key={skill.name} className='flex gap-8'>
                            <div className='flex justify-between'>
                                <h3>{skill.title}</h3>
                                <SkillBar level={skill.level}/>
                            </div>
                            <div className='flex justify-between'>
                                <h3>Tools</h3>
                                <p>{skill.tools.toString()}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    );
}

export default Skills;
