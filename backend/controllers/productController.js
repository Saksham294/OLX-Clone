const Product=require("../models/productModel")
const User=require("../models/userModel")
const cloudinary=require("cloudinary")

exports.postItem=async(req,res)=>{
    try {
        
        const myCloud=await cloudinary.v2.uploader.upload(req.body.image,{
          folder:"products"
        })
        
  
  
        const newItemData = {
          title:req.body.title,
          description: req.body.description,
          price:req.body.price,
          imageUrl:{
            public_id:myCloud.public_id,
            url:myCloud.secure_url,
          },
          location:req.body.location,
          soldStatus:false,
          owner: req.user._id,
        };
          const user=await User.findById(req.user.id);
  
  
          const postItem= await Product.create(newItemData)
  
           user.postedItems.unshift(postItem._id);
  
    
        await user.save();
          res.status(200).json({
              user,
              success:true,
              message:"Item put on sale successfully"
          })
          
      } catch (error) {
          console.log(error),
          res.status(404).json({
              
              success:false,
              message:error.message
          })
      }
}

exports.getAllUnsoldItems=async(req,res)=>{
    try {
var allItems=await Product.find();
var allUnsoldItems=[]
allItems.forEach((item=>{
    if(item.soldStatus==false){
        allUnsoldItems.push(item)
    }
}))

        res.status(200).json({
allUnsoldItems,
            success:true,
            message:"All unsold products obtained"
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
          });
    }
}

exports.purchaseItem=async(req,res)=>{
    try {
const item=await Product.findById(req.params.id)

const buyer=await User.findById(req.user.id)

item.soldStatus=true;
item.owner=buyer._id;
buyer.purchasedItems.push(item)

await buyer.save()
await item.save()
res.status(200).json({
  success: true,
  message: "Item Bought",
});
    } catch (error) {
      console.log(error)
        res.status(500).json({
            success: false,
            message: error.message,
          });
    }
}

exports.getItem=async(req,res)=>{
    try {
        
        const item = await Product.findById(req.params.id).populate("owner")

    
        res.status(200).json({
          success: true,
          item
        });
        
      } catch (error) {
        console.log(error)
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }
}