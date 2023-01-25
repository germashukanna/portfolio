import React from 'react'
import { DataBlock } from '../dataBlock/DataBlock';
import s from './ContactsData.module.scss';
import phoneIng from '../../../assets/image/icons8-phone-67.png'
import faEnvelope from '../../../assets/image/icons8-circled-envelope-50.png'
import faHome from '../../../assets/image/icons8-location-64.png'


export const ContactsData = () => {
    return (
        <div className={s.data}>
            <DataBlock iconTitle={phoneIng} contactTitle={'Phone'} data={'+375(29)188-31-33'}/>
            <DataBlock iconTitle={faEnvelope} contactTitle={'Email'} data={'germashuk@gmail.com'}/>
            <DataBlock iconTitle={faHome} contactTitle={'My Location'} data={'Minsk, Belarus'}/>
        </div>
    );
}

