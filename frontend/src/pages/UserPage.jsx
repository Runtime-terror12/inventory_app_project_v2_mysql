//import { response } from 'express';
import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader';
// import User from '../../../backend/src/models/User'
// import { get } from '../../../backend/src/routes/users';
import UserCard from '../components/UserCard'


function UserPage() {

    const [ allUsers, setAllUsers ] = useState([]);

    const getData = async () => {
        const response = await fetch('http://localhost:8000/api/users', {
            headers :{
                'SameSite': 'None'
            }
        })

        const data = await response.json();

        console.log('Data: ', data);
        const { users } = data;
        setAllUsers(users);
        console.log('Users: ', allUsers);
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

  return (
    <div className='users'>
        <h1>Users: </h1>
        <div className='container'>
             {allUsers.length > 0 ? allUsers.map((users) => <UserCard key={ users.id } users={ users } />) 
        : <Loader />}  
            
        
        </div>
        
    </div>
  )
}

export default UserPage;