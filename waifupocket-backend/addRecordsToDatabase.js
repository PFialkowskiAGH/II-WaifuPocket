const db = require("./db");
const Anime = require('./anime.model');
const fs = require('fs');

db().then(async () => {
    // Tworzenie danych binarnych obrazu
    const binaryImageData1 = fs.readFileSync("../images/jjk.jpg");
    const binaryImageData2 = fs.readFileSync("../images/jojo.jpg");

    // Dodawanie przykładowego dokumentu do kolekcji
    const anime = [
      {
        title: 'Jujutsu Kaisen',
        description: 'The guy wanted to eat KFC, but instead of strpis he ate a Heian era sorcerers finger, so now he has to become a sorcerer and meet other wierods like fighting panda or the type with a schoolmate complex',
        genres: ['action', 'dark fantasy', 'comedy'],
        date: '2020',
        episodes: 27,
        image: Buffer.from(binaryImageData1)
      },
      {
        title: 'Jojo Bizzare Adventure',
        description: 'The main characters stepbrother didnt know how to confess his love to him, so he burned his dog and became a vampire, and their conflict spread to the entire family and lasted for over 30 years, they even involved a priest',
        genres: ['100iq moment', 'historical', 'peak comedy'],
        date: '1993',
        episodes: 190,
        image: Buffer.from(binaryImageData2)
      }
    ];
  
    // Zapisywanie rekordu do kolekcji "animeCollection" za pomocą async/await
      const savedAnime = await Anime.insertMany(anime);
      console.log('Dodano rekord do kolekcji "animeCollection":', savedAnime);
  });