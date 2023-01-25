import React from 'react'
import s from './DataBlock.module.scss';


type DataBlockPropsType = {
    iconTitle: string
    contactTitle: string
    data: string
}

export const DataBlock: React.FC<DataBlockPropsType> = ({iconTitle, contactTitle, data}) => {
    return (
        <div className={s.dataBlock}>
            <div className={s.icon}>
                <img src={iconTitle}/>
            </div>
            <div className={s.description}>
                <h4>{contactTitle}</h4>
                <span>{data}</span>
            </div>
        </div>
    );
}

