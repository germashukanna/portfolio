import React from 'react';
import s from './Skills.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={s.contain}>
            <div className={s.head}>
                <h2>Мои скиллы</h2>
            </div>
            <div className={s.skills}>
                <Skill title={"Css"} name={"такие себе навыки"}/>
                <Skill title={"Js"} name={"такие себе навыки"}/>
                <Skill title={"React"} name={"такие себе навыки"}/>
            </div>
        </div>
    )

}