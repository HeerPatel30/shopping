const mongoose = require("mongoose")

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please Enter the name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please Enter the description"]
    },
    price:{
        type:Number,
        required:[true,"Please Enter the price"],
        maxLength:[6,"Price cannot exceed 6 characters"],
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
        }
    ],

    category:{
        type:String,
        required:[true,"Please Enter the category"],
    },
    stock:{
        type:Number,
        required:[true,"Please Enter the stock"],
        maxLength:[4,"Stock cannot exceed 4 characters"],
        default:1
    },
    numofReviews:{
        type:Number,
        default:0

    },
    reviews:[{
        name:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            requried:true
        }
    }],createdAt:{
        type:Date,
        default:Date.now
    }
    }) 

    const Product= mongoose.model("Product",productSchema)

    module.exports=Product