import React from 'react';
import style from "./Main.module.scss"
import styleContainer from "../common/styles/container.module.css"
import photoProfile from '../assets/image/profileImage.jpg'


const Main = () => {

    const profileImg = {
        backgroundImage: `url(${photoProfile})`,
    };

    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.photo} style={profileImg}></div>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I'm Aleksey Druzhko</h1>
                    <p>Front-end Developer</p>
                    <p className={style.description}>
                        I have rich experience in web site design & building and customization. Also I am good at html, css, javascript, wordpress, php, jquery, bootstrap. I love to talk with you about our unique approach. Feel free to contact me writing an email with your project idea.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Main;