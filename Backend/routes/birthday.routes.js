const express = require("express")
const { BirthModel } = require("../Model/birthday.model")
const birthDayRoute = express.Router()

birthDayRoute.get("/", async(req, res)=>{
    try {
        const bithDayGifts = await BirthModel.find()
        res.send({bithDayGifts})
    } catch (error) {
        res.send({"err":"Error Occured while feching data from db."})
    }
})

birthDayRoute.post("/add", async(req, res)=>{
    const {name, image, price, brandId } = req.body
    console.log(name, image, price, brandId)
    try {
        const birth = new BirthModel({name, image, price,brandId})
        await birth.save()
        res.send({"Data":"New Item added"})
    } catch (error) {
        res.send({"Data":"Error Occured while adding the in birthDayRoute"})
    }
})

birthDayRoute.patch("/update/:id", async(req, res)=>{
    const id = req.params.id
    console.log(req.body)
    try {
        const Data = await BirthModel.findByIdAndUpdate(id,req.body)
       if(Data){
        res.send(Data)
       }
        else{
            res.send("Product Not Found")
        }
    } catch (error) {
        res.send("Error in updating data birthday")
    }
    
})

module.exports = {birthDayRoute}