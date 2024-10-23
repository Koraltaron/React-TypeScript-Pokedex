import "../style/NavBar.css"

interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex?: number;
  pokemonIndexCount: (index: number) => void;
  pokemonList: Pokemon[];
}


function NavBar({ pokemonIndexCount, pokemonList}:NavBarProps) {
  return (
    <>
      <section>
        <ul>
          {pokemonList.map((pokemon, i) => (
            <li key={pokemon.name}>
              <button onClick={() => pokemonIndexCount(i)}>{pokemon.name}</button>
            </li>
          ))}
        </ul>
      </section>
    </> 
  )
}

export default NavBar;