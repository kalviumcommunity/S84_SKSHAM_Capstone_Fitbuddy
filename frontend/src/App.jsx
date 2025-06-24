

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Footer from './components/Footer';
import FitnessCalculator from './components/FitnessCalculator';

const App = () => {
  return (
    <div className="dark bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/calculator" element={<FitnessCalculator />} />
      </Routes>
     
    </div>
  );
};

export default App;
