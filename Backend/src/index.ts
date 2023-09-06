import express,{Request,Response} from 'express';

import { connecting } from './Connection/db';
import UserRoutes from './Routes/user.routes';
import cors from 'cors'
import dotenv from "dotenv"
import ProductRouter from './Routes/product.routes';
dotenv.config()

const app=express()

app.use(express.json())
app.use(cors())
app.get("/",(req:Request,res:Response)=>{
    res.send({"msg":"hello"})
})

app.use("/user",UserRoutes)
app.use("/product",ProductRouter)

app.listen(process.env.port,async ()=>{
    try {
        await connecting
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
    console.log("connected to server")
    
})