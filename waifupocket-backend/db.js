const mongoose = require("mongoose");
//var mongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/";
const dotenv = require("dotenv");
const Anime = require('./anime.model');

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL

//Baza
const db = async()=>{
    try {
      const connection = await mongoose.connect(MONGODB_URL);
      console.log('mongodb connected:' + connection.connection.host);
    }
    catch (error){
        console.error(error);
    }
}
module.exports = db;

  // mongoClient.connect(url, function(err, db) {
  //   console.log(test);
  //   if (err) throw err;
  //   var dbo = db.db("waifupocketdb");
  //   var anime = [
  //     { 
  //       name: "Jujutsu Kaisen",
  //       description: "Typ chciał zjeść coś z KFC, ale zamiast stripsa zjadł palec typa z ery Heian, więc musi zostać czarownikiem",
  //       image: "..\\gojo_honored.jpg",
  //       genre: ['action', 'comedy', 'dark fantasy'],
  //       date: 2020,
  //       episodes: 47
  //     }
  //   ];
  //   dbo.collection("animeCollection").insertMany(anime, function(err, res) {
  //     if (err) throw err;
  //     console.log("anime inserted");
  //     db.close();
  //   });
  // });
  // const data=[];