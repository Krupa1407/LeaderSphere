import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<h1>product</h1>} />
          <Route exact path="/add" element={<h1>add</h1>} />
          <Route exact path="/update" element={<h1>update</h1>} />
          <Route exact path="/logout" element={<h1>logout</h1>} />
          <Route exact path="/profile" element={<h1>profile</h1>} />
          <Route exact path="/signup" element={<SignUp/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
