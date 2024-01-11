const db = require("./db");
const Anime = require('./anime.model');

db().then(async () => {
    // Dodawanie przykładowego dokumentu do kolekcji "animeCollection"
    const anime = new Anime({
      title: 'Jujutsu Kaisen',
      description: 'Typ chciał zjeść KFC, ale zamiast strpisa zjadł palec czarownika z ery Heian, więc teraz musi zostać czarownikiem',
      genres: ['action', 'dark fantasy', 'comedy'],
      date: '2020',
      episodes: 27,
    });
  
    // Zapisywanie rekordu do kolekcji "animeCollection" za pomocą async/await
      const savedAnime = await anime.save();
      console.log('Dodano rekord do kolekcji "animeCollection":', savedAnime);
  });