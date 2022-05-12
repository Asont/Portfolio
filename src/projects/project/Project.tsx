import React from 'react';
import style from "./Project.module.scss"

type ProjectType = {
    title: string,
    description: string
    style?:{backgroundImage: string}
}

const Project = (props: ProjectType) => {
    return (
        <div className={style.projectBlock}>
            <div className={style.imgContainer} style={props.style}>
                <a href={""} className={style.link}>Посмотреть</a>
            </div>
            <div className={style.titleAndDesription}>
                <div className={style.title}>{props.title}</div>
                <div className={style.description}>{props.description}</div>
            </div>
        </div>
    );
};

export default Project;