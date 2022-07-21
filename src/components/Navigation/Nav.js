import React from 'react';
import s from './Nav.module.scss'

export const Navigation = () => {
    return (
        <div className={s.navigation}>
            <a>HOME</a>
            <a>SKILLS</a>
            <a>PORTFOLIO</a>
            <a>CONTACTS</a>

        </div>
    )

}