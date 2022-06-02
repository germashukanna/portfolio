import React from 'react';
import s from './Footer.module.css'


export const Footer = () => {
    return (
        <div className={s.container}>
            <h2>Гермашук Анна</h2>
            <ul className={s.list}>
                <li className={s.listFooter}><a><img></img><span></span></a></li>
                <li className={s.listFooter}><a><img></img><span></span></a></li>
                <li className={s.listFooter}><a><img></img><span></span></a></li>
                <li className={s.listFooter}><a><img></img><span></span></a></li>
            </ul>
            {/*<div className={s.list}>*/}
            {/*    <span className={s.listFooter}><a><img></img></a></span>*/}
            {/*    <span className={s.listFooter}><a><img></img></a></span>*/}
            {/*    <span className={s.listFooter}><a><img></img></a></span>*/}
            {/*    <span className={s.listFooter}><a><img></img></a></span>*/}
            {/*</div>*/}
            <div className={s.footerEhd}><h4>© 2022 Все права защищены</h4></div>
        </div>
    )

}