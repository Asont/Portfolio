import React, {useState} from 'react';
import style from "./Projects.module.scss"
import containerCommon from "../common/styles/container.module.css"
import Project from "./project/Project";
import Title from '../common/components/title/Title';
import weatherProject from '../assets/projectsImage/weather.png'
import Module from "../common/components/modal/Modal";
import Cards from "../assets/projectsImage/Cards.png"
import Todo from '../assets/projectsImage/Todo.png'
import Social from '../assets/projectsImage/socialNetwork.png'
import Fade from 'react-reveal/Fade';

const Projects = () => {

    const [showFirst, setShowFirst] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [showThird, setShowThird] = useState(false);
    const [showFourth, setShowFourth] = useState(false);

    const close = () => {
        setShowFirst(false)
        setShowSecond(false)
        setShowThird(false)
        setShowFourth(false)
    };

    const arr = [
        {
            title: "Cards",
            description: "Project development in a team.\n" +
                'Stack: React, Redux, TypeScript, JavaScript, Formik, MUI, Rest API, AXIOS.',
            img: {backgroundImage: `url(${Cards})`}
        },
        {
            title: 'Weather',
            description: "My project. \n" +
                "Stack: SCSS, JavaScript, TypeScript, React, Redux, \n" +
                "Redux-thunk, Redux-form, Axios, Material UI, ESLint",
            img: {backgroundImage: `url(${weatherProject})`}
        },
        {
            title: "Todolist",
            description: 'Cusomer project. \n' +
                'Stack: CSS, JavaScript, TypeScript, React, Redux,\n' +
                'MaterialUI.\n' +
                'Using TypeScript for best code control, Bug Fixing,\n' +
                'deploying. Covering code with unit tests.',
            img: {backgroundImage: `url(${Todo})`}
        },

        {
            title: "SocialNetwork",
            description: 'Cusomer project. \n' +
                'Stack: CSS, JavaScript, TypeScript, React, Redux,\n' +
                'Redux-thunk, Redux-form, Axios, Reselect,\n' +
                'Using TypeScript for best code control, Bug Fixing,\n',
            img: {backgroundImage: `url(${Social})`}
        }
    ];


    return (
        <div className={style.projectBlock} id={'projects'}>

            <div className={`${containerCommon.container} ${style.container}`}>
                <div><Title text={"Projects"}/></div>
                <Fade bottom>
                    <div className={style.projectsContainer}>
                        <Project show={showFirst} close={close} setShow={setShowFirst} style={arr[0].img}/>
                        <Module show={showFirst} close={close} title={arr[0].title} text={arr[0].description}
                                image={Cards}
                                linkGitHub={'https://github.com/Asont/cards'}
                                linkSite={'https://asont.github.io/cards/'}/>


                        <Project show={showSecond} close={close} setShow={setShowSecond} style={arr[1].img}/>
                        <Module show={showSecond} close={close} title={arr[1].title} text={arr[1].description}
                                image={weatherProject}
                                linkGitHub={"https://asont.github.io/weather"}
                                linkSite={'https://asont.github.io/weather/'}/>

                        <Project show={showThird} close={close} setShow={setShowThird} style={arr[2].img}/>
                        <Module show={showThird} close={close} title={arr[2].title} text={arr[2].description}
                                image={Todo}
                                linkGitHub={'https://github.com/Asont/todolist'}
                                linkSite={'https://asont.github.io/todolist/#/login'}/>

                        <Project show={showFourth} close={close} setShow={setShowFourth} style={arr[3].img}/>
                        <Module show={showFourth} close={close} title={arr[3].title} text={arr[3].description}
                                image={Social}
                                linkGitHub={'https://github.com/Asont/todolist'}
                                linkSite={'https://asont.github.io/login'}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Projects;