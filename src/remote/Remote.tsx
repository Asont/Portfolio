import React from 'react';
import style from "./Remote.module.css"
import styleContainer from "../common/container.module.css"

const Remote = () => {
    return (

        <div className={style.remoteBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3 className={style.title}>Рассматриваю варианты удаленной работы</h3>
                <a href={""} className={style.button} >Нанять меня</a>
            </div>
        </div>
    );
};

export default Remote;