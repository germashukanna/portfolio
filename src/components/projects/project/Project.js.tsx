import React from 'react';
import s from './Project.module.css'

type ProjectPropsType = {
    title: string,
    name: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.img}>
                <button className={s.btn}>Смотреть</button>
            </div>
            <div className={s.block}>
                <h3>{props.title}</h3>
                <span>{props.name}</span>
            </div>
        </div>
    )

}