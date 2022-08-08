import React from 'react';
import style from "./Skill.module.scss"
import Fade from 'react-reveal/Fade';

type SkillType = {
    title: string
    decription: string
    icon: string
}

const Skill = (props: SkillType) => {

    const iconImg = {
        backgroundImage: `url(${props.icon})`,
    };

    return (
        <div className={style.skill}>
            <Fade left cascade>
            <div className={style.icon} style={iconImg}></div>
            <h3>{props.title}</h3>
            <span className={style.decription}>
                {props.decription}
            </span>
            </Fade>
        </div>
    );
};

export default Skill;