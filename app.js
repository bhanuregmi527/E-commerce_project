const express= require('express')
require('dotenv').config()
const mongoose=require('mongoose')
// import routes
const userRoutes=require('./routes/user')

//apps
const app= express()

//DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    }).then(()=> console.log(`DB connected `))


//routes middleware
app.use("/api",userRoutes)

const port = process.env.PORT||3000

app.listen(port,()=>{
    console.log(`e-commerce project is succesfully port ${port}`)
})
