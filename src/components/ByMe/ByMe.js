import React from 'react';
import s from './ByMe.module.scss'
import photo from './photo_2022-12-05_18-38-55.jpg'


export const ByMe = () => {
    return (
        <div className={s.container}>
            <div className={s.me}>
                <span>Hi!</span>
                <h3>I'm Hanna Hermashuk</h3>
                <p>FRONT-END DEVELOPER BASED IN #MINSK</p>
            </div>
            <div className={s.Photo}>
                <img src={photo} alt={'me'}/>
            </div>
        </div>
    )
}