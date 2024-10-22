function PokemonCard() {
  let pokemon = pokemonList[1];
  let source = pokemon.imgSrc;
  return (<figure>
    <p>{source !== undefined ? <img src={pokemon.imgSrc} alt={pokemon.name}/> : "???"}</p>
    <figcaption alt={pokemon.name}>{pokemon.name}</figcaption>
    </figure>);
}

const pokemonList = [
  {
    name: "Dragapult",
    imgSrc:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/887.png",
  },
  {
    name: "Mew",
  },
];

export default PokemonCard;