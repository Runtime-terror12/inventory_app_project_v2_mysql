import React from 'react'
 import CreateUser from '../components/CreateUser'

function CreateUserPage() {
  return (
    <div className='user-page-header' style={{flexDirection:'column'}}>
        <h1>Create a New Account</h1>
        <CreateUser /> 


    </div>
  )
}

export default CreateUserPage;