import React from 'react';
import s from './Сontacts.module.scss'
import {Title} from "../../common/components/Title/Title";
import {CustomAnimation} from '../../common/components/CustomAnimation/customAnimation';
import Button from '@mui/material/Button';


export const Contacts = () => {
    return (
        <CustomAnimation>
            <div id='CONTACTS' className={s.contain}>
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
                    <Button className={s.btn}>SEND MESSAGE</Button>
                </form>

            </div>
        </CustomAnimation>
    )

}