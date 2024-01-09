const mongoose = require("mongoose");

// Definicja modelu Mongoose
const AnimeSchema = new mongoose.Schema({
    title: String,
    description: String,
    genres: Array,
    date: Number,
    episodes: Number,
  });
  
  // Tworzenie modelu zdefiniowanego schematu
  const Anime = mongoose.model('Anime', AnimeSchema);

module.exports = Anime;