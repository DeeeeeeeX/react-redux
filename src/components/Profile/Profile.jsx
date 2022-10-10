import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return <div className={s.content}>
    <div>
      <img className={s.vulcan} src='https://proprikol.ru/wp-content/uploads/2020/04/kartinki-vulkany-27.jpg' alt='0' />
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />
  </div>
}

export default Profile;