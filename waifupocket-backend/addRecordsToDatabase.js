const db = require("./db");
const Anime = require('./anime.model');
const fs = require('fs');

db().then(async () => {
    // Tworzenie danych binarnych obrazu
    const binaryImageData1 = fs.readFileSync("../images/jjk.jpg");
    const binaryImageData2 = fs.readFileSync("../images/jojo.jpg");
    const binaryImageData3 = fs.readFileSync("../images/one_piece.jpg");
    const binaryImageData4 = fs.readFileSync("../images/berserk.jpg");
    const binaryImageData5 = fs.readFileSync("../images/Cowboy.jpg");
    const binaryImageData6 = fs.readFileSync("../images/GitS.jpg");
    const binaryImageData7 = fs.readFileSync("../images/tokyoGhoul.jpg");
    const binaryImageData8 = fs.readFileSync("../images/onePunch.jpg");
    const binaryImageData9 = fs.readFileSync("../images/spy-x-family.jpg");
    const binaryImageData10 = fs.readFileSync("../images/Househusband.jpg");
    const binaryImageData11 = fs.readFileSync("../images/Baka.jpg");


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
      },
      {
        title:'One Piece',
        description: 'The story of a boy with big dream, also he is a pirate and is made of ruuber',
        genres: ['Action', 'Comedy', 'Adventure'],
        date: '1999',
        episodes: 1091,
        image: Buffer.from(binaryImageData3)
      },
      {
        title:'Berserk',
        description: 'Twisted dark fantasy, where deamons rule the world and humans can swing a two-meter iron plate like a sword',
        genres: ['dark fantasy','Horror', 'Action'],
        date: '2016',
        episodes: 12,
        image: Buffer.from(binaryImageData4)
      },
      {
        title:'Cowboy Bebop',
        description: 'A detective with a past is a bounty hunter',
        genres: ['Action', 'Sci-Fi'],
        date: '1998',
        episodes: 26,
        image: Buffer.from(binaryImageData5)
      },
      {
        title:'Ghost in the Shell SAC',
        description: 'A future in which androids live alongside humans. However, someone is trying to use them to get rid of the living beings.',
        genres: ['Action', 'Sci-Fi', 'Mystery'],
        date: '2002',
        episodes: 26,
        image: Buffer.from(binaryImageData6)
      },
      {
        title:'Tokyo Ghoul',
        description: 'A boy who hates ghouls becomes one of them as a result of an unfortunate accident',
        genres: ['Horror', 'Action'],
        date: '2014',
        episodes: 12,
        image: Buffer.from(binaryImageData7)
      },
      {
        title:'One Punch Man',
        description: 'The story of a superheoro who is bored with life because of his unlimited power',
        genres: ['Comedy', 'Action', 'Supernatural'],
        date: '2015',
        episodes: 12,
        image: Buffer.from(binaryImageData8)
      },
      {
        title:'Spy x Family',
        description: 'TIn order to infiltrate the plans of an enemy country, a spy must start a family. Operation Strix begins!',
        genres: ['Comedy', 'Slice of life'],
        date: '2022',
        episodes: 12,
        image: Buffer.from(binaryImageData9)
      },
      {
        title:'The Way of the Househusband',
        description: 'The former yakuza becomes master of the house and devotes himself to it as if his life depended on it',
        genres: ['Comedy', 'Slice of life'],
        date: '2021',
        episodes: 30,
        image: Buffer.from(binaryImageData10)
      },
      {
        title:'Bakemonogatari',
        description: 'Half-vampire tries to help school friends reverse their curses',
        genres: ['Fantasy','Romans','Supernatural', 'Comedy'],
        date: '2009',
        episodes: 15,
        image: Buffer.from(binaryImageData11)
      },
      // {
      //   title:'',
      //   description: '',
      //   genres: [''],
      //   date: '',
      //   episodes: ,
      //   image: Buffer.from(binaryImageData2)
      // },
    ];
  
    // Zapisywanie rekordu do kolekcji "animeCollection" za pomocą async/await
      const savedAnime = await Anime.insertMany(anime);
      console.log('Dodano rekord do kolekcji "animeCollection":', savedAnime);
  });