import React from 'react';
import s from './Сontacts.module.scss'
import {Title} from "../../common/components/Title";


export const Contacts = () => {
    return (
        <div className={s.contain}>
            <div className={s.head}>
                <Title title={'CONTACTS'}/>
            </div>

            <form className={s.form}>
                <label>
                    <input className={s.input} type="text" name="name" placeholder={'Name'}/>
                </label>
                <label>
                    <input className={s.input} type="text" name="name" placeholder={'Your Email'}/>
                </label>
                <label>
                    <textarea className={s.textarea} placeholder={'Your Message'}/>
                </label>
                <button className={s.btn}>SEND MESSAGE</button>
            </form>
        </div>
    )

}