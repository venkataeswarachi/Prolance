import express from "express"
import mongoose from "mongoose"
import dotEnv from "dotenv"

dotEnv.config()
const app = express()

const connect = async () =>{
    
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connection is successfull!")
    }catch(error){
        console.log(error)
    }

}
const PORT = process.env.PORT || 5001
app.listen(PORT,()=>{
    connect()
    console.log("eswar")
})