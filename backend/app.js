const express=require("express")
const app=express()
var cors = require('cors');
var cookieParser = require('cookie-parser')
const userRoutes=require("./routes/userRoutes")
const productRoutes=require('./routes/productRoutes')

app.use(cookieParser())
app.use(express.json({
    limit:"50mb"
}))
app.use(cors());


app.use("/api/",userRoutes)
app.use("/api/",productRoutes)



module.exports=app 