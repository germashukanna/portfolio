import React from 'react';
import s from './Nav.module.scss'

export const Navigation = () => {
    return (
        <div className={s.navigation}>
            <a>Главная</a>
            <a>Скиллы</a>
            <a>Проэкты</a>
            <a>Контакты</a>
        </div>
    )

}