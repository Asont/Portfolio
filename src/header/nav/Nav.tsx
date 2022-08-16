import React from 'react';
import { Link } from 'react-scroll';
import style from "./Nav.module.scss"

const Nav = () => {
    return (
        <div className={style.nav}>
            <Link className={style.link} activeClass={style.active} to="main" spy={true} smooth={true} offset={-70} duration={500}>Main</Link>
            <Link className={style.link} activeClass={style.active} to="skills" spy={true} smooth={true}  offset={-70} duration={500}>Skills</Link>
            <Link className={style.link} activeClass={style.active} to="projects" spy={true} smooth={true} offset={-50}  duration={500}>Projects</Link>
            <Link className={style.link} activeClass={style.active} to="contacts" spy={true} smooth={true} offset={-50}  duration={500}>Contacts</Link>
        </div>
    );
};

export default Nav;