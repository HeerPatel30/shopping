const Product = require("../models/product")




// create product
const Createproduct=async(req,res,next)=>{
    try {
        const product = await Product.create(req.body)
        res.status(201).json({
            success:true,
          
        })

    } catch (error) {
        console.log(error);
    }
}


const getallproducts=(req,res)=>{
    res.json({
        "status":"success",
    })
}

module.exports={getallproducts,Createproduct}