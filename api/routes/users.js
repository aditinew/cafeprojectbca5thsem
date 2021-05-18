const express = require('express');

const mongoose = require('mongoose');
const app = express();
const User=require('../model/testquery');
const router = express.Router();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  });

router.get('/',function(req,res){
    User.find(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            res.json(data)
        }
    })
})

router.post('/add',function(req,res){
    const FirstName=req.body.FirstName
    const LastName=req.body.LastName
    const Email=req.body.Email
    const BookingDate=req.body.BookingDate
    const BookingTime=req.body.BookingTime
    const Persons=req.body.Persons
    const Phone=req.body.Phone
    const SpecialRequest=req.body.SpecialRequest
    new User({
        FirstName:FirstName,
        LastName:LastName,
        Email:Email,
        BookingDate:BookingDate,
        BookingTime:BookingTime,
        Persons:Persons,
        Phone:Phone,
        SpecialRequest:SpecialRequest
    }).save(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
            res.json(data)
        }
    })
})
//////////////////////////////////////////////////////updating data///////////////////////////////////
router.post('/update/:id',(req,res,next)=>{
    const id = req.params.id;
    let UserUpdate = {
        _id :id,
        FirstName: req.body.FirstName,
        LastName : req.body.LastName,
        Email : req.body.Email,
        BookingDate : req.body.BookingDate,
        BookingTime : req.body.BookingTime,
        Persons : req.body.Persons,
        Phone: req.body.Phone,
        SpecialRequest: req.body.SpecialRequest,
    };
    User.findOneAndUpdate({_id:id}, UserUpdate,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            // console.log(data)
            res.json(data)
        }
        
    })
})

/////////////////edit 
router.get('/edit/:id',(req,res)=>{
    let id = req.params.id;
    User.findById(id, function (err,data){
        res.json(data);
})
})

//////////////////////////////////////////////////delete data///////////////////////////////////////////////
router.get('/delete/:id',(req,res)=>{
    let id=req.params.id
    User.findOneAndRemove(id,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json(data)
            console.log(data)
        }
    })
})
module.exports = router;