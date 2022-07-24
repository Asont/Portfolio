import React from 'react';
import style from "./Remote.module.scss"
import styleContainer from "../common/styles/container.module.css"
import Title from '../common/components/title/Title';

const Remote = () => {
    return (
        <div className={style.remoteBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text={"Looking into remote work options"}/>
                <div><a href={" "} className={style.link}>HIRE ME</a></div>
            </div>
        </div>
    );
};

export default Remote;