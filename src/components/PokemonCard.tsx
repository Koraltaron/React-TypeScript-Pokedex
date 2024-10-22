function PokemonCard({pokemon}) {
  // let pokemon = pokemonList[0];
  let source = pokemon.imgSrc;
  return (<figure>
    <p>{source !== undefined ? <img src={pokemon.imgSrc} alt={pokemon.name}/> : "???"}</p>
    <figcaption>{pokemon.name}</figcaption>
    </figure>);

}


export default PokemonCard;