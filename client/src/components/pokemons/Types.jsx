import React from 'react'

export default function Types(props) {
  const {name} = props
  return (
    <>
    <option value={name}>{name.toUpperCase()}</option>

    </>
  )
}