import React from 'react';
import style from "./Skill.module.scss"

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
            <div className={style.icon} style={iconImg}></div>
            <h3>{props.title}</h3>
            <span className={style.decription}>
                {props.decription}
            </span>
        </div>
    );
};

export default Skill;