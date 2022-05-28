import React from 'react';
import s from './Projects.module.css'
import {Project} from "./project/Project.js";


export const Projects = () => {
    return (
        <div className={s.contain}>
            <div className={s.head}>
                <h2>Мои работы</h2>
            </div>
            <div className={s.project}>
                <Project title={"Путь самурая"} name={"соц сеть..."}/>
                <Project title={"Toodolist"} name={"список дел..."}/>
            </div>
        </div>
    )

}