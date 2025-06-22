import React, { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FaSearch, FaBars, FaTimes, FaUser, FaSignOutAlt, FaUserCircle } from 'react-icons/fa'
import { logout } from '../store/slices/authSlice'
import Logo from '../assets/images/header.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
    setIsUserMenuOpen(false);
  };

  const handleProfileClick = () => {
    navigate('/profile');
    setIsUserMenuOpen(false);
  };

  const navLinkClasses = ({ isActive }) =>
    `text-base font-medium transition-colors duration-300 ${isActive ? 'font-bold text-black' : 'text-[#A6A6A6] hover:text-black'}`;

  const renderUserAvatar = () => {
    if (user?.avatar) {
      return <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover" />;
    }
    return <FaUser size={16} />;
  };

  return (
    <header className="bg-white shadow-sm relative">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="QuwwaHealth Logo" className="h-14 mr-3" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={navLinkClasses}>Home</NavLink>
          <NavLink to="/about" className={navLinkClasses}>About Us</NavLink>
          <NavLink to="/programs" className={navLinkClasses}>Our Programs</NavLink>
          <NavLink to="/contact" className={navLinkClasses}>Contact Us</NavLink>
          <NavLink to="/blogs" className={navLinkClasses}>Blogs</NavLink>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="p-3 rounded-md bg-[#54BD95] hover:opacity-90 transition-opacity duration-300">
            <FaSearch size={18} className="text-white" />
          </button>
          
          {isAuthenticated && user ? (
            <div className="relative">
              <button
                onClick={toggleUserMenu}
                className="flex items-center space-x-2 text-base font-medium text-gray-700 hover:text-black transition-colors duration-300 px-4 py-2"
              >
                {renderUserAvatar()}
                <span className="hidden md:inline">{user?.name || 'User'}</span>
              </button>
              
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b">
                    <div className="font-medium">{user?.name}</div>
                    <div className="text-xs text-gray-500">{user?.email}</div>
                  </div>
                  <button
                    onClick={handleProfileClick}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                  >
                    <FaUserCircle size={14} />
                    <span>Profile</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                  >
                    <FaSignOutAlt size={14} />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/auth" className="text-base font-medium text-[#A6A6A6] hover:text-black transition-colors duration-300 px-4 py-2">Login</Link>
              <Link to="/auth" className="text-base font-medium bg-[#54BD95] text-white px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity duration-300">
                Sign Up
              </Link>
            </>
          )}
        </div>
        
        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-20">
          <nav className="flex flex-col items-center space-y-4 p-6">
            <NavLink to="/" onClick={toggleMenu} className={navLinkClasses}>Home</NavLink>
            <NavLink to="/about" onClick={toggleMenu} className={navLinkClasses}>About Us</NavLink>
            <NavLink to="/programs" onClick={toggleMenu} className={navLinkClasses}>Our Programs</NavLink>
            <NavLink to="/contact" onClick={toggleMenu} className={navLinkClasses}>Contact Us</NavLink>
            <NavLink to="/blogs" onClick={toggleMenu} className={navLinkClasses}>Blogs</NavLink>
            <hr className="w-full border-gray-200" />
            <div className="flex flex-col items-center space-y-4 w-full">
              <button className="p-3 rounded-md bg-[#54BD95] hover:opacity-90 transition-opacity duration-300 w-full max-w-xs flex items-center justify-center">
                <FaSearch size={18} className="text-white" />
              </button>
              
              {isAuthenticated && user ? (
                <>
                  <div className="w-full max-w-xs text-center py-2 border border-gray-300 rounded-lg flex items-center justify-center space-x-3">
                    {renderUserAvatar()}
                    <div>
                      <div className="font-medium text-gray-800">{user?.name}</div>
                      <div className="text-xs text-gray-500">{user?.email}</div>
                    </div>
                  </div>
                  <Link
                    to="/profile"
                    onClick={toggleMenu}
                    className="text-base font-medium bg-[#54BD95] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity duration-300 w-full text-center max-w-xs flex items-center justify-center space-x-2"
                  >
                    <FaUserCircle size={16} />
                    <span>Profile</span>
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      toggleMenu();
                    }}
                    className="text-base font-medium bg-red-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity duration-300 w-full text-center max-w-xs flex items-center justify-center space-x-2"
                  >
                    <FaSignOutAlt size={16} />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <Link to="/auth" onClick={toggleMenu} className="text-base font-medium text-[#A6A6A6] hover:text-black transition-colors duration-300 border border-gray-300 px-6 py-2 rounded-lg w-full text-center max-w-xs">Login</Link>
                  <Link to="/auth" onClick={toggleMenu} className="text-base font-medium bg-[#54BD95] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity duration-300 w-full text-center max-w-xs">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header 