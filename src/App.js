import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import WhyUs from './pages/WhyUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/WhyUs' element={<WhyUs />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/ContactUs' element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
 