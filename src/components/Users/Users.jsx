import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, totalUserCount, pageSize, onPageChanged, users, ...props}) => {

    return <div>
        <Paginator currentPage={currentPage} totalUserCount={totalUserCount}
                   pageSize={pageSize} onPageChanged={onPageChanged}/>
        <div>
            {users.map(u =>
                <User user={u}
                      followingInProgress={props.followingInProgress}
                      unfollow={props.unfollow}
                      follow={props.follow}
                      key={u.id}
                />)
            }
        </div>
    </div>
}

export default Users;