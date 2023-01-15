import React from 'react';
import s from './Project.module.scss'
import Button from "@mui/material/Button";

type ProjectPropsType = {
    title: string,
    name: string
    style?: any
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.img} style={props.style}>
                <Button className={s.btn}>VIEW PROJECT</Button>
            </div>
            <div className={s.block}>
                <h3 className={s.titleSkill}>{props.title}</h3>
                <span className={s.description}>{props.name}</span>
            </div>
        </div>
    )

}