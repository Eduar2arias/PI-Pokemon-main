import React, { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import Card from '../Card/card';


export default function PokemonFilter() {
    const dataFilter = useSelector( state => state.pokemonFilter)
    console.log(dataFilter,'componente');
    // const pokemons =useSelector( state => state.Pokemon)
    // const [data , setData] = useState([...pokemons])
    // const [data , setData] = useState([...dataFilter])
    const [pokemon, setPokemon] = useState([...dataFilter])
    // console.log(dataFilter);
    // console.log(pokemons);
    // console.log(pokemon);
    console.log(pokemon,'poke');
    useEffect(()=>{
        
        console.log('volvi');
        // console.log('data',data);
        // let result = data.filter( el => {            
        //     return el.types.includes(dataFilter)
            
        // })
        // console.log(result,'res');
        // setPokemon([...data]) 
        // // setData([...pokemons])
        // console.log('data',data);
    },[setPokemon])
  return (
    <div>
        {pokemon.map( el => {
            return <Card
                key={el.id}
                id = {el.id}
                name = {el.name}
            />
        })}
    </div>
  )
}
