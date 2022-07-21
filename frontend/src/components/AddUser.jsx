import React, { useState } from "react";


function AddUser ({}) {


//registration states
    const [ username, setUsername] = useState ('');
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

//states for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);


    const handleUsername = (ev) => {
        setUsername(ev.target.value);
        setSubmitted(false);
    }

    const handleFirstName = (ev) => {
        setFirstName(ev.target.value);
        setSubmitted(false);
    }
    const handleLastName = (ev) => {
        setLastName(ev.target.value);
        setSubmitted(false);
    }
    const handleEmail = (ev) => {
        setEmail(ev.target.value);
        setSubmitted(false);
    }
    const handlePassword = (ev) => {
        setPassword(ev.target.value);
        setSubmitted(false);
    }

    

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if(username === '' || firstName === '' || lastName === '' || email === '' || password === '' ) {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }

        setUsername('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    };
//account successfully created
    const userCreated = () => {
        return(
            <div className="success" style= { { display:submitted ? '' : 'none',
        }}>
        <h2>Hooray! Your account has been created!</h2>
        </div>
        );
    };

//creating account failed

const userNotCreated = () => {
    return(
        <div className="error" style= { {display:error ? '' : 'none',
    } }>
        <h2>Please enter all fields</h2>
    </div>
    );
};

      return (

        <div className="addCard">
            <div>
            <h1>Create an Account</h1>
            </div>
            <div className="createdOrNot">
                {userCreated()}
                {userNotCreated()}

            </div>
            <form onSubmit = {handleSubmit} > 
            <div className="username-input">
                <input type="text" placeholder="Enter Username" value={username} required
                onChange= {handleUsername}/>
            </div>
            <div className="firstName-input">
                <input type="text" placeholder="Enter First Name" value={firstName} required
                onChange= {handleFirstName} />
            </div>
            <div className="lastName-input">
                <input type="text" placeholder="Enter Last Name" value={lastName} required
                onChange={handleLastName} />
            </div >
            <div className="email-input">
                <input type="email" placeholder="Enter Email Address" value={email} required
                onChange={handleEmail} />
            </div>
            <div className="password">
                <input type="password" placeholder="Enter Password" value={password} required
                onChange={ handlePassword} />
            </div>
            <button type="submit">Create Account</button>
            
            </form>
        </div>
    )
}

export default AddUser;