import { Router } from "express";
import { render } from "ejs";
import {
    loginuser,
    registerUser,
    logoutuser,
    refreshaccesstoken,
    changecurrentpassword,
    updateaccountdetails,
    updateuseravatar,
    updateusercoverimage,
    loaddashboard,
        }
    from "../src/controllers/user.controller.js";

import { upload } from "../src/middlewares/multer.middleware.js"
import { verifyJWT } from "../src/middlewares/auth.middleware.js";
const router = Router()
router.route("/register").post(
    upload.fields([ 
        {
            name: "avatar",
            maxCount: 1
        }, {
            name: "coverimage",
            maxCount: 1
        }
    ]),
    registerUser);

// router.route("/register").post(registerUser)
router.route("/login").post(loginuser)

//seruce routes
router.route("/logout").post(verifyJWT, logoutuser)
router.route("/refreshtoken").post(refreshaccesstoken)
router.route("/changepassword").post(verifyJWT, changecurrentpassword)
router.route("/updateaccount").patch(verifyJWT, updateaccountdetails)
router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateuseravatar)
router.route("/coverimage").patch(verifyJWT, upload.single("coverImage"), updateusercoverimage)
// router.route("/dashboard").post(verifyJWT, loaddashboard)
router.route("/dashboard").post(loaddashboard)
router.route("*",function(req,res){
    res.redirect("/login")
})

// router.route("/avatar").patch(verifyJWT, updateuseravatar)
// router.route("/coverimage").patch(verifyJWT, updateusercoverimage)

export default router //can be imported by any name _eg RegisterUser