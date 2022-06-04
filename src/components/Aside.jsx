import React from "react";

const Aside = ({ data }) => {
  console.log(data)
  return (
    <aside className="aside">
      <h1>POKEMON</h1>
      <br />
      <img className="img_pokeinfo"
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} alt="" />
      <h2>{data.name}</h2>
    </aside>
  );
};

export default Aside;
