import React from 'react';
import style from "./Skills.module.css"
import styleContainer from "../common/styles/container.module.css"
import Skill from "./skill/Skill";
import Title from '../common/components/title/Title';

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"JS"}
                           decription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}/>
                    <Skill title={"CSS"} decription={"Lorem Ipsum is simply dummy text of the printing."}/>
                    <Skill title={"React"} decription={"Lorem Ipsum is simply dummy text."}/>
                </div>
            </div>

        </div>
    );
};

export default Skills;