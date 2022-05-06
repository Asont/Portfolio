import React from 'react';
import style from "./Remote.module.css"
import styleContainer from "../common/styles/container.module.css"
import Title from '../common/components/title/Title';

const Remote = () => {
    return (
        <div className={style.remoteBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text={"Рассматриваю варианты удаленной работы"}/>
                <a href={""} className={style.button}>Нанять меня</a>
            </div>
        </div>
    );
};

export default Remote;