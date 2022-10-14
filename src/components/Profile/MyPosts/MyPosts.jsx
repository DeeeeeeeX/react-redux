import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, message: "Hello, world", counts:2},
        {id: 2, message: "ya 5pos nyashka", counts:2},
        {id: 3, message: "Go ZXC viletim", counts:8},
        {id: 4, message: "dadada", counts:3},
        {id: 5, message: "blalba", counts:12},

    ]

    let postsElements =
        posts.map (p => <Post message={p.message} counts={p.counts}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;