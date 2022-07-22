import React, {useState} from 'react';
import style from "./Projects.module.scss"
import containerCommon from "../common/styles/container.module.css"
import Project from "./project/Project";
import Title from '../common/components/title/Title';
import weatherProject from './../assets/image/img1.png'
import social from './../assets/image/img2.png'
import Module from "../common/components/modal/Modal";

const Projects = () => {
/*
    const weatherImage = {
        backgroundImage: `url(${weatherProject})`,
    };
    const socialImg = {
        backgroundImage: `url(${social})`,
    };
*/
    const [show, setShow] = useState(false);

    const close = () => {
        setShow(false);
    };

    const arr = [
        {
            title: "First Title",
            description: "First Description",
            img: { backgroundImage: `url(${weatherProject})` }
        },
        {
            title: "Second Title",
            description: "Second Description",
            img: { backgroundImage: `url(${social})` }
        },
        {
            title: "Third Title",
            description: "My project\n" +
                "Stack: SCSS, JavaScript, TypeScript, React, Redux,\n" +
                "Redux-thunk, Redux-form, Axios, Material UI, ESLint",
            img: { backgroundImage: `url(${weatherProject})` }
        }
    ];


    return (
        <div className={style.projectBlock}>
            <Title text={"Projects"}/>
            <div className={`${containerCommon.container} ${style.container}`}>

                {arr.map((item, index) => {
                    return (
                        <>
                            <Project
                                show={show}
                                close={close}
                                setShow={setShow}
                                key={index}
                                title={item.title}
                                text={item.description}
                                style={item.img}
                            />
                            <Module
                                show={show}
                                close={close}
                                key={index+100}
                                title={item.title}
                                text={item.description}
                            />


                        </>
                    );
                })}



            </div>
        </div>
    );
};

export default Projects;