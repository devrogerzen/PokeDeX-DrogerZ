import React from "react"

const Aside = ({ data }) => {
  console.log(data)

  return (
    <aside className="aside">
      <h1>POKEMON</h1>
      <img
        className="img_pokeinfo"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          !data.id ? "57" : data.id
        }.png`}
        alt={`Pokemon seleccionarado es ${data.name} `}
      />
      <h2>{data.name}</h2>
      {!data.stats ? (
        <h2>Seleciona Un Pokemon</h2>
      ) : (
        data.stats.map((stat, id) => {
          return (
            <h3 key={id}>
              {stat.stat.name} : {stat.base_stat}
            </h3>
          );
        })
      )}
    </aside>
  );
};

export default Aside;
