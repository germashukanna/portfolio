import React from 'react';
import s from './Projects.module.scss'
import {Project} from './project/Project.js';
import {Title} from '../../common/components/title/Title';
import todoListImage from '../../assets/image/lavender-flower-background.jpg'
import socialImage from './../../assets/image/notebook-and-smartphone.jpg'
import tasksImage from '../../assets/image/above-table.jpg'
import futureImage from '../../assets/image/blank-craft-letter.jpg'
import packsImage from '../../assets/image/pack-table.jpg'
import clockImage from './../../assets/image/clock-and-purple-flowers.jpg'
import storyBookImage from '../../assets/image/lavender-background.jpg'
import carsImage from '../../assets/image/painted-background.jpg'


export const Projects = () => {

    return (
        <div id='PROJECTS' className={s.projectsBlock}>
            <div className={s.projectsContainer}>
                <Title title={"MY PROJECTS"}/>

                <div className={s.projects}>

                    <Project img={tasksImage} title={"REACT TASKS"} description={"React, Redux, TS, RestAPI, Thunk"}
                             linkDemo={"https://germashukanna.github.io/hws2-master/#/pre-junior"}
                             linkCode={"https://github.com/germashukanna/hws2-master"}
                    />
                    <Project img={todoListImage} title={"TODOLIST"}
                             description={"React, Redux, TS, RestAPI, Thunk, Material UI, Unit Tests"}
                             linkDemo={"https://germashukanna.github.io/it-incubator-todolist-MY/"}
                             linkCode={"https://github.com/germashukanna/it-incubator-todolist-MY/tree/gh-pages"}
                    />
                    <Project img={packsImage} title={"FRIDAY PROJECT"}
                             description={"Team project: React, Redux, TS, RestAPI, Thunk, Material UI"}
                             linkDemo={"https://shaveld.github.io/login"}
                             linkCode={"https://github.com/ShavelD/flash-cards"}
                    />
                    <Project img={socialImage} title={"THE SOCIAL NETWORK"} description={"React, Redux, TS, RestAPI, Thunk"}
                             linkDemo={"https://germashukanna.github.io/Samurai_social_network/"}
                             linkCode={"https://github.com/germashukanna/Samurai_social_network/tree/master"}
                    />
                    <Project img={clockImage} title={"COUNTER"} description={"React, Redux, TS"}
                             linkDemo={"https://germashukanna.github.io/Counter/"}
                             linkCode={"https://github.com/germashukanna/Counter/tree/gh-pages"}
                    />
                    <Project img={storyBookImage} title={"STORYBOOK"} description={"React, TS"}
                             linkCode={"https://github.com/germashukanna/storyBook/tree/main/my-app/src"}
                    />
                    <Project img={carsImage} title={"CARS LANDING PAGE"} description={"Angular, RestAPI, HTML5, CSS3"}
                             linkDemo={"https://germashukanna.github.io/cars-hw/"}
                             linkCode={"https://github.com/germashukanna/cars-hw"}
                    />
                    <Project img={futureImage} title={"FUTURE PROJECT"} description={"...in progress"}
                    />
                </div>
            </div>
        </div>

    )

}