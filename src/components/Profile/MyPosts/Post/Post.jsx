import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://sun9-54.userapi.com/c5428/u45374530/100950583/y_82d951a3.jpg' alt='girl'></img>
            <div className={s.postMessage}>{props.message}</div>
            <div>
                <span>{props.counts} Likes!</span>
            </div>
        </div>
    )
}

export default Post;