import React from 'react';
import style from "./Projects.module.scss"
import containerCommon from "../common/styles/container.module.css"
import Project from "./project/Project";
import Title from '../common/components/title/Title';
import todolist from './../assets/image/img1.png'
import social from './../assets/image/img2.png'

const Projects = () => {

    const todoListImg = {
        backgroundImage: `url(${todolist})`,
    };
    const socialImg = {
        backgroundImage: `url(${social})`,
    };

    return (
        <div className={style.projectBlock}>
            <div className={`${containerCommon.container} ${style.container}`}>
                <Title text={"Projects"}/>
                <div className={style.projectsContainer}>
                    <Project style={todoListImg} title={"Realistic Business Cards"}
                             description={"Today we’re happy to share with you the mockup of a classic notebook that will help you showcase your drawings. Today we’re happy to share with you the mockup of a classic notebook that will help."}/>
                    <Project style={socialImg} title={"Juice Bottle Packaging"}
                             description={"Today we have for you a set of 20 icons available in 2 styles: colored flat and line version, designed on a 128px grid. These polished icons come in multiple formats so you can easily include them in your projects."}/>
                    <Project title={"Mug PSD MockUp"}
                             description={"Mapogo is an expertly crafted UI kit perfect for iOS designers and developers. The free sample includes 10 screens (750×1334 px) that can be easily customized in Photoshop"}/>
                    <Project title={"A4 Paper PSD"}
                             description={"The freebie of the day is Chameleon, a modern UI kit perfect to use for creating a stylish and clean mobile app. This kit includes 10 screens from various categories that can be easily edited."}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;