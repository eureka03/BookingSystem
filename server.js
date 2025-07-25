const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');

app.use(cors());
app.use(express.json());


//Check authorization for Booking page
/*function checkAuth(req,res,next){
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({'message':'unauthorized'}).end();;
    }else{
        const token = authHeader.split(' ')[1];
        if(token === 134679){
            next();
        }
    }
}*/
//Get Bookings data
app.get('/Bookings',(req,res)=>{
    fs.readFile('Bookings.json', 'utf-8',(err,data)=>{
        if(err){
            console.error('Error reading file:',err);
            return res.status(500).json({message:'Internal server error'}).end();
        }
        const bookings = JSON.parse(data);
        res.json({data:bookings});
        res.end();

    });
            
            
        
});

app.post('/Bookings',(req,res)=>{
    const newBooking = req.body;
    fs.readFile('Bookings.json', 'utf-8',(err,data)=>{
        if(err){
            console.error('Error reading file:',err);
            return res.status(500).json({message:'Internalc server error'}).end();
        }else{
            const bookings = JSON.parse(data);
            bookings.push(newBooking);
            fs.writeFile('Bookings.json',JSON.stringify(bookings,null,2),(err=>{
                if(err){
                    console.error('Error writing file:',err);
                    return res.status(500).json({message:'Internal server error'}).end();
                }
                res.status(201).json({message:'Booking created successfully',data:newBooking}).end();


            }))
        }
    })
})


//Get Users data
/*fs.readFile('Users.json','utf-8',(err,data)=>{
    if(err){
        console.error('Error reading file:',err);
        return;
    }else{
        const users = JSON.parse(data);
        app.get('/users',(req,res)=>{
            res.json(users);
            res.end();
        })
    }
});*/

app.listen(1000,()=>{
    console.log('Server is running on port 1000');
})



