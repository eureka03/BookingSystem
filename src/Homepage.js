import 'bootstrap/dist/css/bootstrap.css';
import './Homepage.css';
import { Link } from 'react-router-dom';
import womanhair from './womanhair2.png';


export default function Homepage(){
   

    return (
        <div className=" Homepage align-items-center d-flex">
            <div className=' welcome'>
                <div className="row WelcomeText justify-content-center mb-5 p-5">
                    <h1 className='text-center'>Welcome to EuEuSalon Booking System</h1>
                </div>
                <div className="row justify-content-center">
                    <Link to='/SignUp' className=' btn btn-primary book'>Start Booking</Link>
                </div>
            </div>
            <div className="image">
                <img src={womanhair} alt='womans hair afro' id='womanhair' />
            </div>
        </div>
    )
}