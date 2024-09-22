const mongoose=require("mongoose");
let url="mongodb+srv://himanshumittal168:<dbpass>@cluster0.samc3.mongodb.net/march_batch"

const dbconnect=()=>
{
    mongoose.connect(url)
    .then(()=> console.log("CONNETED TO DB "))
    .catch((error)=>
    {
        console.log(error);
        console.log("ERROR OCCURED");
    })
}


module.exports=dbconnect;
