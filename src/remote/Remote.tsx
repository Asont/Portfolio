import React from 'react';
import style from "./Remote.module.scss"
import styleContainer from "../common/styles/container.module.css"
import Title from '../common/components/title/Title';
import Fade from 'react-reveal/Fade';

const Remote = () => {
    return (
        <div className={style.remoteBlock}>
            <Fade left>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text={"Looking into remote work options"}/>
                <div><a href={" "} className={style.link}>HIRE ME</a></div>
            </div>
            </Fade>
        </div>
    );
};

export default Remote;