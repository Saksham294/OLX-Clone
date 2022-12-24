const express=require("express")
const router=express.Router()
const  isAuthenticated  = require("../middleware/auth");
const { postItem, getAllUnsoldItems }=require("../controllers/productController")


router.route("/postItem").post(isAuthenticated,postItem)
router.route("/allItems").get(getAllUnsoldItems)
router.route("/item/:id")

module.exports=router