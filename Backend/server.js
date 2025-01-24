import express from "express"
import mongoose from "mongoose"
import dotEnv from "dotenv"
import userRoute from "./routes/user.route.js"
import gigRoute from "./routes/gig.route.js"
import messageRoute from "./routes/message.route.js"
import orderRoute from "./routes/order.route.js"
import reviewRoute from "./routes/review.route.js"
import conversationRoute from "./routes/conversation.route.js"
import authRoute from "./routes/auth.route.js"

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
const PORT = process.env.PORT || 8000

app.use("/api/users",userRoute);
app.use("/api/gig",gigRoute);
app.use("/api/message",messageRoute);
app.use("/api/order",orderRoute);
app.use("/api/review",reviewRoute);
app.use("/api/conversation",conversationRoute);
app.use("/api/auth",authRoute);



app.listen(PORT,()=>{
    connect()
    console.log("eswar")
})