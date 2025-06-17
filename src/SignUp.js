import {useState} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Signup.css';


export default function SignUp(){
    const initialData = {Name:"",Email:"",Password:""};
    const [formData,setFormData] = useState(initialData);

    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    async function handleSubmit(e){
        e.preventDefault();
        try{
            const result = fetch('http://localhost:5000/SignUp',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(formData)
            });
            const data = await result.json();
            console.log(data);
        }catch(error){
            console.error(error);
        }
        setFormData(initialData);
    }

    return (
        <div classNamme=' row form align-items-center'>
            <div className='container form-container p-5 shadow bg-body-tertiary rounded'>
                <h1 className='text-center mb-5'>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={formData.Name} placeholder='Username' name='Name' onChange={handleChange}/>
                    <input type='email' value={formData.Email} placeholder='Email Address' name='Email' onChange={handleChange}/>
                    <input type='password' value={formData.Password} placeholder='Password' name='Password' onChange={handleChange}/>
                    <button type='submit' className='btn btn-primary mt-4'>Sign Up</button>
                </form>
                <div className='alternative mt-4'>
                    <span className=''>Already have an account?<Link to='/Login' className=''> Log in</Link></span>
                </div>
            </div>
        </div>
    )
}