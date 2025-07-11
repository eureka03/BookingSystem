import 'bootstrap/dist/css/bootstrap.css';
import {useState,useEffect} from 'react';


export default function Bookings(){

    const [bookings,setBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/Bookings')
          .then(res  => res.json())
          .then(data => setBookings(data))
          .catch(err => console.error(err));
      },[]);


    if(bookings.length ===0){
        return(
            <div className='container'>
                <h1 className='text-center'>No Bookings Found!</h1>
                <p className='text-center'>Please make a booking or contact support for assistance</p>
            </div>
        )
    }else{
        return (
            <div className='container pt-4'>
                <h1 className='text-center mb-4'>Your Bookings</h1>
                <div className='row justify-content-center Headings '>
                    <div className='col-md-3 text-bg-primary me-3 text-center'>FullName</div>
                    <div className='col-md-3 text-bg-primary me-3 text-center'>Date</div>
                    <div className='col-md-3 text-bg-primary me-3 text-center'>Status</div>
                </div>
                
                    {bookings.map((book)=>
                        <div className='Bookings row justify-content-center'>
                            <div className='col-md-3 text-bg-info me-3 text-center mt-3'>
                                {book.Name}
                            </div>
                            <div className='col-md-3 text-bg-info me-3 text-center mt-3'>
                                {book.Date}
                            </div>
                            <div className='col-md-3 text-bg-info me-3 text-center mt-3'>
                                {book.Status}
                            </div>
                        </div>
                     )}                       
            </div>
        )
    }
}