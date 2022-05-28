import React from 'react';
import s from './Skill.module.css'

type SkillPropsType = {
    title: string,
    name: string,
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3>{props.title}</h3>
            <span>{props.name}</span>
        </div>
    )

}