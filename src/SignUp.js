import {useState} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Signup.css';


export default function SignUp(){
    const initialData = {Name:"",Email:"",Password:""};
    const [formData,setFormData] = useState(initialData);
    const [errors,setErrors] = useState({});
    

    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
        //
    }

    async function handleSubmit(e){
        e.preventDefault();
        validateInputs();
        if(Object.keys(errors).length===0){
            setFormData(initialData);
        }
    }

    function validateInputs(){
        const validateErrors = {}
        if(formData.name.trim() === ''){
            validateErrors.name = 'Username is required';
        }else{
            validateErrors.name ='';
        }

        if(formData.password.trim() === ''){
            validateErrors.password = 'Password is required';
        }else if(!formData.password.length>=8){
            validateErrors.password = 'Password needs to at least be 8 characters';
        }else{
            validateErrors.password ='';
        }

        if(formData.email.trim() === ''){
            validateErrors.email = 'Email is required';
        }else{
            validateErrors.email = '';
        }

        setErrors(validateErrors);
    }

    return (
        <div classNamme=' row form align-items-center'>
            <div className='container form-container p-5 shadow bg-body-tertiary rounded'>
                <h1 className='text-center mb-5'>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    
                    <div className='input-control' >
                        <label for='username'>Username</label>
                        <input type='text'  value={formData.name} id='username' name='name' onChange={handleChange}/>
                    </div>
                    <div className='error-message'>{errors.name}</div>
                    <div className='input-control'>
                        <label for='email'>Email Address</label>
                        <input type='email' value={formData.email}  id='email' name='email' onChange={handleChange} />
                        
                    </div>
                    <div className='error-message'>{errors.email}</div>
                    <div className='input-control'>
                        <label for='password'>Password</label>
                        <input type='password' value={formData.password}  id='password' name='password' onChange={handleChange} />
                        
                    </div>
                    <div className='error-message'>{errors.password}</div>
                    <button type='submit' className='btn btn-primary mt-4'>Sign Up</button>
                </form>
                <div className='alternative mt-4'>
                    <span className=''>Already have an account?<Link to='/Login' className=''> Log in</Link></span>
                </div>
            </div>
        </div>
    )
}