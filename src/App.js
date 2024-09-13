import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import { GoChevronUp } from "react-icons/go";


function App() {


  window.onscroll = function (){

    if( window.scrollY >= 190) {
      document.getElementById('btnScroll').style.display = 'block';
      document.getElementById('btnScroll').onclick = function () {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }
    }else {
      document.getElementById('btnScroll').style.display = 'none';
    }
  }
  



  return (
    <BrowserRouter>

      <NavBar />
      <Home />

      <button id='btnScroll'><GoChevronUp /></button>
    </BrowserRouter>
  );
}

export default App;
