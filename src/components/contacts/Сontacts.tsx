import React from 'react';
import s from './Сontacts.module.scss'
import {Title} from "../../common/components/Title";


export const Contacts = () => {
    return (
        <div className={s.contain}>
            <div className={s.head}>
                <Title title={'Контакты'}/>
            </div>

            <form className={s.form}>
                <label>
                    <input className={s.input} type="text" name="name"/>
                </label>
                <label>
                    <input className={s.input} type="text" name="name"/>
                </label>
                <label>
                    <textarea className={s.textarea}/>
                </label>
                <button>Отправить</button>
            </form>
        </div>
    )

}