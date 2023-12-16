import React, { Component, ChangeEvent } from "react";
import './Browse.css';
import {anime} from ".././anime";
import SearchBox from ".././SearchBox";
import background from "./gojo_honored.jpg";

interface AppState {
    anime: Array<{  id: number; title: string }>;
    searchfield: string;
  }

class Browse extends Component <{}, AppState> {
    constructor() {
      super({anime});
      this.state = {
        anime: anime,
        searchfield: '',
      };
    }
    
    onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ searchfield: event.target.value });
      };

      render() {
        const filteredAnime = this.state.anime.filter((anime) => {
          return anime.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
    
        return (
          <div className="containerBrowse" style={{ backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            width:'auto',
            backgroundSize: 'cover',
            height:'100vh'  }}>
            <SearchBox searchChange={this.onSearchChange} />
            <h2>Filtered Anime Titles:</h2>
            <ul>
              {filteredAnime.map((anime) => (
                <li key={anime.id}>{anime.title}</li>
              ))}
            </ul>            
          </div>
        );
      }
}

export default Browse;