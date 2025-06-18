import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import SignUp from './SignUp';
import Login from './Login';
import Bookings from './Bookings';
import Book from './Book';
import Navigation from './Navigation';
import {useState} from 'react';

function App() {

  const [loggedIn,setLoggedIn] = useState(false);

  return (
    <HashRouter>
      <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Login' element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
        <Route path='/Bookings' element={<Bookings/>}/>
        <Route path='/Book' element={<Book/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
