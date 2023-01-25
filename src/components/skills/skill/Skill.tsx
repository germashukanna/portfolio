import React from 'react';
import s from './Skill.module.scss'

type SkillPropsType = {
    title: string,
    name: string,
    style?: any
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon} style={props.style}></div>
            <h3 className={s.titleSkill}>{props.title}</h3>
            <hr className={s.hR}/>
            <p className={s.description}>{props.name}</p>
        </div>
    )

}