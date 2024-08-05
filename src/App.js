import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>

      <NavBar />
      <Home />

    </BrowserRouter>
  );
}

export default App;
