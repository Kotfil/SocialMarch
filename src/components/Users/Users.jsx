import React from 'react';
import s from "./users.module.css";
import userPhoto from './../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <NavLink to={'/profile' + u.id}>
                <div>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                </div>
                </NavLink>
                <div>
                 {u.followed ?
                     <button onClick={() => {
                         axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                             withCredentials: true,
                             headers: {
                                 'API-KEY' : '6f302069-c08a-44d1-8177-63c18fc33b5c'
                             }
                         })
                             .then(response => {
                                 if (response.data.resultCode == 0) {
                                     props.unfollow(u.id);
                                 }
                             });

                     }}>Unfollow</button>
                     : <button onClick={() => {
                         axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                             withCredentials: true,
                             headers: {
                                 'API-KEY' : '6f302069-c08a-44d1-8177-63c18fc33b5c'
                             }
                         })
                             .then(response => {
                                 if (response.data.resultCode == 0) {
                                     props.follow(u.id);

                                 }

                             });


                     }}>Follow</button>}
                </div>
            </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>

                        <div>

                    </div>
                    </span>
                </span>
            </div>)
        }
    </div>


}


export default Users;


