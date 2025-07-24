import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
import './Book.css'

export default function Book(){
    const initialdata = {FullName:"",Date:"",Status:""};
    const [bookingData,setBookingData] = useState(initialdata);

    const handleChange =(e)=>{

        setBookingData({...bookingData,[e.target.name]:e.target.value });

    }
    async function fetchData(){
            
            fetch('http://localhost:1000/Bookings',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                }
                ,body:JSON.stringify(bookingData)


            })
            .then(res=> res.json())
            .then(data =>{
                console.log(data);
                
            })
            .catch(err =>{
                console.error('Error:',err);

            })
            
        }
    const handleSubmit = (e) =>{
        e.preventDefault();
       
        
        fetchData();
        
        setBookingData(initialdata);
        
    }
    
    return(
        <div className=''>
            <div className='container align-items-center form-contain p-5 mt-3'>
                <h1 className='text-center'>Make a booking</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='FullName' value={bookingData.FullName} placeholder='FullName' onChange={handleChange} required/>
                    
                    <label for='styles'>Select a style:</label>
                    <select>
                        <option name='none'>None</option>
                        <option name='fade'>Fade</option>
                        <option name='knotless'>Knotless Braids</option>
                        <option name='wig'>Wig Install</option>
                        <option name='manicure'>Manicure</option>
                        <option name='pedicure'>Pedicure</option>
                    </select>
                    <input name='Date' onChange={handleChange} value={bookingData.Date} type='date' required/>
                    <div className='col-3 mx-auto'><button type='submit' className='btn btn-primary mt-4'>Book</button></div>
                    
                    
                </form>
            </div>
            
        </div>
    )
}