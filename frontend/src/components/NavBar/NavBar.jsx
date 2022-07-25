import React from 'react'


function Nav() {

  
  return (
    <nav className="topnav">
    <a className="active" href="/">Homepage</a>
    <a href="/create-user">Users Page</a>
    <a href="/">User Page</a>
    <a href="/">Products Page</a>
    <a href="/product/:id">Product Page</a>
    <a href="/user/:id">User Form</a>
    <a href="#Product-Form">Product Form</a>
  </nav>
  )
}

export default Nav;