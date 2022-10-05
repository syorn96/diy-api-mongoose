const mongoose = require('mongoose')

const PokemonCardSchema = new mongoose.Schema({
    name: {
        type: String
    },
    img_Url: {
        type: String
    },
    rarity: {
        type: String
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('PokemonCard', PokemonCardSchema)