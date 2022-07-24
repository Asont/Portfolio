import React, {useEffect, useState} from 'react';
import style from "./Presentation.module.scss"
import photoProfile from '../assets/bgImage/backgroundPresentation.jpg'


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
            <div className={style.arrowDown} style={{marginTop:'50px', cursor:'pointer'}}>
                <a href={'#main'}><span></span></a>
            </div>
        </div>
    );
};

export default Presentation;