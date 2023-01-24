import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {getPokemonById} from '../../redux/actions/action.js'

export default function InfoById() {

  const dispatch = useDispatch()
  const {id} = useParams()
  const detail = useSelector(state => state.detailPokemon)
  console.log(id);
  console.log(detail);

useEffect(() => {
  

  dispatch(getPokemonById(id))
  
}, [])


  return (
    <>
    <div>infoById</div>
    <p>{detail.name}</p>
    </>
  )
}
