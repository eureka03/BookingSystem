import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';


export default function Login(){
    const initialData = {email:"",password:""};
    const [formData,setFormData] = useState(initialData);

    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <div className='row form align-items-center'>
            <div className='container form-container p-5 shadow P-3 bg-body-tertiary rounded'>
                <h1 className='text-center mb-5'>Log In</h1>
                <form onSubmit={handleSubmit}>
                    <input type='email' value={formData.email} placeholder='Email Address' name='email' onChange={handleChange}/>
                    <input type='password' value={formData.password} placeholder='Password' name='password' onChange={handleChange}/>
                    <button type='submit' className='btn btn-primary mt-4 '>Log In</button>
                </form>
                <div className='alternative mt-4'>
                    <span className=''>Don't have have an account?<Link to='/SignUp' className=''> Sign Up</Link></span>
                </div>
            </div>
        </div>
    )
}