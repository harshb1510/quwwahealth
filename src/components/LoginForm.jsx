import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import quwwaLogo from '../assets/images/header.png';

const LoginForm = ({ onSwitchMode }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="flex items-center justify-center mb-6">
        <img src={quwwaLogo} alt="Quwwa Health Logo" className="h-12" />
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Nice to see you again</h2>

      <form>
        <div className="mb-5">
          <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="login">
            Login
          </label>
          <input
            id="login"
            type="text"
            placeholder="Email or phone number"
            className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#54BD95]"
          />
        </div>

        <div className="mb-3">
          <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Enter password"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#54BD95]"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute inset-y-0 right-0 px-4 flex items-center text-gray-500"
            >
              {passwordVisible ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6 text-sm">
          <label htmlFor="remember-me" className="flex items-center gap-2 cursor-pointer text-gray-600">
             <div className="relative">
                <input type="checkbox" id="remember-me" className="sr-only"/>
                <div className="block bg-gray-200 w-10 h-6 rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
            </div>
            Remember me
          </label>
          <a href="#" className="font-medium text-[#54BD95] hover:text-green-700">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-[#54BD95] text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
        >
          Sign In
        </button>

        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        
        <button
          type="button"
          className="w-full bg-gray-800 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <FcGoogle size={22}/>
          Sign in with Google
        </button>

        <p className="text-center text-sm text-gray-600 mt-8">
          Don't have an account?{' '}
          <button type="button" onClick={onSwitchMode} className="font-medium text-[#54BD95] hover:text-green-700">
            Sign up now
          </button>
        </p>

        <p className="text-center text-xs text-gray-400 mt-12">
            © Alpro 2025
        </p>
      </form>
    </div>
  );
};

export default LoginForm; 