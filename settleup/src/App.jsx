
import './App.css'
import Nav from './components/Nav'

import Profile from './components/Profile';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom"

function App() {

  return (
    <>
    <Router>
    <Routes>
    <Route path='/' exact element={<Nav />} /> 
    <Route path="/profile" element={<Profile />} />
    </Routes>
    </Router>
    </>
    // <>
    // <Nav/>
    // </>
  );
};

export default App
