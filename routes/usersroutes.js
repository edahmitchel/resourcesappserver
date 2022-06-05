// const express = require("express")
router = require("express").Router()




const {
    
    allUsers,
    getSingleUser,deleteUser,newUser,updateUser
  
} = require("../controller/user")


router.get("/:id", getSingleUser)
router.get("/",allUsers )
router.post("/",newUser)
router.delete("/:id",deleteUser)
// put is to update
router.put("/:id",updateUser)
// router.update("/",router);


module.exports = router
