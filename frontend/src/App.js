import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import Addleader from './components/Addleader';
import LeaderList from './components/LeaderList';
import Updateleader from './components/UpdateLeader';
import AllLeaders from './components/AllLeaders';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
  
        <Route exact path="/" element={<PrivateComponent/>} >
            <Route exact path="/" element={<LeaderList/>} />
            <Route exact path="/add" element={<Addleader/>} />
            <Route exact path="/update/:id" element={<Updateleader/>} />
            <Route exact path="/logout" element={<h1>logout</h1>} />
            <Route exact path="/profile" element={<Profile/>} />
        </Route>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact path="/allleaders" element={<AllLeaders/>} />
          
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
