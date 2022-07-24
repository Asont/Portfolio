import React from 'react';
import style from "./Nav.module.scss"

const Nav = () => {
    return (
        <div className={style.nav}>
            <a className={style.link} href={'#main'}>Main</a>
            <a className={style.link} href={'#skills'}>Skills</a>
            <a className={style.link} href={'#projects'}>Projects</a>
            <a className={style.link} href={'#contacts'}>Contacts</a>
        </div>
    );
};

export default Nav;