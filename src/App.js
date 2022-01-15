import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import {BrowserRouter as Router,Switch,Route,Routes} from "react-router-dom"

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact  element={<Home/>}/>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
