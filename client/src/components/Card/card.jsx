import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {getPokemonById}from '../../redux/actions/action.js'

export default function Card({id , name }) {

  const dispatch = useDispatch()
  function handleClickId (e,id){
    // e.preventDefault()
    dispatch(getPokemonById(id))
  }

  return (
    <div>
      <p>name : {name}</p>
      <p>id : {id}</p>
      <Link to={`/home/info/${id}`} onClick={(e)=> handleClickId(e,id)}>
        <p>Mas detalles</p>
      </Link>
    </div>
  )
}
