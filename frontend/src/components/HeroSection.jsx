import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    const isLoggedIn = localStorage.getItem("token")
    if (!isLoggedIn) {
      navigate('/signup')
    }
  }

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1599058917212-d750089bc06d?auto=format&fit=crop&w=1740&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to FitBuddy</h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          Track your workouts, calculate calories, and achieve your fitness goals.
        </p>
        <button
          onClick={handleGetStarted}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition"
        >
          Get Started
        </button>
      </div>
    </section>
  )
}

export default HeroSection
