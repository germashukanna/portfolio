import React from 'react';
import s from './Project.module.scss'

type ProjectPropsType = {
    title: string,
    name: string
    style?: any
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.img} style={props.style}>
                <button className={s.btn}>VIEW PROJECT</button>
            </div>
            <div className={s.block}>
                <h3 className={s.titleSkill}>{props.title}</h3>
                <span className={s.description}>{props.name}</span>
            </div>
        </div>
    )

}