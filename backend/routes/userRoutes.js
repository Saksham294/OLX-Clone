const {registerUser, loginUser, getMyPostedItems, logoutUser, getMyProfile} =require("../controllers/userController")
const express=require("express")
const router=express.Router();
const isAuthenticated=require("../middleware/auth")


router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').get(logoutUser)
router.route('/myPostedItems').get(isAuthenticated,getMyPostedItems)
router.route("/me").get(isAuthenticated,getMyProfile)

module.exports=router