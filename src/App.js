import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import Menu from './pages/Menu'
import {BrowserRouter as Router,Switch,Route,Routes} from "react-router-dom"

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact  element={<Home/>}/>
          <Route path="/menu" exact  element={<Menu/>}/>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
