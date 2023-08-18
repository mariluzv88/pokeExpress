const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    img:  { type: String, required: true }
   
});

const aPokemon = mongoose.model('aPokemon', PokemonSchema);

module.exports = aPokemon;