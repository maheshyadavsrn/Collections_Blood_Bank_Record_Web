const testController=(req,res)=>{
    res.status(200).send({
        message:"Welcome blood bank app Mahesh",
        success:true,
    })
}
module.exports={testController};