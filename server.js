const express = require("express")
const app = express()
const morgan = require('morgan')
// const {v4: uuidv4} = require("uuid")
const mongoose = require('mongoose')
require("dotenv").config

app.use(express.json())
app.use(morgan('dev'))

// app.use("/inventory", require("./routes/inventoryRouter.js"))



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@sol.wmy15ja.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

//mongoose.connect(`mongodb+srv://Moldoff:${process.env.PASSWORD}@sol.wmy15ja.mongodb.net/?retryWrites=true&w=majority`, () => console.log("Connected to the db"))
mongoose.connect(`mongodb+srv://<username>:${process.env.PASSWORD}@sol.wmy15ja.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (x)=>{
    console.log(x)
})

// mongoose.connect('mongodb://localhost:27017/crudstore',
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// }, 
//  () => console.log("connected to the DB")
// )

app.use("/inventory", require("./routes/inventoryRouter.js"))
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

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


app.listen(9000, () => {
    console.log("The server is running on port 9000")
})










