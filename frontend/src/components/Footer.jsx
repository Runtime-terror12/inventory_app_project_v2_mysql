import React from 'react'

function Footer() {

    const year = new Date().getFullYear();
  return (
    <div className='footer'>
    <footer >
      Copyright &copy; {year} | Runtime Terror. LLC.
    </footer>
    </div>
  )
}

export default Footer
