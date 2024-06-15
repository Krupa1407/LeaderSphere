import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
        {/* <Route exact path="/" element={<Nav/>} /> */}
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
