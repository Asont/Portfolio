import React from 'react';
import style from "./Skill.module.css"

type SkillType = {
    title:string
    decription:string
}

const Skill = (props:SkillType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <span className={style.decription}>
                {props.decription}
            </span>
        </div>
    );
};

export default Skill;