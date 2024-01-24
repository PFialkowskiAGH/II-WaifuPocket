
import React, { Component, ChangeEvent } from "react";
import './Browse.css';
import SearchBox from "../SearchBox";
import { Link } from "react-router-dom";
import axios from 'axios';
import {Anime} from "../AnimeInterface"

interface AppState {
  anime: Anime[];
  searchfield: string;
}

class Browse extends Component<{}, AppState> {
  constructor() {
    super({});
    this.state = {
      anime: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    this.fetchAnimeData();
  }

  async fetchAnimeData() {
    try {
      const response = await axios.get<Anime[]>('http://localhost:3001/api/browse');
      this.setState({ anime: response.data });
    } catch (error) {
      console.error(error);
    }
  }

  onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredAnime = this.state.anime.filter((anime) => {
      return anime.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="containerBrowse" style={{ width: 'auto', backgroundSize: 'cover', height: '82vh' }}>
        <SearchBox searchChange={this.onSearchChange} />
        <h2>Anime Titles:</h2>
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

export default Browse;