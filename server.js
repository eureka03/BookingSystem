const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'Eureka@031',
    database:'User'

});

db.connect(err=>{
    if(err) throw err;
    console.log('Connected to MYSQL');
})

app.get('/Bookings',(req,res)=>{
    db.query('SELECT * FROM bookings',(err,results)=>{
        if(err) return res.status(500).json(err);
        res.json(results);
    })

});

app.post('/SignUp',(req,res)=>{
    const {Name,Email , Password} = req.body
    db.query('INSERT into user_details VALUES(?,?,?)',[Name,Email,Password],(err,results)=>{
        if(err) return res.status(500).json(err);
        res.status(200).json({message:'Sign-Up Succesful'});
    })

});

app.listen(5000,()=>{
    console.log('Server running on http://localhost:5000');
})
