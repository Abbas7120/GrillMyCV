const express=require('express')
const multer=require('multer')
//controller->left
const {roastResume}=require("../controllers/resumeController")
const router=express.Router()
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
   cb(null,`${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage: storage })

//left use of controller
router.post('/upload',upload.single("resume"),roastResume);
module.exports=router;