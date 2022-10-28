import React from "react";
import s from "./users.module.css"

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://sun9-37.userapi.com/impf/c604827/v604827522/2a291/QK6vb_O9l0g.jpg?size=431x604&quality=96&sign=5b3f42b7f93cd4e8e4b368800329d9ef&c_uniq_tag=AP3ocNVgUzuuBDptMsrDqyScFXRJPQav0JuW8Lv5mI8&type=album',
                    followed: true,
                    fullName: "Dmitry",
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://sorokulya.ru/wp-content/uploads/2017/04/roza-i-zakolki-v-pricheski-stilya-tresh-u-devushki.jpg',
                    followed: true,
                    fullName: "Sasha",
                    status: 'I am a boss too',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://fikiwiki.com/uploads/posts/2022-02/1644988639_43-fikiwiki-com-p-krutie-kartinki-dlya-vk-43.jpg',
                    followed: true,
                    fullName: "Andrew",
                    status: 'I am a boss too',
                    location: {city: 'Penza', country: 'Russia'}
                },
                {
                    id: 4,
                    photoUrl: 'https://sun9-71.userapi.com/impg/8Qejfg18G9z744gulkT1tL5SknTY2zdXFnl1yQ/GmMnKwYQKv4.jpg?size=604x604&quality=96&sign=2e4bd0ac319b8ab02f9c5c5c15b5fe4f&type=album',
                    followed: false,
                    fullName: "Juan",
                    status: 'I am no a boss',
                    location: {city: 'Madrid', country: 'Spain'}
                }
            ]
        )
    }

    return <div>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.userPhoto} src={u.photoUrl} alt="ava"/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>
                            : <button onClick={ () => {props.follow(u.id)} }>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;