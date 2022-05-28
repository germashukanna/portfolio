import React from 'react';
import s from './ByMe.module.css'


export const ByMe = () => {
    return (
        <div className={s.container}>
            <div className={s.me}>
                <span>Привет!</span>
                <h1>Меня зовут Анна Гермашук</h1>
                <p>Я front-end разработчик</p>
            </div>
            <div className={s.foto}>

            </div>
        </div>
    )
}