import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import BgAgua from "./images/bg-agua.jpg";


const App = () => {

  const [pokeURL, setPokeURL] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [pokeData, setPokeData] = useState([])
  const [pokemon, setPokemon] = useState([])
  const [pokeDex, setPokeDex] = useState([])


  let getPokemons = useCallback( async() => {
    const {data} =  await axios.get(pokeURL)
    setPokeData(data)

    axios.get(pokeURL)
    .then((res) => {
      return res.data.results
    })
    .then((results) => {
      return Promise.all(results.map((res) => axios.get(res.url)))
    })
    .then((results) => {
      setPokemon(results.map((res) => res.data))
    })
  },[pokeURL],


  )

  const btnPrevPage = e => {
    e.preventDefault()
    setPokeURL(pokeData.previous)
  }

  const btnNextPage = e => {
    e.preventDefault()
    setPokeURL(pokeData.next)
  }

useEffect(() => {
  getPokemons()
}, [getPokemons])

  return (
    <div className="App">
      <img className="bg_App" src={BgAgua} alt="Background of Water or Land" />
      <Header />
      <Main pokemons={pokemon} infoPokemon={poke => setPokeDex(poke)}/>
      <div className='btn'>
      <button onClick={btnPrevPage}>Previuos</button>
      <button onClick={btnNextPage}>Next</button>
    </div>
      <Aside data={pokeDex}/>
      <Footer />
    </div>
  );
};

export default App;
