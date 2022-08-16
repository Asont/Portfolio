import React, { useState } from 'react';
import {Link} from 'react-scroll';
import style from "./BurgerNav.module.scss"
import Fade from 'react-reveal/Fade';
import burgerIcon from '../../assets/nav/burgerMenu.png'

const Burger = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    return (
        <div className={style.burgerNav}>
            <Fade right>
            <div className={menuIsOpen? `${style.burgerNavItems} ${style.show}`:style.burgerNavItems}>
                <Link className={style.link} activeClass={style.active} to="main" spy={true} smooth={true} offset={-70}
                      duration={500}>Main</Link>
                <Link className={style.link} activeClass={style.active} to="skills" spy={true} smooth={true}
                      offset={-70} duration={500}>Skills</Link>
                <Link className={style.link} activeClass={style.active} to="projects" spy={true} smooth={true}
                      offset={-50} duration={500}>Projects</Link>
                <Link className={style.link} activeClass={style.active} to="contacts" spy={true} smooth={true}
                      offset={-50} duration={500}>Contacts</Link>

            </div>
            </Fade>
            <div className={style.burgerBtn} onClick={()=>{setMenuIsOpen(!menuIsOpen)}}><img src={burgerIcon}/></div>
        </div>
    );
};


export default Burger;