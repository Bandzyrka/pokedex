import {useState, useEffect, ChangeEvent} from 'react'

import { CardList } from './components/card-list/card-list'
import { Search } from './components/search/search.component'

import { getData } from './utils/data.utils'
import './App.css'

type Pokemon = {
  id: string;
  name: string;
  sprite: string;
}
type Response = {
  count: number;
  results: Pokemon[];
}
const App = () => {
  const [searchField, setSearchField] = useState('')
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons)
  
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemons = await getData<Response>('https://pokeapi.co/api/v2/pokemon?limit=9')
      setPokemons(pokemons.results)
    }
    fetchPokemons();
  }, [])
  useEffect(() => {
    const newFilteredPokemons = pokemons.filter(pokemon => {
      return pokemon.name.toLocaleLowerCase().includes(searchField)
    })
    setFilteredPokemons(newFilteredPokemons)
  }, [pokemons, searchField])
  
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <Search
        className='pokemons-search-box'
        handleChange={onSearchChange}
        placeholder='search pokemons'
      />
      <CardList pokemons={filteredPokemons} />
    </div>
  )
}

export default App