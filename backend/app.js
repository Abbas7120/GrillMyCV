const express=require('express')
const resumeRoutes=require("./routes/resumeRoutes")
const app=express()
const cors=require('cors')
//routes ->left
app.use(cors())
app.use(express.json())
app.use("/api/resume",resumeRoutes)
const PORT=5000
app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`)})
