import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message='Hello, world!' counts='2'/>
        <Post message='ya 5pos nyashka' counts='2'/>
        <Post message='Go ZXC viletim' counts='8'/>
      </div>
    </div>
  )
}

export default MyPosts;