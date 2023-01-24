import React, { useEffect } from 'react';
import{useParams} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {getPokemon}  from '../../redux/actions/action.js'

export default function PokemonDetaill(props) {

  const {name} = useParams()
  const dispatch = useDispatch()
  const detail = useSelector( state => state.detailPokemon)

  console.log(detail);

  
  console.log(name);
  

  return (
    <>
    <div>PokemonDetaill</div>
    {!Object.entries(detail).length? <p>pokemon no fond in data base</p>:""}
    {Object.entries(detail).length?<p>{detail.name}</p>:""
    }
    </>
  )
}
