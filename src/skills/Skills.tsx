import React from 'react';
import style from "./Skills.module.scss"
import styleContainer from "../common/styles/container.module.css"
import Skill from "./skill/Skill";
import Title from '../common/components/title/Title';
import jsIcon from '../assets/skillsIcon/jsIcon.png'
import reactIcon from '../assets/skillsIcon/reactIcon.png';
import cssIcon from '../assets/skillsIcon/cssIcon.png'
import htmlIcon from '../assets/skillsIcon/htmlIcon.png'
import gitIcon from '../assets/skillsIcon/gitIcon.png'
import typeScript from '../assets/skillsIcon/typeScriptIcon.png'

const Skills = () => {
    return (
        <div className={style.skillsBlock} id={'skills'}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill icon={jsIcon} title={"JS"}
                           decription={" "}/>
                    <Skill icon={reactIcon} title={"React"} decription={" "}/>
                    <Skill icon={cssIcon} title={"CSS"} decription={" "}/>
                    <Skill icon={htmlIcon} title={"HTML"}
                           decription={" "}/>
                    <Skill  icon={gitIcon} title={"GIT"} decription={" "}/>
                    <Skill icon={typeScript} title={"TypeScript"} decription={" "}/>
                </div>
            </div>

        </div>
    );
};

export default Skills;