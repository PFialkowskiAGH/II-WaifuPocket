import React from "react";
import background from "./waifu.jpg";
import './Home.css';

const Home = () =>{
    return(
        <div className="containerHome" style={{ 
            height:'82vh',
        }}>
        <div className="divHome">
        <h1 style={{fontSize:"64px"}}>WELCOME TO ANIME DATABASE</h1>
        <h1>Here you can browse anime series and maybe you will find something for yourself.</h1>
        </div>
        </div>
    ) 
}

export default Home;