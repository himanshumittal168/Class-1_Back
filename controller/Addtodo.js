const Todo=require("../model/Todo");


exports.Addtodo=async(req,resp)=>
{
    try
    {
        const {title,description}=req.body;

        const response=await Todo.create({title,description});

        resp.status(200).json({
            success:true,
            data:response,
            msg:"DATA submitted to DB"
        })
    }
    catch(err)
    {
        resp.status(500).json({
            success:false,
            data:"INTERNAL SERVER ERROR",
            msg:err.message
        })
    }
}



