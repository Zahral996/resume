import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import { HashRouter as Router } from 'react-router-dom';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />}/>
          <Route path='/projects' element={<Projects />}/>
          
        </Routes>
        <Footer /> 
      </Router>
    </div>
  );
}

export default App;
