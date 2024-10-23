interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  pokemonIndexCount: (index: number) => void;
  pokemonList: Pokemon[];
}


function NavBar({pokemonIndex, pokemonIndexCount, pokemonList}:NavBarProps) {
  
  

  const handleClickPlus = () => {
    {console.log(pokemonList.length)}
    {console.log(pokemonIndex)}
    if (pokemonIndex < pokemonList.length-1) {
      pokemonIndexCount(pokemonIndex+1)

    }
  }

  const handleClickMinus = () => {
    if (pokemonIndex > 0) {
      pokemonIndexCount(pokemonIndex-1)
    }
  }

  return (
    <>
    <button onClick={handleClickMinus}>Précédent</button>
    <button onClick={handleClickPlus}>Suivant</button>
    </> 
  )
}

export default NavBar;