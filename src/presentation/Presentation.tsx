import React, {useEffect, useState} from 'react';
import style from "./Presentation.module.scss"
import photoProfile from '../assets/bgImage/backgroundPresentation.jpg'
import gitIcon from '../assets/presentationIcons/gitIcon.png'
import linkedinIcon from '../assets/presentationIcons/linkedinIcon.png'
import telegram from '../assets/presentationIcons/telegramIcon.png'
import codeWars from '../assets/presentationIcons/codewarsIcon.png'
import facebook from '../assets/presentationIcons/facebookIcon.png'
import {Link} from "react-scroll";



const Presentation = () => {

    const [text, setText] = useState("");
    const [fullText, setFullText] = useState("Front-end developer            ");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            setTimeout(() => {
                setText(text + fullText[index]);
                setIndex(index + 1);
            }, 150);
        } else {
            setIndex(0);
            setText("");
        }
    }, [index]);

    const backgroundImg = {
        backgroundImage: `url(${photoProfile})`,
    };
    const gitImg = {
        backgroundImage: `url(${gitIcon})`,
    };
    const linkedin = {
        backgroundImage: `url(${linkedinIcon})`,
    };

    const telegramIcon = {
        backgroundImage: `url(${telegram})`,
    };

    const codeWarsIcon = {
        backgroundImage: `url(${codeWars})`,
    };

    const facebookIcon = {
        backgroundImage: `url(${facebook})`,
    };

    return (
        <div className={style.mainBlock} style={backgroundImg}>
            <span className={style.text}>Aliaksey Druzhko</span>
            <span className={style.textAuto}>{text}</span>
            <div className={style.iconsBlock}>
                <a href="https://github.com/Asont/">
                    <div className={style.icon} style={gitImg}>
                    </div>
                </a>
                <a href="https://www.codewars.com/users/alomst">
                    <div className={style.icon} style={codeWarsIcon}>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/aleksey-druzhko">
                    <div className={style.icon} style={linkedin}>
                    </div>
                </a>
                <a href="https://www.facebook.com/aleksey.druzhko/">
                    <div className={style.icon} style={facebookIcon}>
                    </div>
                </a>
                <a href="https://t.me/jdbes">
                    <div className={style.icon} style={telegramIcon}>
                    </div>
                </a>


            </div>
            <div className={style.arrowDown} style={{marginTop: '50px', cursor: 'pointer'}}>
                <Link className={style.link} to="main" spy={true} smooth={true} offset={-50}  duration={500}><span></span></Link>
            </div>
        </div>
    );
};

export default Presentation;