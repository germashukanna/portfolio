import React from 'react';
import s from './ByMe.module.scss'


export const ByMe = () => {
    return (
        <div className={s.container}>
            <div className={s.me}>
                <span>Привет!</span>
                <p>Меня зовут Анна Гермашук</p>
                <p>Я front-end разработчик</p>
            </div>
            <div className={s.Photo}>
            </div>
        </div>
    )
}