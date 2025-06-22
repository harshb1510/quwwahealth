import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Programs from './pages/Programs'
import ContactUs from './pages/ContactUs'
import Blogs from './pages/Blogs'
import BlogPost from './pages/BlogPost'
import Auth from './pages/Auth'
import Terms from './pages/Terms'
import './App.css'

function App() {
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
          <Route path="terms" element={<Terms />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
