const asyncerror = require("../middleware/asyncerror");
const Product = require("../models/product");
const ApiFeatures = require("../utils/apifeatures");
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
const getallproducts = asyncerror(async (req, res) => {
   // pagination 
     const resultPerPage = 5;
    //  counting the product
    const productCount = await Product.countDocuments();
    // Extracting the API feature
    const apiFeature = new ApiFeatures(Product.find(), req.query).search().filter().pagination(resultPerPage);

    // Finding the data
    const products = await apiFeature.query;

    res.status(201).json({
        success: true,
        products,
        productCount,
    });
});
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