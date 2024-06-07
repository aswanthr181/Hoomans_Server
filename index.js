const express=require('express')
const cors=require('cors')
const app=express()
const {connectDB}=require('./config/dbConnection')

app.use(express.json())

const corsOption={
    origin:"*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    optionsSuccessStatus: 204,
}
app.use(cors(corsOption))
const userRoute=require('./route/userRoute')
app.use('/',userRoute)

const PORT=3000
connectDB()
app.listen(PORT,()=>{
    console.log(`Port connected success to: ${PORT}`);
})