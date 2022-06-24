import React from 'react';
import style from "./Contacts.module.scss"
import styleContainer from "../common/styles/container.module.css"
import Title from "../common/components/title/Title";

const Contacts = () => {

    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text={"Contacts"}/>
                <form className={style.formStyle}>
                    <input type={"text"}/>
                    <input type={"text"}/>
                    <textarea/>
                    <button className={style.button} type={"submit"}>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;