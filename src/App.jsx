import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Footer/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Services from './Pages/Services';
import Partnership from './Pages/Partnership';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import { UserProfile } from './Pages/UserProfile';
import Property from './Pages/Property';
import TrendProp from './Components/Trendingprop/TrendProp';
import Choose from './Components/choose/choose';
import Testimonials from './Components/Testimonials/Testimonials';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/property" element={<Property />} />
        </Routes>
        <Choose />
        <Testimonials />
        <TrendProp />
        <About />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
