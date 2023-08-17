const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    img:  {  data: Buffer,
        contentType: String}
   
});

const aPokemon = mongoose.model('aPokemon', PokemonSchema);

module.exports = aPokemon;