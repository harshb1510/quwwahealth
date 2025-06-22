import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import loginBg from '../assets/images/login.png'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)

  const switchMode = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin)
  }

  return (
    <div className="min-h-screen flex items-stretch bg-gray-50">
      <div className="relative flex-1 hidden lg:block">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={loginBg}
          alt="Students playing basketball"
        />
      </div>
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#FDEECD]">
        {isLogin ? (
          <LoginForm onSwitchMode={switchMode} />
        ) : (
          <SignupForm onSwitchMode={switchMode} />
        )}
      </div>
    </div>
  )
}

export default Auth 