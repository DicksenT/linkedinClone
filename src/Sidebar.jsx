import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import "./Sidebar.css"

const Sidebar = () => {
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    const user= useSelector(selectUser)
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWJzdHJhY3QlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="" />
                <Avatar src={user.photoUrl} className='sidebar__avatar'>
                    {user.email[0].toUpperCase()}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>3</p>
                </div>
                <div className="sidebar__stat">
                    <p>View On Post</p>
                    <p className='sidebar__statNumber'>1</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("Programming")}
                {recentItem("Front-end")}
            </div>
            <div className="sidebar__discover">
                <div className="sidebar__tags">
                <p>Groups</p>
                <p>Events</p>
                <p>Followed Hashtags</p>
                </div>

                <div className="sidebar__discoverMore">
                    <p>Discover more</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
