import React from 'react'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <HeroSection />

      {/* Styled Section (Matching Dark Theme) */}
     <section className="bg-[#00000071] py-20 px-4">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">
      Why Choose FitBuddy?
    </h2>
    <p className="text-gray-300 text-lg leading-relaxed">
      FitBuddy empowers you to track your workouts, monitor your nutrition, and stay consistent with your health goals.
      With personalized calorie and macro tracking, it's your all-in-one fitness companion.
    </p>
  </div>
</section>


      <Footer />
    </div>
  )
}

export default Home
