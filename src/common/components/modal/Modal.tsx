import React from "react";
import style from "./Modal.module.scss";

type ModuleType = {
    show: boolean;
    close: () => void;
    title: string;
    text: string;
};

const Module = (props: ModuleType) => {
    if (!props.show) return null;

    console.log(props.title);

    return (
        <div className={style.mainContainer} onClick={props.close}>
            <div
                className={style.container}
                onClick={(e) => {
                    e.stopPropagation();
                }}>
                <div className={style.header}>
                    <div className={style.img}></div>
                    <span className={style.btnX} onClick={props.close}>X</span>
                </div>
                <div className={style.textBlock}>
            <p className={style.titleModal}>{props.title}</p>
            <p className={style.textModal}>{props.text}</p>
                </div>
                <a className={style.link} href={" "}>View Project</a>
            </div>
        </div>
    );
};

export default Module;
