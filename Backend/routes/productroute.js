const express = require("express");
const { getallproducts, Createproduct } = require("../controller/productcontroller");

const productrouter = express.Router()

productrouter.get('/product',getallproducts);
productrouter.post('/createproduct',Createproduct)
module.exports=productrouter