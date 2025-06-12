import 'bootstrap/dist/css/bootstrap.css';
export default function Bookings(){
    const data = [
        {
            name:"Eureka",
            date:'10/09/2025',
            status:"Not Done"
        },
        {
            name:"Angel",
            date:'02/02/2025',
            status:'done'
        },
        {
            name:'Una',
            date:'15/06/2025',
            status:'Not Done'
        }
    ];
    if(data.length ===0){
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
                
                    {data.map((book)=>
                        <div className='Bookings row justify-content-center'>
                            <div className='col-md-3 text-bg-info me-3 text-center mt-3'>
                                {book.name}
                            </div>
                            <div className='col-md-3 text-bg-info me-3 text-center mt-3'>
                                {book.date}
                            </div>
                            <div className='col-md-3 text-bg-info me-3 text-center mt-3'>
                                {book.status}
                            </div>
                        </div>
                   )}                       
                

            </div>
        )
    }
}