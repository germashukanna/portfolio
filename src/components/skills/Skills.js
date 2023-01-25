import React from 'react';
import s from './Skills.module.scss'
import {Skill} from './skill/Skill';
import {Title} from '../../common/components/title/Title';
import JSImage from './../../assets/image/icons8-briefcase-60.png'
import ReactImage from './../../assets/image/icons8-agreement-delete-60.png'
import Design from './../../assets/image/icons8-moon-and-stars-50.png'
import Css from './../../assets/image/icons8-app-68.png'


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
    const design = {
        backgroundImage: `url(${Design})`
    }

    return (
            <div className={s.contain}>
                <div id='SKILLS' className={s.head}>
                    <Title title={"MY SKILLS"}/>
                </div>
                <div className={s.skills}>
                    <Skill style={cssImage} title={"Development"} name={"React, Redux, JavaScript, TypeScript, AXIOS etc"}/>
                    <Skill style={jsImage} title={"Foundation"}
                           name={"HTML5, CSS3, Team player, English - intermediate (in progress)"}/>
                    <Skill style={reactImage} title={"Testing"} name={"Unit Tests, Storybook"}/>
                    <Skill style={design} title={"Design"} name={"Material UI"}/>
                </div>
            </div>
    )

}