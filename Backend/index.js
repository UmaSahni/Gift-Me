const express = require("express")
const {connected} = require("./db")
const { userRouter } = require("./routes/User.routes")
const { auth } = require("./Middleware/auth.middle")
const { birthDayRoute } = require("./routes/birthday.routes")
const app = express()
const port = 8080
app.use(express.json())

app.use("/user",userRouter)
app.use("/birthday", birthDayRoute)
app.use(auth) // Private route
app.get("/", (req, res)=>{
    res.send("Getting data")
})

app.listen(port,async()=>{
    try {
       console.log(`Gift Me App listening on port ${port}`)  
        await connected
       console.log("Connected to db")
    } catch (error) {
        console.log("Error in index.js app.listen ")
    }
   
})