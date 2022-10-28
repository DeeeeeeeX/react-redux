import React from 'react';
import s from './Navbar.module.css';
import Navbar from "./Navbar";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        sideBarImg: state.sidebar.sidebarImg.map(p => {
            return (
                <div className={s.friendsItem} key={p.id}>
                    <img className={s.fImg} src={p.link} alt={`friends${p.id}`}/>
                    <div className={s.name}>{p.name}</div>
                </div>
            )
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;