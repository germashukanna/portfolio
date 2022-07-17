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
            <h3>{props.title}</h3>
            <span>{props.name}</span>
        </div>
    )

}