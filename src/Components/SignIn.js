import React from 'react'
import GoogleButton from 'react-google-button'
import {auth} from '../firebase'
import { GoogleAuthProvider , signInWithRedirect } from 'firebase/auth'

const GoogleSignIn = () =>{
    const Provider = new GoogleAuthProvider()
    signInWithRedirect(auth , Provider)
}
const SignIn = () => {
  return (
    <div className='flex justify-center'>
     <GoogleButton onClick={GoogleSignIn}/>
    </div>
  )
}

export default SignIn
