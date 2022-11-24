import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img
            src='https://e7.pngegg.com/pngimages/1013/376/png-clipart-pink-flowers-rose-flower-watercolor-painting-flower.png'
            alt='0'/>
        <div className={s.loginBlock}>
            { props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>

    </header>
}

export default Header;