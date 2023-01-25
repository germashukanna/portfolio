import React from "react";
import s from "./Contacts.module.scss";
import {ContactsForm} from "./contactsForm/СontactsForm";
import {ContactsData} from "./contactsData/ContactsData";
import {Title} from "../../common/components/title/Title";


export const Contacts = () => {
    return (
        <div className={s.contactsBlock}  id='CONTACTS' >
            <div className={s.head}>
                <Title title={'CONTACTS'}/>
            </div>
            <div className={s.formAndData}>
                <ContactsData/>
                <ContactsForm/>
            </div>
        </div>
    );
}