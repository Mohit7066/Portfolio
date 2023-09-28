import React from 'react'
import Navbar from '../components/Navv';
// import Ddown from "../components/Dropdown"
import Aboutme from '../components/Aboutme';
import ContactForm from '../components/Contactform';
import Footer from '../components/Footer';
import Imagegrid from '../components/Imagegrid';
import Slider from '../components/Slider';
import Bgimg from '../components/Bgimg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Bgimg></Bgimg>
      <Aboutme />
      <Slider />
      <Imagegrid />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
