const express = require("express")
const dotenv=require("dotenv");
const productrouter = require("./routes/productroute");
const app = express();
const cors = require("cors")
const bodyparser = require("body-parser")

app.use(bodyparser.urlencoded({extended : true}))
app.use(cors())
// middleware 
app.use(bodyparser.json({extended : true})); //pass incoming data

// config
dotenv.config({path:"./config/config.env"})
// connecting the database 
require("./config/database")

// routes
app.use("/api/v1",productrouter)






// listening to server 
app.listen(process.env.PORT,()=>{
    console.log(`server is running on  http://localhost:${process.env.PORT}`);
})