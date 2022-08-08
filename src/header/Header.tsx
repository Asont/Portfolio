import React, {useEffect, useState} from 'react';
import style from "./Header.module.scss"
import Nav from "../nav/Nav";
import Title from '../common/components/title/Title';
import  Burger  from '../burgerNav/Burger';

const Header = () => {

    let [value, setValue] = useState<number>(0);

    useEffect(() => {
        const handleScroll = (event: any) => {
            if (window.scrollY > 70) {
                setValue(window.scrollY);
            } else {
                setValue(0);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (

        <div className={style.header} style={{opacity: value}}>
            <Nav/>
        <Burger/>
            <div className={style.lastName}>
            <Title text={'Druzhko'} styleColor={'#292929'}/>
        </div>
        </div>

    );
};
export default Header;