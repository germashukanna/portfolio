import React from 'react';
import s from './Nav.module.scss'

export const Navigation = () => {
    return (
        <div className={s.navigation}>
            <a href='#'>HOME</a>
            <a href='#SKILLS'>SKILLS</a>
            <a href='#PROJECTS'>PROJECTS</a>
            <a href='#CONTACTS'>CONTACTS</a>
        </div>
    )

}