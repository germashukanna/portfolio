import React from 'react';
import s from './Сontacts.module.css'


export const Contacts = () => {
    return (
        <div className={s.contain}>
            <div className={s.head}>
                <h2>Контакты</h2>
            </div>

                <form  className={s.form}>
                    <label>
                        <input className={s.input} type="text" name="name" />
                    </label>
                    <label>
                        <input className={s.input} type="text" name="name" />
                    </label>
                    <label>
                        <textarea className={s.textarea}/>
                    </label>
                    <button>Отправить</button>
                </form>
        </div>
    )

}