import React from 'react';
import style from "./Footer.module.scss"
import styleContainer from "../common/styles/container.module.css"
import facebookIcon from "../assets/footerIcons/facebook.png"
import gitHubIcon from "../assets/footerIcons/githubIcon.png"
import linkedinIcon from "../assets/footerIcons/linkedinIcon.png"
import telegramIcon from "../assets/footerIcons/telegramIcon.png"
import codewars from "../assets/footerIcons/codewars.png"


const Footer = () => {
    return (

        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>

                <div className={style.sqareBlock}>
                    <a className={style.round} href="https://www.facebook.com/aleksey.druzhko/">
                        <img src={facebookIcon} style={{width:"18px", height:"23px"}} alt={"facebook"}/>
                    </a>
                    <a href="https://github.com/Asont" className={style.round} >
                        <img src={gitHubIcon} style={{width:"20px", height:"20px"}} alt={"gitHub"}/>
                    </a>
                    <a href="https://www.linkedin.com/in/aleksey-druzhko" className={style.round} >
                        <img src={linkedinIcon} style={{width:"20px", height:"20px"}} alt={'linkedin'}/>
                    </a>
                    <a href="https://t.me/jdbes" className={style.round} >
                        <img src={telegramIcon} style={{width:"21px", height:"21px"}} alt={'telegram'}/>
                    </a>
                    <a href="https://www.codewars.com/users/alomst" className={style.round} >
                        <img src={codewars} style={{width:"21px", height:"21px"}} alt={'codewars'}/>
                    </a>
                </div>
                <h3 className={style.rights}>© 2022 Druzhko. All rights reserved.</h3>
            </div>
        </div>


    );
};

export default Footer;