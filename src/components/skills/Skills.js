import React from 'react';
import s from './Skills.module.scss'
import {Skill} from './skill/Skill';
import {Title} from '../../common/components/Title';
import JSImage from './../../assets/image/Js.png'
import ReactImage from './../../assets/image/React.png'
import Css from './../../assets/image/Css.png'


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
        <div className={s.contain}>
            <div className={s.head}>
                <Title title={"Мои скиллы"}/>
            </div>
            <div className={s.skills}>
                <Skill style={cssImage} title={"HTML/CSS"} name={"такие себе навыки"}/>
                <Skill style={jsImage} title={"JS"} name={"такие себе навыки"}/>
                <Skill style={reactImage} title={"React"} name={"такие себе навыки"}/>
            </div>
        </div>
    )

}