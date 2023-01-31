import React, { useState , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardFavorites from './CardFavorites';
import {deleteFavorite} from '../../redux/actions/action.js'

function Favorites() {

    const list= useSelector( state => state.favorites)
    const dispatch = useDispatch()
    const [pokemonList , setPokemonlist] = useState([...list])
    let array =[...list]

    console.log(list,'primeri');

    // useEffect(() => {
      
    //     setPokemonlist([...list])
        
    // }, [])
    
    const handleClickId=(e, id)=>{
        console.log('holis');
        console.log(id);
        // setPokemonlist([...pokemonList.filter( el=> el.id !== id)])
        dispatch(deleteFavorite(id))
        setPokemonlist([...list])
    }
    console.log(list);
    console.log(pokemonList,'acabando');

    // const ArrFavorites = [...list]

    console.log(pokemonList,'adasdas');
  return (
    <div>
        {!list.length? 
            <p>No tienes favoritos</p>
        :""}  
        <>
            {list.map(el =>
            
            <CardFavorites key={el.id} data={el} handleClickId={handleClickId}/>
            )}
        </>
    </div>
  )
}

export default Favorites