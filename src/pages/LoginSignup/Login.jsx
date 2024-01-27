import React from 'react'
import "../../styles/Login.css"
import userr from "../../assets/logo/userr.png";
import Header from '../../components/Layouts/Header'
import Footer from '../../components/Layouts/Footer'
import { useState,useEffect} from 'react';
import APIService from '../../api/APIService';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // login function
  const [username,setUsername] =useState('')
  const [password,setPassword] = useState('')
  //set token
  const [token, setToken] = useCookies(['mytoken'])
   const [error,setError] = useState('')
  let navigate = useNavigate()

  useEffect(() =>{
    if(token['mytoken']){
      navigate('/home')
    }
    
  })
 
  const loginBtn = () => {
    APIService.LoginUser({username, password})
    .then((resp) => {if(resp.token){
      setToken('mytoken',resp.token)
    }else{
        setError("Email or Password Incorrect")
        setPassword("")
        setUsername("")
    }})
    // .then((resp) => {setToken('mytoken',resp.token))})
    .then(error => console.log(error))
  }

  
  //login form
  return (
    <>
    <Header/>
    <div className="coonn min-h-screen flex items-center justify-center bg-gray-300">
    <div className="container mx-auto p-16 ">
    <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          {/* <div className="container rounded-2xl bg-gray-500"> */}
          <div className="bg-black sm:mx-auto sm:w-full sm:max-w-lg rounded-3xl"> 
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">
          
             
            <img src={userr} alt="Sign In" className='myimg'/>
          
          <div className="container rounded-2xl bg-gray-900 w-84 h-84"></div>
          <h2 className="bon mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="userName" className="name block text-lg font-medium leading-6 text-white">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder='Enter Email'
                  required
                  value={username} onChange={e => setUsername(e.target.value)}
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-lg font-medium leading-6 text-white">
                  Password
                </label>
                {/* <div className="text-lg">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder='Enter Password'
                  value={password} onChange={e => setPassword(e.target.value)}
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                
                className="bonn flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={loginBtn}
              >
                Sign in
              </button>
              
            </div>
            {error!==null ? (
              <>
              <br></br>
                <span className="error ml-20 text-center text-lg text-danger">{error}</span>
                </>
                 ) :null
                 }
          </div>
          
          <p className=" text-center text-lg text-white">
            Don't have an Account?{' '}
            <a href="/signup" className="font-semibold leading-6 text-white hover:text-indigo-500">
              Register
            </a>
          </p>



        </div>
        </div>
      </div>
         
        </div>
        </div>
        </div>
        <Footer/>
        </>
  )
 
  
  }

export default Login
