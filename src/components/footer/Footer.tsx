import React from 'react';
import s from './Footer.module.scss'
import {Title} from "../../common/components/Title";


export const Footer = () => {
    return (
        <div className={s.container}>
            <Title title={'Hermashuk Hanna'}/>
                <ul className={s.list}>
                <li className={s.listFooter}><a><img></img><span></span></a></li>
                <li className={s.listFooter}><a><img></img><span></span></a></li>
                <li className={s.listFooter}><a><img></img><span></span></a></li>
                <li className={s.listFooter}><a><img></img><span></span></a></li>
            </ul>
            <div className={s.footerEhd}><h4>© 2022 All Rights Reserved.</h4></div>
        </div>
    )

}