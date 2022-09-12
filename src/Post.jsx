import { Avatar } from '@mui/material';
import React, {forwardRef} from 'react';
import InputOption from './InputOption';
import './Post.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Post = forwardRef(({name, description, message, photourl}, ref) => {
    const user = useSelector(selectUser)
    return (
        <div ref={ref} className='post'>
            <div className="post__header">
                <Avatar src={photourl ? photourl : AccountCircleIcon}/>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOption  Icon={ThumbUpOffAltIcon} text="Like"/>
                <InputOption  Icon={CommentIcon} text="Comment"/>
                <InputOption  Icon={ShortcutIcon} text="Share"/>
                <InputOption  Icon={SendIcon} text="Send"/>

            </div>
        </div>
    );
})

export default Post;
