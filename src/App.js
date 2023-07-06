import './App.css';
// import { useAuth } from './firebase';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './Components/Nav';
import Signin from './Components/Signin';
import Home from './Components/Home';

function App() {

  
  

  return (
    <>
      <Nav /> <br />
      <Router>
        <Routes>
          <Route path='/' element={<Signin />}/>
          <Route path='/home' element={<Home />}/>

        </Routes>
      </Router>


    </>
  );
}

export default App;
