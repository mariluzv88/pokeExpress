const express =require('express')
const app = express()
PORT = 3000
require('dotenv').config()
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const pokemon = require('./models/pokemon.js')
const aPokemon = require('./models/aPokemon.js')



// middeware
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({extended:false}));
// app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
  });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});
app.use(methodOverride('_method'));
app.use((req, res, next) => {
    console.log("I run for all routes");
    next();
  });

  // mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.once("open", () => {
//     console.log("connected to mongo");
//   });
// routes
// app.get('/pokemon/seed', async(req,res)=>{
//   await aPokemon.create(pokemon)
//   res.redirect("Index")
// })
app.get('/',(req,res)=>{
    res.send("WELCOME TO THE POKEMON APP!")
})
app.get('/pokemon', async (req,res)=>{
  const pokemons = await aPokemon.find({})
    res.render("Index",{pokemon:pokemons})
    // ,{pokemon}
})
app.get('/pokemon/:id', async (req,res)=>{
  const eachPokemon = await aPokemon.findById(req.params.id)
  // res.send(pokemon[req.params.id])
    res.render("Show",{pokemon:eachPokemon})
})
// app.post("/pokemon/new", async (req, res) => {
  
//   const newPokemon = await pokemon.create(req.body)
//   // await res.send(newFruit);
  
//   res.redirect("/pokemon");
// });

// port
app.listen(PORT,(req,res)=>{
    console.log('on port 3k ')
})