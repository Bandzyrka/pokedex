import React from 'react';
import './card-list.style.css'
import { Card } from '../card/card'

export const CardList = props => {

    return <div className="card-list"> 
                {props.pokemons.map(pokemon => <Card key={pokemon.url} pokemon={pokemon}/>)} 
    </div>;
}