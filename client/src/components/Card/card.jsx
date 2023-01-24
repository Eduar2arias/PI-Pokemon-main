import React from 'react'
import { Link } from 'react-router-dom'

export default function card({id , name }) {
  return (
    <div>
      <p>name : {name}</p>
      <p>id : {id}</p>
      <Link to={`/home/info/${id}`}>
        <p>Mas detalles</p>
      </Link>
    </div>
  )
}
