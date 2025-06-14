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

app.listen(5000,()=>{
    console.log('Server running on http://localhost:5000');
})