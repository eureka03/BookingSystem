import 'bootstrap/dist/css/bootstrap.css';
import './Homepage.css';
import { Link } from 'react-router-dom';


export default function Homepage(){
   

    return (
        <div class="row Homepage align-items-center">
            <div class=' welcome'>
                <div class="row WelcomeText justify-content-center mb-5">
                    <h1 class='col-5 text-center'>Welcome to EuEuSalon Booking System</h1>
                </div>
                <div class="row justify-content-center">
                    <Link to='/SignUp' class='col-2 btn btn-primary'>Start Booking</Link>
                </div>
            </div>
        </div>
    )
}