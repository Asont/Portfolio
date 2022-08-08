import React from 'react';
import style from "./Contacts.module.scss"
import styleContainer from "../common/styles/container.module.css"
import Title from "../common/components/title/Title";
import {TextField} from "@mui/material";
import Fade from 'react-reveal/Fade';

const Contacts = () => {

    return (
        <div className={style.contactsBlock} id='contacts'>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text={"Contacts"}/>
                 <Fade right>
                <form className={style.formStyle}>
                    <TextField
                        id="standard-password-input"
                        label="Name*"
                        type="text"
                        autoComplete="current-password"
                        variant="standard"
                    />
                    <TextField
                        id="standard-password-input"
                        label="Phone*"
                        type="text"
                        autoComplete="current-password"
                        variant="standard"
                    />
                    <TextField
                        id="standard-password-input"
                        label="Email*"
                        type="text"
                        autoComplete="current-password"
                        variant="standard"
                    />
                    <TextField
                        id="standard-password-input"
                        label="Subject*"
                        type="text"
                        autoComplete="current-password"
                        variant="standard"
                    />
                    <TextField
                        className="textfield"
                        id="standard-multiline-static"
                        label="Message"
                        multiline
                        rows={1}
                        variant="standard"
                    />

                    <button className={style.link} type={"submit"}>SEND MESSAGE</button>
                </form>
                 </Fade>
            </div>
        </div>
    );
};

export default Contacts;