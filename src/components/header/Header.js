import React from 'react';
import s from './Header.module.scss'
import styleCommon from '../../common/style/common.module.css'
import {Navigation} from "../Navigation/Nav";


export const Header = () => {
    return (
        <div className={s.header}>
            <div className={styleCommon.container}>
            <Navigation/>
        </div>
        </div>
    )

}