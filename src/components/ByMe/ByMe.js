import React from 'react';
import s from './ByMe.module.scss'


export const ByMe = () => {
    return (
        <div className={s.container}>
            <div className={s.me}>
                <span>Hi!</span>
                <h3>I'm Hanna Hermashuk</h3>
                <p>FRONT-END DEVELOPER BASED IN #MINSK</p>
            </div>
            <div className={s.Photo}>
            </div>
        </div>
    )
}