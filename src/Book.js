import 'bootstrap/dist/css/bootstrap.css';

export default function Book(){
    return(
        <div className='container'>
            <div className='row container row justify-content-center align-items-center'>
                <h1 className='text-center'>Make a booking</h1>
                <form>
                    <input type='text' name='fullname' placeholder='FullName'/>
                    <input type='date' name='date'/>
                    
                </form>
            </div>
            
        </div>
    )
}