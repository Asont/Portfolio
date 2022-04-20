import React from 'react';
import style from "./Contacts.module.css"
import styleContainer from "../common/container.module.css"

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3 className={style.title}>Контакты</h3>
                <form className={style.formStyle}>
                    <input type={"text"}/>
                    <input type={"text"}/>
                    <textarea/>
                    <button className={style.button} type={"submit"}>Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;