import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
  const [username, setUsername] = useState('')

  React.useEffect(() => {
    if(!props.data){
      setUsername('Admin')
    } else {
      setUsername(props.data.firstName)
    }
  }, [props.data])

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }

  return (
    <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
                <div className='w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg'>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
                <div>
                    <h1 className='text-lg text-gray-300 font-medium'>Welcome back,</h1>
                    <h2 className='text-2xl font-bold text-white'>{username} 👋</h2>
                </div>
            </div>
            
            <button 
                onClick={logOutUser} 
                className='bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium px-6 py-3 rounded-xl hover:from-red-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2'
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Log Out</span>
            </button>
        </div>
    </div>
  )
}

export default Header