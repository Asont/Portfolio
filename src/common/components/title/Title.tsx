import React from 'react';
import style from "./Title.module.css"

type TitleType = {
    text:string
}

const Title = (props:TitleType) => {
    return (
        <h3 className={style.title}>{props.text}</h3>
    );
};

export default Title;