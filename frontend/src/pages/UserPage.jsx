import { response } from 'express';
import React, { useState, useEffect } from 'react'
// import User from '../../../backend/src/models/User'
// import { get } from '../../../backend/src/routes/users';

import UserCard from '../components/UserCard'


function UserPage() {

    const [ allUsers, setAllUsers ] = useState([]);

    const getData = async () => {
        const response = await fetch('http://localhost:800/api/*/users', {
            headers :{
                'SameSite': 'None'
            }
        })

        const data = await response.json();

        console.log('Data: ', data);
        const { allUsers } = data;
        setAllUsers(allUsers);
        console.log('Users: ', allUsers);
    };

    useEffect(() => {
        getData();
    }, []);

  return (
    <div className='users'>
        <h1>Users: </h1>
        <div className='container'>
            { allUsers.map((users) => <UserCard users={ users } />) }
            
        <UserCard />
        </div>
        
    </div>
  )
}

export default UserPage