const express =require('express')
const app = express()
PORT = 3000
require('dotenv').config()
const mongoose = require('mongoose');
const pokemon = require('./models/pokemon.js')


// middeware
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({extended:false}));
// app.use(express.json())

app.use((req, res, next) => {
    console.log("I run for all routes");
    next();
  });

  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
  });
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});
mongoose.connection.once("open", () => {
    console.log("connected to mongo");
  });
// routes
app.get('/',(req,res)=>{
    res.send("WELCOME TO THE POKEMON APP!")
})
app.get('/pokemon',(req,res)=>{
    res.render("Index")
})


// port
app.listen(PORT,(req,res)=>{
    console.log('on port 3k ')
})