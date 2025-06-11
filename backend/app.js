const express=require('express')
const resumeRoutes=require("./routes/resumeRoutes")
const app=express()
const cors=require('cors')
const fs=require('fs')
const path=require('path')
//routes ->left
app.use(cors())
app.use(express.json())
app.use("/api/resume",resumeRoutes)
const uploadDir=path.join(__dirname,'uploads')
if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir)

}
const PORT=5000
app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`)})
