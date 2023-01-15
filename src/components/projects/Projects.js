import React from 'react';
import s from './Projects.module.scss'
import {Project} from './project/Project.js';
import {Title} from '../../common/components/Title/Title';
import todoListImage from './../../assets/image/glenn-carstens-peter.jpg'
import socialImage from './../../assets/image/DeathtoStock_Creative-Community5.jpg'
import {CustomAnimation} from "../../common/components/CustomAnimation/customAnimation";


export const Projects = () => {

    const social = {
        backgroundImage: `url(${socialImage})`
    }

    const todoList = {
        backgroundImage: `url(${todoListImage})`
    }

    return (
        <CustomAnimation>
            <div id='PROJECTS' className={s.contain}>
                <div className={s.head}>
                    <Title title={"MY PROJECTS"}/>
                </div>
                <div className={s.project}>
                    <Project style={social} title={"THE SOCIAL NETWORK"} name={"соц сеть..."}/>
                    <Project style={todoList} title={"TODOLIST"} name={"список дел..."}/>
                </div>
            </div>
        </CustomAnimation>
    )

}