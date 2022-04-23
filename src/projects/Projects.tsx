import React from 'react';
import style from "./Projects.module.css"
import containerCommon from "../common/container.module.css"
import Project from "./project/Project";


const Projects = () => {
    return (
        <div className={style.projectBlock}>
            <div className={`${containerCommon.container} ${style.container}`}>
                <h3 className={style.title}>Мои работы</h3>
                <div className={style.projectsContainer}>
                    <Project title={"Моя первая работа"} description={"Описание первой работы"}/>
                    <Project title={"Моя вторая работа"} description={"Описание второй работы"}/>
                    <Project title={"Моя вторая работа"} description={"Описание второй работы"}/>
                    <Project title={"Моя вторая работа"} description={"Описание второй работы"}/>
                    <Project title={"Моя вторая работа"} description={"Описание второй работы"}/>
                    <Project title={"Моя вторая работа"} description={"Описание второй работы"}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;