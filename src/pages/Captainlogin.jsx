import React, {useState} from 'react'
import { Link } from 'react-router-dom'
const Captainlogin = () => {
    const [email,setEmail]=useState('');
      const [password,setPassword]=useState('');
      const [captainData, setCaptainData]=useState({});
      const submitHandler=(e)=>{
        e.preventDefault();
        console.log(email,password);
         setCaptainData({
          email:email,
          password:password
         })
        setEmail('');
        setPassword('');
      }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'> 
        <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg" alt="uber_logo" />
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
            <input 
            required 
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email" 
            placeholder='email@example.com' />
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input 
            required 
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password" 
            placeholder='password' />
            <button
             className='bg-[#111] text-white  font-semibold rounded mb-3 px-4 py-2 w-full text-lg placeholder:text-base'
            >Login</button>
          </form>
          <p className='text-center'>Join a fleet ? <Link to='/captain-signup' className='text-blue-600'>Register As a Captain</Link></p>
        </div>
        <div>
        <Link 
             to='/login'
             className='flex items-center justify-center bg-[#f3c164] text-white  font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-base'
            >Sign In As User</Link>
        </div>
        </div>
  )
}

export default Captainlogin
