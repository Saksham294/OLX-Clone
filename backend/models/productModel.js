const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please enter the title of the product"]
    },
    imageUrl:{
        public_id:String,
        url:String,
    },
    location:{
        type:String,
        required:[true,"Please enter location"]
    },
    price:{
        type:Number,
        required:[true,"Please enter price"]
    },
    description:{
        type:String,
        required:[true,"Please enter a description"]
    },
    soldStatus:{
        type:Boolean,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    datePosted:{
        type:Date,
        default:Date.now,
    },


})


module.exports=mongoose.model("Product",productSchema)