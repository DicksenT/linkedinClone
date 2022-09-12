import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import './Login.css'
import { login } from './features/counter/userSlice';
import { auth } from './firebase';
const Login = () => {
    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [profilePic, setProfilePic]= useState('')
    const dispatch = useDispatch();
    const register =() => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })
            .then(() => {
                dispatch(
                    login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic
                }))
            })
        })
        .catch(error => alert(error))
    };
    const loginToApp =(e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => (
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL
                }
            ))
        )).catch((error) => alert(error))
    };
    return (
        <div className='login'>
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/225px-LinkedIn_Logo.svg.png" alt="" />
             
             <form>
                <input type="text" placeholder='Full Name' value={name} onChange={e => setName(e.target.value)} required />
                <input type="text" value={profilePic}onChange={e => setProfilePic(e.target.value)} placeholder='Profile Picture Url (Optional)' />
                <input type="Email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' required/>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' required/>
                <button type='submit' onClick={loginToApp}>Sign In</button>
             </form>
             <p>Not a member? {" "}
                <span className='login__register' onClick={register}>Register Now</span>
             </p>
        </div>
    );
}

export default Login;
