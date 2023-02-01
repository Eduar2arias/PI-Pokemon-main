import React from 'react'
import { Link } from 'react-router-dom';
import style from './paginated.module.css'



export default function Paginated({paginated , pokemons , numItems}) {
  
   const numPages =Math.ceil(pokemons.length/numItems)
   const numPageArr = []

   for (let index = 1; index <= numPages; index++) {
        numPageArr.push(index)
   }

   console.log(numPageArr);
   
  return (
    <nav className={style.containerPage}>
    {numPageArr && numPageArr.map(num => 
            <Link   key={num} onClick={(e)=> paginated(num,e)}><li className={style.li}>{num}</li></Link>
        
    )}
    
    </nav>
  )
}
