import React from 'react';
import s from './Footer.module.scss'
import {Title} from "../../common/components/title/Title"
import linkedInImage from '../../assets/image/icons8-linkedin-circled-100.png'
import gitImage from '../../assets/image/icons8-github-100.png'
import codewarsImage from '../../assets/image/icons8-codewars-100.png'
import telegramImage from '../../assets/image/icons8-telegram-100.png'


export const Footer = () => {
    return (
        <div className={s.container}>
            <Title title={'Hermashuk Hanna'}/>
                <ul className={s.list}>
                <li className={s.listFooter}><a href={'https://www.linkedin.com/in/%D0%B0%D0%BD%D0%BD%D0%B0-%D0%B3%D0%B5%D1%80%D0%BC%D0%B0%D1%88%D1%83%D0%BA/'}>
                    <img src={linkedInImage}/></a></li>
                <li className={s.listFooter}><a href={'https://github.com/germashukanna'}>
                    <img src={gitImage}/></a></li>
                <li className={s.listFooter}><a href={'https://www.codewars.com/users/AnnaHermashuk'}>
                    <img src={codewarsImage}/></a></li>
                <li className={s.listFooter}><a href={'https://t.me/gerannava'}><img src={telegramImage}/></a></li>
            </ul>
            <div className={s.footerEhd}><h4>© 2022 All Rights Reserved.</h4></div>
        </div>
    )

}