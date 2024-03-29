import React, { Component } from "react";
import './Search.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Anime } from "../AnimeInterface";

interface AppState {
  anime: Anime[];
  selectedGenre: string | null;
  loading: boolean;
}

class Search extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      anime: [],
      selectedGenre: null,
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchAnimeData();
  }

  async fetchAnimeData() {
    try {
      const response = await axios.get<any[]>('http://localhost:3001/api/search');       
      const animeData = response.data.map((anime: any) => {
        return {
          ...anime,
          genres: anime.genres || [] 
        };
      });
      this.setState({ anime: animeData, loading: false }); // Set loading to false when data is fetched
    } catch (error) {
      console.error(error);
      this.setState({ loading: false }); // Set loading to false in case of an error
    }
  }

  handleGenreClick = (genre: string) => {
    const cleanedGenre = genre.toLowerCase().replace(/\s/g, ''); 
    this.setState({ selectedGenre: cleanedGenre }, () => {
      console.log('Selected Genre:', this.state.selectedGenre);
    });
  };

  render() {
    const { anime, selectedGenre, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>; // Display loading message while data is being fetched
    }

    const filteredAnime = anime.filter((anime) => {
        const hasSelectedGenre = selectedGenre ? (anime.genres && anime.genres.some(g => g.toLowerCase().replace(/\s/g, '') === selectedGenre)) : true;
        return hasSelectedGenre;
      });

    return (
      <div>
        <h2>Choose genre:</h2>
        <div className="buttonContainer">
          <button onClick={() => this.handleGenreClick('comedy')}>Comedy</button>
          <button onClick={() => this.handleGenreClick('action')}>Action</button>
          <button onClick={() => this.handleGenreClick('dark fantasy')}>Dark Fantasy</button>
          <button onClick={() => this.handleGenreClick('fantasy')}>Fantasy</button>
          <button onClick={() => this.handleGenreClick('sci-fi')}>Sci-Fi</button>
        </div>        
        <ul>
          {filteredAnime.map((anime) => (
            <li key={anime._id}>
              <Link to={`/overview/${anime._id}`}>{anime.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Search;