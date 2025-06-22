import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Programs from './pages/Programs'
import ContactUs from './pages/ContactUs'
import Blogs from './pages/Blogs'
import BlogPost from './pages/BlogPost'
import Auth from './pages/Auth'
import Profile from './pages/Profile'
import EmailVerification from './components/EmailVerification'
import Terms from './pages/Terms'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import { getProfile, finishInitialLoad } from './store/slices/authSlice'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const { initialLoad } = useSelector((state) => state.auth)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      dispatch(getProfile())
    } else {
      dispatch(finishInitialLoad())
    }
  }, [dispatch])

  if (initialLoad) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#54BD95]"></div>
      </div>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="programs" element={<Programs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blog/:id" element={<BlogPost />} />
          <Route path="auth" element={<Auth />} />
          <Route path="profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="terms" element={<Terms />} />
        </Route>
        <Route path="/verify-email" element={<EmailVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  )
}

export default App
