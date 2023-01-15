import React from 'react';
import s from './Skills.module.scss'
import {Skill} from './skill/Skill';
import {Title} from '../../common/components/Title/Title';
import JSImage from './../../assets/image/Js.png'
import ReactImage from './../../assets/image/React.png'
import Css from './../../assets/image/Css.png'
import {CustomAnimation} from "../../common/components/CustomAnimation/customAnimation";


export const Skills = () => {

    const cssImage = {
        backgroundImage: `url(${Css})`
    }
    const reactImage = {
        backgroundImage: `url(${ReactImage})`
    }
    const jsImage = {
        backgroundImage: `url(${JSImage})`
    }

    return (
        <CustomAnimation>
            <div className={s.contain}>
                <div id='SKILLS' className={s.head}>
                    <Title title={"MY SKILLS"}/>
                </div>
                <div className={s.skills}>
                    <Skill style={cssImage} title={"HTML/CSS"} name={"нелбходимо додумать8)"}/>
                    <Skill style={jsImage} title={"JS"} name={"нелбходимо додумать8)"}/>
                    <Skill style={reactImage} title={"React"} name={"нелбходимо додумать8)"}/>
                </div>
            </div>
        </CustomAnimation>
    )

}