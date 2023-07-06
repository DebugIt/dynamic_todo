import React from 'react'
import { useNavigate } from 'react-router-dom';
import { signGoog, useAuth } from '../firebase'

const Signin = () => {

    const currentUser = useAuth();
    const navigate = useNavigate()
    if(currentUser){
        navigate('/home')
    }
    
  return (
    <>
        <button onClick={() => signGoog()}>Continue w/ google</button>
    </>
  )
}

export default Signin