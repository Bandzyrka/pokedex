import React from "react";
import "./card-list.style.css";
import { Card } from "../card/card";
import { Pokemon } from "../../App";

type CardListProps = {
  pokemons: Pokemon[];
};

export const CardList = ({ pokemons }: CardListProps) => {
  return (
    <div className="card-list">
      {pokemons.map((pokemon) => (
        <Card key={pokemon.url} pokemon={pokemon} />
      ))}
    </div>
  );
};
