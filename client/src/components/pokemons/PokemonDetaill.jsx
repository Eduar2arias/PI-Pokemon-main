import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Pokedex from "../detalle/Pokedex.jsx";

export default function PokemonDetaill(props) {
  const { name } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detailPokemon);
  // useEffect(()=>{
  //   dispatch(getPokemon(name))
  // },[])
  
  console.log(name);
  
  console.log(typeof detail );
  console.log(detail);
  console.log(!Object.entries(detail).length,'ghjg');


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

