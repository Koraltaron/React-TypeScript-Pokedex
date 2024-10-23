import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

function App() {
  useEffect(
    () => {
      alert("Hello Pokemon Trainer!")
    },
    []
  );

  const [pokemonIndex, pokemonIndexCount] = useState(0);

    return (
    <div>
      <nav>
        <NavBar pokemonIndexCount={pokemonIndexCount} pokemonList={pokemonList}/>
      </nav>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />

    </div>
  );
}

const pokemonList = [
  {
    name: "Dragapult",
    imgSrc:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/887.png",
  },
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

export default App;