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

app.get('/api/browse', async (req, res) => {
  try {
    // Pobieranie danych z kolekcji "animeCollection"
    const animeList = await Anime.find().select("title");
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

app.get('/api/search', async (req, res) => {
  try {
    // Pobieranie danych z kolekcji "animeCollection"
    const animeList = await Anime.find();
    console.log('Lista anime z kolekcji "animeCollection":', animeList);

    // Odpowiedź JSON z listą anime
    res.json(animeList);
  } 
  catch (error) {
    console.error(error);
    // Jeżeli wystąpi błąd, zwróć odpowiednią odpowiedź HTTP
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//app.get('/api/anime/:id', async (req, res) => {
  //const animeId = req.params.id;

  //try {
    // Pobieranie konkretnego anime z kolekcji "animeCollection" na podstawie id
    //const anime = await Anime.findById(animeId);

    //if (!anime) {
      //return res.status(404).json({ error: 'Anime not found' });
    //}

    // Odpowiedź JSON z obiektem anime
    //res.json(anime);
  //} catch (error) {
    //console.error(error);
    // Jeżeli wystąpi błąd, zwróć odpowiednią odpowiedź HTTP
    //res.status(500).json({ error: 'Internal Server Error' });
  //}
//});

app.get('/api/anime/:id', async (req, res) => {
  const animeId = req.params.id;

  try {
    // Pobieranie konkretnego anime z kolekcji "animeCollection" na podstawie id
    const anime = await Anime.findById(animeId);

    if (!anime) {
      return res.status(404).json({ error: 'Anime not found' });
    }

    // Convert Buffer to base64
    const base64Image = Buffer.from(anime.image).toString('base64');

    // Include the base64-encoded image in the response
    res.json({ ...anime.toObject(), image: base64Image });
  } catch (error) {
    console.error(error);
    // Jeżeli wystąpi błąd, zwróć odpowiednią odpowiedź HTTP
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//LISTEN
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});