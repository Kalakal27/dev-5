const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory.js')
// const {v4: uuidv4} = require("uuid")

// const inventory = [
//     {
//             name: "calender",
//             description: "2023 calender",
//             _id: uuidv4()
//     },
//     {
//             name: "cleaning",
//             description: "cleaning supplies",
//             _id: uuidv4()
//     },
//     {
//             name: "laptop",
//             description: "windows10 laptop",
//             _id: uuidv4()
//     }
    
//     ]

    inventoryRouter.get("/", (req, res, next) => {
      console.log("inventory route")
       Inventory.find((err, inventory) => {
         console.log(inventory)
         if(err){
            res.status(500)
            return next(err)
         }
         return res.status(200).send(inventory)
       })
    })
   
    // inventoryRouter.post("/", (req, res) =>{
    //     const newInventory = req.body 
    //     newInventory._id = uuidv4()
    //     inventory.push(newInventory)
    //     res.send(`Added ${newInventory.name} to list`)
    // })












module.exports = inventoryRouter