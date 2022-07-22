import React, {useEffect, useState} from 'react';
import style from "./Header.module.scss"
import Nav from "../nav/Nav";
const Header = () => {

    let [value, setValue] = useState<number>(0);

    useEffect(() => {
        const handleScroll = (event:any) => {
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
        <div className={style.header} style={{ opacity: value }}>
            <Nav/>
        </div>
    );
};
export default Header;