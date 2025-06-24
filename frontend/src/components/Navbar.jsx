import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Check login state on load
  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token)
  }, [])

  // Listen to changes from other tabs/windows
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"))
    }
    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsLoggedIn(false)
    navigate("/")
  }

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold text-green-400">FitBuddy</Link>

      <div className="flex gap-4 items-center text-sm">
        {isLoggedIn ? (
          <>
            <Link to="/" className="hover:text-green-400 transition">Home</Link>
            <Link to="/calculator" className="hover:text-green-400 transition">Calorie Calculator</Link>
            <button
              onClick={handleLogout}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-green-400 transition">Login</Link>
            <Link to="/signup" className="hover:text-green-400 transition">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
