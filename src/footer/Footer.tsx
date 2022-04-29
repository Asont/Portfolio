import React from 'react';
import style from "./Fotter.module.css"
import styleContainer from "../common/container.module.css"

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3 className={style.title}>Дружко Алексей Игоревич</h3>
                <div className={style.sqareBlock}>
                    <div className={style.square}> </div>
                    <div className={style.square}> </div>
                    <div className={style.square}> </div>
                    <div className={style.square}> </div>
                </div>
                <h3 className={style.rights}>© 2022 Все права защищены</h3>
            </div>
        </div>
    );
};

export default Footer;