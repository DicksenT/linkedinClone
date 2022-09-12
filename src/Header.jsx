import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { logout, selectUser } from './features/counter/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';

const Header = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const logoutOfApp=() =>{
        dispatch(logout());
        auth.signOut()
    }
    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" onClick={logoutOfApp} alt="" />
            <div className="header__search">
                <SearchIcon/>
                <input type="text" placeholder='Search' />
            </div>
            </div>
            <div className="header__right">
            <HeaderOptions Icon={HomeIcon} text="Home"/>
            <HeaderOptions Icon={SupervisorAccountIcon} text="My Network"/>
            <HeaderOptions Icon={BusinessCenterIcon} text="Jobs"/>
            <HeaderOptions Icon={ChatIcon} text="Message"/>
            <HeaderOptions Icon={NotificationsIcon} text="Notifications"/>
            <HeaderOptions className="avatarlogo" onClick={logoutOfApp} Icon={user.photoUrl ? user.photoUrl : AccountCircleIcon} text={user.displayName}
            />

            </div>
        </div>
    );
}

export default Header;
