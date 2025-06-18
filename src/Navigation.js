import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Navigation.css';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LogoutIcon from '@mui/icons-material/Logout';
import ReviewsIcon from '@mui/icons-material/Reviews';

export default function Navigation({loggedIn,setLoggedIn}){

    const [open,setOpen] = useState(false);
    const navigate = useNavigate();
    
    const handleOpen = () => {
        setOpen(!open);
    }


    const handleClose = () =>{
        setOpen(!open);
    }

    const handleSignOut= () =>{
      setLoggedIn(false);
    }


    return (
          <nav className='mt-4 row justify-content-end'>
            <div className='navLinks row justify-content-end t-5 position-absolute '>
              {open && (
                <div className= 'navbar navstuff text-end bg-body-tertiary p-3 shadow' onClick={handleClose}>
                    <span><CloseIcon onClick={handleClose} /></span>
                    <Link to='/' className='d-block text-start text-start mb-2 mt-5'><HomeIcon/> Home</Link>
                    <Link to='/profile' className='d-block text-start mb-2'><PersonOutlineIcon/>{loggedIn?<span>Eureka</span>:<span>Profile</span>}</Link>
                    <Link to='/Bookings' className='d-block text-start mb-2'><ListAltIcon/> Bookings</Link>
                    <Link to='/Book' className = 'd-block text-start mb-2'><CalendarMonthIcon/> Make a Booking</Link>
                    <Link to='/reviews' className='d-block text-start mb-2'><ReviewsIcon/> Reviews</Link>
                    <hr/>
                    <Link to='' className='text-start' onClick={handleSignOut} ><LogoutIcon /> Sign out</Link>
              </div>)}
              {!open && (<div className='text-end'>
                <MenuIcon onClick={handleOpen}/>
              </div>)}
            </div>
                  
            </nav>
    )
}