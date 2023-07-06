import React from 'react'
import { logout, useAuth } from '../firebase'

const Nav = () => {
    const  currentUser = useAuth();
  return (
    <>
        <div>
            <div>dynamic-notesapp</div>
            <div>Logged-in as: {currentUser?.email}</div>
            {
                currentUser && <button onClick={() => logout()}>Logout</button>
            }
        </div>
    </>
  )
}

export default Nav