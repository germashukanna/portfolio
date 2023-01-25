import React from 'react';
import s from './Project.module.scss'


type ProjectPropsType = {
    title: string,
    description: string,
    img?: any,
    linkDemo: string,
    linkCode: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.img} style={{backgroundImage: `url(${props.img})`}}>
                <div className={s.overlay}>
                    <div className={s.description}>
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                        <div className={s.links}>
                            <a href={props.linkDemo} className={s.btnDemo} target="_blank" rel="noreferrer">view demo</a>
                            <a href={props.linkCode} className={s.btnCode} target="_blank" rel="noreferrer">view code</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}