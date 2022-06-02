import React from "react";
import PokeAPI from "../images/pokeapi.png";

const Header = () => {
  return (
    <header className="header">
      <img className="pokeAPI_logo" src={PokeAPI} alt="Logo PokeAPI" />
      
    </header>
  );
};

export default Header;
