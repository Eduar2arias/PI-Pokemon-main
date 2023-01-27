import React from 'react'
import { Link } from 'react-router-dom';

export default function Paginated({paginated , pokemons , numItems}) {
    console.log(pokemons);
   const numPages =Math.ceil(pokemons.length/numItems)
   const numPageArr = []
   console.log(numPages,'asd');
   for (let index = 1; index <= numPages; index++) {
        numPageArr.push(index)
   }

   console.log(numPageArr);
   
  return (
    <nav>
    {numPageArr && numPageArr.map(num => 
            <Link key={num} onClick={(e)=> paginated(num,e)}><li>{num}</li></Link>
        
    )}
    </nav>
  )
}
