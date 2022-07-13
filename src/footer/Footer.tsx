import React from 'react';
import style from "./Footer.module.scss"
import styleContainer from "../common/styles/container.module.css"
import Title from '../common/components/title/Title';

const Footer = () => {

    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text={"Druzhko Alyaksey"}/>
                <div className={style.sqareBlock}>
                    <div className={style.square}> </div>
                    <div className={style.square}> </div>
                    <div className={style.square}> </div>
                    <div className={style.square}> </div>
                </div>
                <h3 className={style.rights}>© 2022 ALL RIGHTS RESERVED</h3>
            </div>
        </div>


    );
};

export default Footer;