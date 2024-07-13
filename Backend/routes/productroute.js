const express = require("express");
const { getallproducts, Createproduct, updateproduct, deleteproduct, singleproduct } = require("../controller/productcontroller");

const productrouter = express.Router()

productrouter.get('/product',getallproducts);
productrouter.get('/product/:id',singleproduct);
productrouter.post('/createproduct',Createproduct)
productrouter.put('/updateproduct/:id',updateproduct)
productrouter.delete('/deleteproduct/:id',deleteproduct)
module.exports=productrouter