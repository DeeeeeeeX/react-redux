import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.vulcan} src='https://proprikol.ru/wp-content/uploads/2020/04/kartinki-vulkany-27.jpg'
                     alt='0'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;