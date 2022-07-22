import React from 'react';
import style from "./Project.module.scss"

type ProjectType = {
    style?: { backgroundImage: string };
    show: boolean;
    close: () => void;
    setShow: (value: boolean) => void;
    title: string;
    text: string;
}




const Project = (props: ProjectType) => {

    const onClickHandler = () => {
        props.setShow(true);
    };

    return (
                <div
                    className={style.project}
                    style={props.style}
                    onClick={onClickHandler}
                ></div>
    );
};

export default Project;