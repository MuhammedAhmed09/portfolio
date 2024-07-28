import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/ContactUs' element={<ContactUs />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
