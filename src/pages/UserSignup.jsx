import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
   const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [userData, setUserData]=useState({});
    const submitHandler=(e)=>{
      e.preventDefault();
      console.log(email,password);
       setUserData({
       fullName:{
        firstName:firstName,
        lastName:lastName
       },
        email:email,
        password:password
       })
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('')
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'> 
    <div>
    <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="uber_logo" />
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <h3 className='text-base font-medium mb-2'>What's your name</h3>
        <div className='flex gap-4 mb-6'>
        <input 
        required 
        value={firstName}
        onChange={(e)=>{setFirstName(e.target.value)}}
        className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
        type="text" 
        placeholder='First Name' />

        <input 
        required 
        value={lastName}
        onChange={(e)=>{
          setLastName(e.target.value)
        }}
        className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
        type="text" 
        placeholder='Last Name' />
        </div>
        <h3 className='text-base font-medium mb-2'>What's your email</h3>
        <input 
        required 
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
        type="email" 
        placeholder='email@example.com' />
        <h3 className='text-base font-medium mb-2'>Enter Password</h3>
        <input 
        value={password}
        onChange={(e)=>{setEmail(e.target.value)}}
        className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
        type="password" 
        placeholder='password' />
        <button
         className='bg-[#111] text-white  font-semibold rounded mb-3 px-4 py-2 w-full text-base placeholder:text-sm'
        >Login</button>
      </form>
      <p className='text-center'>Already hav an account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
    </div>
    </div>
  )
}

export default UserSignup
