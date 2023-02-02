import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardFavorites from './CardFavorites';
import {deleteFavorite} from '../../redux/actions/action.js'
import style from './favorites.module.css'

function Favorites() {

    const list= useSelector( state => state.favorites)
    const dispatch = useDispatch()
   
  


    
    const handleClickId=(e, id)=>{
        
        dispatch(deleteFavorite(id))
      
    }
    
  return (
    <div>
        {!list.length? 
            <p>No tienes favoritos</p>
        :""}  
        <div className={style.containerCard}>
            {list.map(el =>
            
            <CardFavorites key={el.id} data={el} handleClickId={handleClickId}/>
            )}
        </div>
    </div>
  )
}

export default Favorites