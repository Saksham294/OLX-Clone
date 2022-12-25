const express=require("express")
const router=express.Router()
const  isAuthenticated  = require("../middleware/auth");
const { postItem, getAllUnsoldItems,getItem, purchaseItem }=require("../controllers/productController")


router.route("/postItem").post(isAuthenticated,postItem)
router.route("/allItems").get(getAllUnsoldItems)
router.route("/item/:id").get(getItem)
router.route("/item/buy/:id").get(isAuthenticated,purchaseItem)

module.exports=router