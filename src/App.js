import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import {BrowserRouter as Router,Switch,Route,Routes} from "react-router-dom"

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact  element={<Home/>}/>
        </Routes>
    </Router>
  );
}

export default App;
