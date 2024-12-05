import React from 'react'
import "./type.css"

function Type() {
  return (
    <div className='logType'>
        <div>
            <h1>Choose Login Type</h1>
        </div>

        <div className='type'>
            <div className='card'>
                <img className='img' src='client.png' alt='user' />
                <a href='/login/user'><button className='btn'>User Login</button></a>
            </div>

            <div className='card'>
                <img className='img' src='admin.png' alt='admin' />
                <a href='/login/admin'><button className='btn'>Admin Login</button></a>
            </div>
        </div>
    </div>
  )
}

export default Type