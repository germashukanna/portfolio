import React from 'react';
import s from './stars.module.scss'
import star1 from './star1.png'
import star2 from './star2.png'
import star3 from './star3.png'


export const Stars = () => {
    return (
        <div className={s.stars}>
            <img src={star1} alt={'star1'}/>
            <img src={star2} alt={'star2'}/>
            <img src={star3} alt={'star3'}/>
        </div>
    )

}