import './App.css';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import Appbar from './components/Appbar.jsx';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import AuthService from './utils/AuthService.js';
import { useEffect } from 'react';
import SongComponent from './components/SongComponent.jsx';
import AddSongForm from './components/AddSongForm.jsx';

function App() {
  const user = AuthService.getCurrentUser();

  function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  };

  useEffect(() => {
    if (!!user) {
      const userData = parseJwt(user.token);
      if (userData.exp < Date.now() / 1000) {
        AuthService.logout();
      }
    }
  }, [user]);

  return (
    <div className="App">

    <Router>
    <Appbar/>
      <Routes>
        <Route path="/" element={<SongComponent/>}></Route>
        <Route path="/addSong" element={<AddSongForm/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
