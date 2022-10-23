import React from 'react';
import s from './Navbar.module.css';
import Navbar from "./Navbar";
import StoreContext from "../../StoreContext";

const NavbarContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let sideBarImg = store.getState().sidebar.sidebarImg.map(p => {
                    return (
                        <div className={s.friendsItem}>
                            <img className={s.fImg} src={p.link} alt={`friends${p.id}`}/>
                            <div className={s.name}>{p.name}</div>
                        </div>
                    )
                });

                return (<Navbar sideBarImg={sideBarImg}/>

                )
            }
            }
        </StoreContext.Consumer>
    )
}

export default NavbarContainer;