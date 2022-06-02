import React from "react";

const Main = ({ pokemons }) => {
  return (
    <main className="main">
      {pokemons.map((pokes) => {
        return (
          <div className="card" key={pokes.id}>
            <img src={pokes.sprites.front_default} alt="" />
            <strong>{pokes.name}</strong>
          </div>
        );
      })}
    </main>
  );
};

export default Main;
