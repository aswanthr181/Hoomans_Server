const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    title: {
        type: String
    },
    year: {
        type: Number
    },
    genre: {
        type: String
    },
    banner_image: {
        type: String
    }
});

const movieModel = mongoose.model('movie', movieSchema)
module.exports = movieModel