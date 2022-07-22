import React, {useEffect, useState} from 'react';
import style from "./Presentation.module.scss"
import photoProfile from '../assets/bgImage/2.jpg'


const Presentation = () => {

    const [text, setText] = useState("");
    const [fullText, setFullText] = useState("Front-end developer            ");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            setTimeout(() => {
                setText(text + fullText[index]);
                setIndex(index + 1);
            }, 150);
        } else {
            setIndex(0);
            setText("");
        }
    }, [index]);

    const profileImg = {
        backgroundImage: `url(${photoProfile})`,
    };
    return (
        <div className={style.mainBlock} style={profileImg}>
                <span className={style.text}>Aliaksey Druzhko</span>
               <span className={style.textAuto}>{text}</span>
        </div>
    );
};

export default Presentation;