import React from "react";
import s from "./Paginator.module.css";

let Paginator = ({totalUserCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUserCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {  // pagesCount
        pages.push(i);
    }
    debugger;
    return <div>
        {pages.map(p => {
            return <span className={currentPage === p && s.selectedPage}
                         onClick={() => {
                             onPageChanged(p);
                         }}>{p}</span>
        })}
    </div>
}

export default Paginator;