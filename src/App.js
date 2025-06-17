import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import SignUp from './SignUp';
import Login from './Login';
import Bookings from './Bookings';
import Book from './Book';
import Navigation from './Navigation';

function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Bookings' element={<Bookings/>}/>
        <Route path='/Book' element={<Book/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
