import {useState} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Signup.css';


export default function SignUp(){
    const initialData = {name:"",email:"",password:""};
    const [formData,setFormData] = useState(initialData);

    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <div class=' row form align-items-center'>
            <div class='container form-container p-5 shadow p-3 bg-body-tertiary rounded'>
                <h1 class='text-center mb-5'>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={formData.name} placeholder='Username' name='name' onChange={handleChange}/>
                    <input type='email' value={formData.email} placeholder='Email Address' name='email' onChange={handleChange}/>
                    <input type='password' value={formData.password} placeholder='Password' name='password' onChange={handleChange}/>
                    <button type='submit' class='btn btn-primary mt-4'>Sign Up</button>
                </form>
                <div class='alternative mt-4'>
                    <span class=''>Already have an account?<Link to='/Login' class=''> Log in</Link></span>
                </div>
            </div>
        </div>
    )
}