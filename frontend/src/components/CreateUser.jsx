import React, { useState } from "react";
//import { toast } from 'react-toastify';
//import { useNavigate } from 'react-router-dom';


function CreateUser () {

    


//registration states
    const [ username, setUsername] = useState ('');
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ profilePic, setProfilePic ] = useState('');
    const [ avatar, setAvatar ] = useState('');

    const createUser = async (newUser) => {
        try {
            const response = await fetch ('http://localhost:8000/api/users', {
            method: 'POST',
            headers:  {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(newUser)
        });

        const data = await response.json();

        console.log(`Hooray! User ${data.username} has been created`)

        }catch(error){
            console.log('Whoops, something went wrong! User has not been created')
        }

    }
    
    const handleUsername = (ev) => {
        setUsername(ev.target.value);
    }

    const handleFirstName = (ev) => {
        setFirstName(ev.target.value);
    }
    const handleLastName = (ev) => {
        setLastName(ev.target.value);
    }
    const handleEmail = (ev) => {
        setEmail(ev.target.value);
    }
    const handlePassword = (ev) => {
        setPassword(ev.target.value);
    }
    const handleProfilePic = (ev) => {
        setProfilePic(ev.target.value);
    }
    const handleAvatar = (ev) => {
        setAvatar(ev.target.value);
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();

        const newUser = {
            username,
            firstName,
            lastName,
            email,
            password,
            profilePic,
            avatar,
        }
        createUser(newUser);

        setUsername('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setProfilePic('');
        setAvatar('');
    };

  


    return (


    <form className="create-account-form" onSubmit = {handleSubmit} >

       
            <div className="form-header">
            {/* <h1>Create an Account</h1> */}
            </div>

         <div className="form-body" >   
             
            <div className="username-input">
                <label className="lable-title">Username</label>
                <input className="form-input" type="text" placeholder="Enter Username" value={username} required
                onChange= {handleUsername}/>
            </div>
            <div className="firstName-input">
            <label className="lable-title">First Name</label>
                <input className="form-input" type="text" placeholder="Enter First Name" value={firstName} required
                onChange= {handleFirstName} />
            </div>
            <div className="lastName-input">
            <label className="lable-title">Last Name</label>
                <input className="form-input" type="text" placeholder="Enter Last Name" value={lastName} required
                onChange={handleLastName} />
            </div >
            <div className="email-input">
            <label className="lable-title">Email Address</label>
                <input className="form-input" type="email" placeholder="Enter Email Address" value={email} required
                onChange={handleEmail} />
            </div>
            <div className="password">
            <label className="lable-title">Password</label>
                <input className="form-input" type="password" placeholder="Enter Password" value={password} required
                onChange={ handlePassword} />
            </div>
            <div className="avatar">
            <label className="lable-title">Avatar</label>
                <input className="form-input" type="url" placeholder="Paste URL here" value={avatar} 
                onChange= { handleAvatar} />
            </div>
            <div className="profile-pic">
            <label className="lable-title">Profile Pic URL</label>
                <input className="form-input" type = "url" placeholder="Paste URL here" value={profilePic}
                onChange={handleProfilePic} />

            </div>
            <button type="submit">Create Account</button>
            
            
        </div>
     </form>   
    )
}

export default CreateUser;