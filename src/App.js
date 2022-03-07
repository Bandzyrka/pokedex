import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import { CardList } from './components/card-list/card-list';
import { Search } from './components/search/search.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      searchField: ''
    }
  }
  componentDidMount() {
    
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=9')
    .then(res => {
      const pokemons = res.data.results;
      this.setState({pokemons: pokemons});
    })
  }
  handleChange =  e => {
    this.setState({searchField: e.target.value})
  }
  render() {
    const {pokemons, searchField} = this.state; 
    const filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
    <div className='App'>
      <h1>Pokedex</h1>
      <Search placeholder = {'Search pokemon'} handleChange = {this.handleChange} />
      <CardList pokemons = {filteredPokemons}/> 
    </div>
      );
  }
}


export default App;
