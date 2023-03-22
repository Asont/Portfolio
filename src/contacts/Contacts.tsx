import React, {useState} from 'react';
import style from "./Contacts.module.scss"
import styleContainer from "../common/styles/container.module.css"
import Title from "../common/components/title/Title";
import {TextField} from "@mui/material";
import Fade from 'react-reveal/Fade';
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

type InputsType = {
    name: string
    phone: string
    email:string
    subject:string
    message:string

};

const Contacts = () => {

    const [show, setShow] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm<InputsType>();
    const onSubmit: SubmitHandler<InputsType> = async (data) => {
        try{
            await  axios.post( "https://gmail-nodejs-six.vercel.app/send" ,data)
            setShow(true)
        }catch (e) {
            console.warn(e)
            setShow(false)
        }
    }

    if(show){
        return <div>Thanks for sent message I will phone you</div>
    }


    return (
        <div className={style.contactsBlock} id='contacts' onSubmit={handleSubmit(onSubmit)}>
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
                        {...register('name')}
                    />
                    <TextField
                        id="standard-password-input"
                        label="Phone*"
                        type="text"
                        autoComplete="current-password"
                        variant="standard"
                        {...register('phone')}
                    />
                    <TextField
                        id="standard-password-input"
                        label="Email*"
                        type="text"
                        autoComplete="current-password"
                        variant="standard"
                        {...register('email')}
                    />
                    <TextField
                        id="standard-password-input"
                        label="Subject*"
                        type="text"
                        autoComplete="current-password"
                        variant="standard"
                        {...register('subject')}
                    />
                    <TextField
                        className="textfield"
                        id="standard-multiline-static"
                        label="Message"
                        multiline
                        rows={1}
                        variant="standard"
                        {...register('message')}
                    />

                    <button className={style.link} type={"submit"}>SEND MESSAGE</button>
                </form>
                 </Fade>
            </div>
        </div>
    );
};

export default Contacts;