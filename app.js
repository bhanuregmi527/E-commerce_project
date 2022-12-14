const express= require('express')
require("dotenv").config()
const mongoose=require("mongoose")
const morgan= require("morgan")
const bodyParser= require("body-parser")
const cookieParser= require("cookie-parser")
const expressValidator=require("express-validator")
// import routes
const userRoutes=require("./routes/user")


//apps
const app= express()

//DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    }).then(()=> console.log(`DB connected `))


//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());



//routes middleware
app.use("/api",userRoutes)

const port = process.env.PORT||8000

app.listen(port,()=>{
   
    console.log(`e-commerce project is succesfully port ${port}`)
})
