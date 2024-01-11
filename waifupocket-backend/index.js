const express = require("express");
const cors = require("cors");
const db = require("./db");
const dotenv = require("dotenv");
dotenv.config();
const Anime = require('./anime.model');

const PORT = process.env.PORT;

const app = express();

//communicattion with app
const corsOptions ={
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: false,
}
app.use(cors(corsOptions));

//database
db();

//GET
app.get('/test/server', (req, res) => {
  // Handle your API logic here
  const data = { message: 'Hello from the server!' };
  res.json(data);
});

app.get('/test/database', async (req, res) => {
  try {
    // Pobieranie danych z kolekcji "animeCollection"
    const animeList = await Anime.find();
    console.log('Lista anime z kolekcji "animeCollection":', animeList);

    // Odpowiedź JSON z listą anime
    res.send(JSON.stringify(animeList));
  } 
  catch (error) {
    console.error(error);
    // Jeżeli wystąpi błąd, zwróć odpowiednią odpowiedź HTTP
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//LISTEN
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});