import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import "./Feed.css"
import InputOption from './InputOption';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import FlipMove from 'react-flip-move'

const Feed = () => {
    const user = useSelector(selectUser)

    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])
   
    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
                
            )))
        )
    }, []);


    const sendPost = (e) => {
        e.preventDefault()
        db.collection("posts").add({
            name: user.displayName,
            description:user.email,
            message: input,
            photourl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('')

    }
    return (
        <div className='feed'>
            <div className="feed__inputBody">
            <div className="feed__inputContainer">
                <Avatar/>
                <div className="feed__input">
                    <form action="">
                    <input value={input} onChange={e => setInput(e.target.value) } type="text" placeholder='Start a post' />
                    <button onClick={sendPost} type='submit'>post</button>
                    </form>
                </div>
              
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={InsertPhotoIcon} text="Photo" color="#378fe9"/>
                    <InputOption Icon={SmartDisplayIcon} text="Video" color="#5f9b41"/>
                    <InputOption Icon={EventIcon} text="Event" color="#c37d16"/>
                    <InputOption Icon={ArticleIcon} text="Write Article" color="#e16745"/>
                </div>
            </div>
            <hr className='horizon' />

            <FlipMove>            
                {posts.map(({id, data: {name, description, message, photourl}}) => (
                <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photourl={photourl}/>
            ))}
            </FlipMove>


           
        </div>
    );
}

export default Feed;
