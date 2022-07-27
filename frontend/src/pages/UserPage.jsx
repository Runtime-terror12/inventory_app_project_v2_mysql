//import { response } from 'express';
import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader';
// import LinkButton from '../components/productPage/LinkButton';
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
        <h1 className='users'>Users </h1>
        <div className='container'>
             {allUsers.length > 0 ? allUsers.map((users) => <UserCard key={ users.id } users={ users } />) 
        : <Loader />}
        
           {/* <LinkButton to={`/users/${id}`} text={'More Info'}/> */}
        
        </div>
        
    </div>
  )
}

export default UserPage;