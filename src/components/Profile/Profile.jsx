import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./Profileinfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.posts} addPost={props.addPost} newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;