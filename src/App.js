import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import SignUp from './SignUp';
import Login from './Login';
import Bookings from './Bookings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Bookings' element={<Bookings/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
