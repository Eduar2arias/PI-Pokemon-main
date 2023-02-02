import React from "react";

import { useSelector } from "react-redux";

import Pokedex from "../detalle/Pokedex.jsx";

export default function PokemonDetaill(props) {
 
  const detail = useSelector((state) => state.detailPokemon);



  return (
    <>
      <div>PokemonDetaill</div>
      {!Object.entries(detail).length? (
        <p>pokemon no fond in data base</p>
      ) : (
        ""
      )}
      {Object.entries(detail).length ? (
        <Pokedex data={detail}/>
      ) : (
        ""
      )}
    </>
  );
}

