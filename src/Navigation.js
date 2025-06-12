import {Link} from 'react-router-dom';
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Navigation.css';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function Navigation(){

    const [open,setOpen] = useState(true);
    
    const handleOpen = () => {
        setOpen(!open);
    }

    const handleClose = () =>{
        setOpen(!open);
    }


    return (
          <nav className='mt-4 row justify-content-end'>
            <div className='navLinks row justify-content-end t-5 position-absolute '>
              {open && (
                <div className= 'navstuff text-end bg-body-tertiary shadow'>
                    <CloseIcon onClick={handleClose} />
                    <Link to='/' className='d-block text-start text-start mb-2 mt-5'><HomeIcon/> Home</Link>
                    <Link to='/profile' className='d-block text-start mb-2'><PersonOutlineIcon/>Profile </Link>
                    <Link to='/Bookings' className='d-block text-start mb-2'><ListAltIcon/> Bookings</Link>
                    <Link to='/Book' className = 'd-block text-start mb-2'><CalendarMonthIcon/>Make a Booking</Link>
              </div>)}
              {!open && (<div className='text-end'>
                <MenuIcon onClick={handleOpen}/>
              </div>)}
            </div>
                  
            </nav>
    )
}