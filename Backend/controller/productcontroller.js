const asyncerror = require("../middleware/asyncerror");
const Product = require("../models/product");
const Errorhandler = require("../utils/errorhandler");



// create product admin 
const Createproduct=asyncerror(async(req,res,next)=>{
    
        const product = await Product.create(req.body)
        res.status(201).json({
            success:true,
          
        })

    } )

// get product details 

const singleproduct = asyncerror(async(req,res,next)=>{
   
    let product = await Product.findById(req.params.id)
    if(!product){
        return next(new Errorhandler("product not found",404
        ))
    }
    res.status(200).json({
        success:true,
        product
    })
} )




// fetching the products 
const getallproducts=asyncerror(async(req,res)=>{
    
    // finding the data 
    const product = await Product.find()

    res.status(201).json({
        success:true,
        products:product
    })
} )

// updating the poduct Admin 
const updateproduct= asyncerror(async(req,res,next)=>{
    
    let product = await Product.findById(req.params.id)
    if(!product){
        return next(new Errorhandler("product not found",404
        ))
    }
    product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})

    res.status(201).json({
        success:true,
        updateproduct:product
    })
} )

// deleting the product admin

const deleteproduct =asyncerror( async (req,res,next)=>{
    
    let product = await Product.findById(req.params.id)
    if(!product){
        return next(new Errorhandler("product not found",404
        ))
    }
    product = await Product.findByIdAndDelete(req.params.id,{new:true, runValidators:true})

    res.status(201).json({
        success:true,
        msg:"product deleted successfully"
    })

} )



module.exports={getallproducts,Createproduct,updateproduct,deleteproduct,singleproduct}