import React from 'react';
import style from "./Skills.module.scss"
import styleContainer from "../common/styles/container.module.css"
import Skill from "./skill/Skill";
import Title from '../common/components/title/Title';
import jsIcon from '../assets/image/jsIcon.png'
import reactIcon from '../assets/image/reactIcon.png';
import cssIcon from '../assets/image/cssIcon.png'
import htmlIcon from '../assets/image/htmlIcon.png'
import gitIcon from '../assets/image/gitIcon.png'
import typeScript from '../assets/image/typeScriptIcon.png'

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill icon={jsIcon} title={"JS"}
                           decription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}/>
                    <Skill icon={reactIcon} title={"React"} decription={"Lorem Ipsum is simply dummy text of the printing."}/>
                    <Skill icon={cssIcon} title={"CSS"} decription={"Lorem Ipsum is simply dummy text."}/>
                    <Skill icon={htmlIcon} title={"HTML"}
                           decription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}/>
                    <Skill  icon={gitIcon} title={"GIT"} decription={"Lorem Ipsum is simply dummy text of the printing."}/>
                    <Skill icon={typeScript} title={"TypeScript"} decription={"Lorem Ipsum is simply dummy text."}/>
                </div>
            </div>

        </div>
    );
};

export default Skills;