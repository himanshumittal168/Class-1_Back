//MONGODB_URL="mongodb+srv://himanshumittal168:OhNNAFyzbcIuvkZb@cluster0.samc3.mongodb.net/march_batch"
const express=require('express');
const app=express();

const {Addtodo}=require('./controller/Addtodo')
// app.use(express.json());

app.get("/",(req,resp)=>
{
    resp.send('HELLO WELCOME TO HOME PAGE');
})
// /add ->
// /delete->

const dbconnect=require('./config/db');
dbconnect();

app.listen(4000,()=>
{
        console.log("SERVER IS ON PORT -4000");
})
app.post("/first",Addtodo);
// app.use(express.json());

// app.get("/admin",(req,resp)=>
// {
//     resp.send("HELLO TO ADMIN PAGE");
// })

// app.get("/abt",(req,resp)=>
// {
//     resp.send("HELLO TO ABT PAGE");
// })
// // MIDDLE WARE
// app.use(express.json());
// let arr=[];
// app.post("/abc",(req,resp)=>
// {
//     const{name,phone}=req.body;
//     console.log(name);
//     console.log(phone);
//     const newentry={
//         naam:name,
//         mobile:phone,
//     }
//     arr.push(newentry);
//     resp.send(arr);
// })


