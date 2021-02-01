import React, { useState, useEffect } from "react";
import axios from "axios";

function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, []);

  useEffect(() => {
    const pokemonAnterior = pokemon;
    if (pokemonAnterior !== props.pokemon) {
      pegaPokemon(props.pokemon);
    }
  }, [props.pokemon, pokemon]);

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const novoPokemon = pokemon;

  return (
    <div>
      <p>{novoPokemon.name}</p>
      <p>{novoPokemon.weight} Kg</p>
      {novoPokemon.types && <p>{novoPokemon.types[0].type.name}</p>}
      {novoPokemon.sprites && (
        <img src={novoPokemon.sprites.front_default} alt={novoPokemon.name} />
      )}
    </div>
  );
}
export default PokeCard;
