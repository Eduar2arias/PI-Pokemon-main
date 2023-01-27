import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import style from "../detalle/pokedex.module.css";
import { icons } from "../../assets/iconsTypes.js";


import {getPokemonById} from '../../redux/actions/action.js'
import Pokedex from './Pokedex.jsx';

export default function InfoById(props) {

  const data= useSelector(state => state.pokemonById)
  const [info , setInfo] = useState({})
  // console.log(info);

  const dispatch = useDispatch()
  const {id} = useParams()
  console.log(id);
  // console.log(detail);

useEffect(() => {
  

  dispatch(getPokemonById(id))
  setInfo(data)
  
}, [])


  return (
    <>
    <Pokedex data={data}/>
   
         
    </>
  )
}
