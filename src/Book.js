import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
import './Book.css'

export default function Book(){
    const initialdata = {fullname:"",date:""};
    const [bookingData,setBookingData] = useState({initialdata});

    const handleChange =(e)=>{
        setBookingData({...bookingData,[e.target.name]:e.target.value});
    }

    return(
        <div className=''>
            <div className='container align-items-center form-contain p-5 mt-3'>
                <h1 className='text-center'>Make a booking</h1>
                <form>
                    <input type='text' name='fullname' value={bookingData.fullname} placeholder='FullName' onChange={handleChange}/>
                    
                    <label for='styles'>Select a style:</label>
                    <select>
                        <option name='none'>None</option>
                        <option name='fade'>Fade</option>
                        <option name='knotless'>Knotless Braids</option>
                        <option name='wig'>Wig Install</option>
                        <option name='manicure'>Manicure</option>
                        <option name='pedicure'>Pedicure</option>
                    </select>
                    <input type='date'/>
                    <button type='submit' className='btn btn-sm btn-success mt-4'>Book</button>
                    
                </form>
            </div>
            
        </div>
    )
}