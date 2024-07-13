const express = require("express")
const dotenv=require("dotenv");
const productrouter = require("./routes/productroute");
const app = express();
const cors = require("cors")
const bodyparser = require("body-parser");
const error = require("./middleware/error");



// uncaught unexpected error handling 
process.on("uncaughtException",(err)=>{
    console.log(`error : ${err.message}`);
    process.exit(1)
})






app.use(bodyparser.urlencoded({extended : true}))
app.use(cors())
// middleware 
app.use(bodyparser.json({extended : true})); //pass incoming data

// config
dotenv.config({path:"./config/config.env"})
// connecting the database 
require("./config/database")


// middleware error
app.use(error)

// routes
app.use("/api/v1",productrouter)





// listening to server 
const server = app.listen(process.env.PORT,()=>{
    console.log(`server is running on  http://localhost:${process.env.PORT}`);
})

// unhandle promise 
process.on("unhandledRejection",err=>{
    console.log(`error :${err.message}`);
    console.log(`shutting down the server due to unhandle promise rejection`);
    server.close(()=>{

        process.exit(1)
    }
)
})