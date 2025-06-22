import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaTwitter } from 'react-icons/fa';

const SignupForm = ({ onSwitchMode }) => {
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Sign up</h1>

        <div className="flex justify-center gap-4 mb-6">
          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 transition-colors">
            <FcGoogle className="bg-white rounded-full text-2xl" />
            Sign up with Google
          </button>
          <button className="flex items-center justify-center w-12 h-10 bg-gray-100 text-blue-400 rounded-md hover:bg-gray-200 transition-colors">
            <FaTwitter />
          </button>
        </div>

        <div className="flex items-center my-8">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
      </div>
        
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 text-left mb-5">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1" htmlFor="school-name">
              School Name
            </label>
            <input type="text" id="school-name" className="w-full p-3 bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"/>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1" htmlFor="user-id">
              User ID
            </label>
            <input type="text" id="user-id" className="w-full p-3 bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"/>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-5 text-left mb-5">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1" htmlFor="district">
              District
            </label>
            <input type="text" id="district" className="w-full p-3 bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"/>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1" htmlFor="state">
              State
            </label>
            <input type="text" id="state" className="w-full p-3 bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"/>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1" htmlFor="country">
              Country
            </label>
            <input type="text" id="country" className="w-full p-3 bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"/>
          </div>
        </div>
        
        <div className="text-left mb-5">
          <label className="block text-sm font-semibold text-gray-800 mb-1" htmlFor="password">
            Password
          </label>
          <input type="password" id="password" placeholder="6+ characters" className="w-full p-3 bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"/>
        </div>

        <div className="flex items-start gap-3 mb-6 text-left text-sm text-gray-500">
          <input type="checkbox" id="terms" className="mt-1 h-5 w-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500" />
          <label htmlFor="terms">
            Creating an account means you're okay with our <a href="#" className="underline text-purple-600">Terms of Service</a>, <a href="#" className="underline text-purple-600">Privacy Policy</a>, and our default <a href="#" className="underline text-purple-600">Notification Settings</a>.
          </label>
        </div>

        <div className="text-center">
            <button
                type="submit"
                className="w-full md:w-auto bg-[#EC4899] text-white font-bold py-3 px-12 rounded-lg hover:bg-pink-600 transition-colors"
            >
                Create Account
            </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-8">
          Already a member?{' '}
          <button type="button" onClick={onSwitchMode} className="font-medium text-purple-600 hover:text-purple-800">
            Sign In
          </button>
        </p>

        <p className="text-xs text-gray-400 mt-8 text-center">
          This site is protected by reCAPTCHA and the Google <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a> apply.
        </p>
      </form>
    </div>
  );
};

export default SignupForm; 