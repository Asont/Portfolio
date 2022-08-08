import React from 'react';
import { Link } from 'react-scroll';
import style from "./BurgerNav.module.scss"

const Burger = () => {
    return (
        <div className={style.burgerNav}>
            <div className={style.burgerNavItems}>
            <Link className={style.link} activeClass={style.active} to="main" spy={true} smooth={true} offset={-70} duration={500}>Main</Link>
            <Link className={style.link} activeClass={style.active} to="skills" spy={true} smooth={true}  offset={-70} duration={500}>Skills</Link>
            <Link className={style.link} activeClass={style.active} to="projects" spy={true} smooth={true} offset={-50}  duration={500}>Projects</Link>
            <Link className={style.link} activeClass={style.active} to="contacts" spy={true} smooth={true} offset={-50}  duration={500}>Contacts</Link>
        </div>
        </div>
    );
};


export default Burger;