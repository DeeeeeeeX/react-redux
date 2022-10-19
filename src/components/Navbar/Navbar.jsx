import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {

    let sideBarImg = props.sidebar.sidebarImg.map(p => {
        return (
            <div className={s.friendsItem}>
                <img className={s.fImg} src={p.link} alt={`friends${p.id}`}/>
                <div className={s.name}>{p.name}</div>
            </div>
        )
    });

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={navData => navData.isActive ? s.active : s.inactive}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.inactive}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={navData => navData.isActive ? s.active : s.inactive}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={navData => navData.isActive ? s.active : s.inactive}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' className={navData => navData.isActive ? s.active : s.inactive}>Settings</NavLink>
            </div>
            <div className={s.friendsBar}>
                <h2>Friends</h2>
                {sideBarImg}
            </div>
        </nav>
    )
}

export default Navbar;