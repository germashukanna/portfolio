import React from 'react';
import s from './СontactsForm.module.scss'
import {CustomAnimation} from '../../../common/components/customAnimation/customAnimation';
import axios from "axios";
import {useFormik} from "formik";


export const ContactsForm = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            message: '',

        },
        onSubmit: values => {
            axios.post('https://portfolio-node-js.vercel.app/sendMessage', {
                email: values.email,
                name: values.name,
                message: values.message
            }).then(() => {
                alert('Спасибо за обратную связь')
                formik.resetForm()
            })
                .finally(() => {
                    alert('Спасибо за обратную связь!')
                    formik.resetForm()
                })
        },

    })

    return (
            <div className={s.contain}>
                <form className={s.form} onSubmit={formik.handleSubmit}>
                    <label>
                        <input className={s.input} type="text" placeholder={'Name'}
                               {...formik.getFieldProps('name')}/>
                    </label>
                    <label>
                        <input className={s.input} type="text" placeholder={'Your Email'}
                               {...formik.getFieldProps('email')}/>
                    </label>
                    <label>
                        <textarea className={s.textarea} placeholder={'Your Message'}
                                  {...formik.getFieldProps('message')}/>
                    </label>
                    <button className={s.btn} type="submit">SEND MESSAGE</button>
                </form>
            </div>
    )

}