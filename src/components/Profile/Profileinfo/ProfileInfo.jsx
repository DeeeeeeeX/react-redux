import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={s.vulcan} src='https://proprikol.ru/wp-content/uploads/2020/04/kartinki-vulkany-27.jpg'
                     alt='0'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status='Hello my friends'/>
            </div>
        </div>
    )
}

export default ProfileInfo;