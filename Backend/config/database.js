const mongoose = require("mongoose")

const dbconnect = async ()=>{
    
        await mongoose.connect(process.env.DB_URL).then((data)=>{

            console.log("database connected");
        })
   
}

dbconnect()