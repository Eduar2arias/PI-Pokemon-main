import React from 'react'
import style from './paginated.module.css'



export default function Paginated({paginated , pokemons , numItems}) {
  
   const numPages =Math.ceil(pokemons.length/numItems)
   const numPageArr = []

   for (let index = 1; index <= numPages; index++) {
        numPageArr.push(index)
   }

   
  return (
    <nav className={style.containerPage}>
    {numPageArr && numPageArr.map(num => 
            <div   key={num} onClick={(e)=> paginated(num,e)}><li className={style.li}>{num}</li></div>
        
    )}
    
    </nav>
  )
}
