//* importamos la action a utilizar
import { getPokemon } from "../../redux/actions/action.js";
import { connect, useSelector } from "react-redux";
import React, { useState } from "react";
import Card from "../Card/card.jsx";
import { Link, Route } from "react-router-dom";
import SearchByName from "../searchs/SearchByName";

export function Pokemons(props) {

  const [resultApi, setRestlApy] = useState([...props.Pokemon]);
  const [pokemons, setPokemon] = useState([...props.Pokemon.slice(0, 12)]);
  const [numPage, setNumPage] = useState(0);
  const [next, setNext] = useState(false);
  const [preview, setPreview] = useState(false);


  
  const fnNext = (event) => {
    event.preventDefault();
    const toalData = props.Pokemon.length;
    setNumPage(numPage + 1);
    const index = (numPage + 1) * 12;
    setPokemon([...resultApi.slice(index, (index + 1) * 12)]);
    if (toalData - index <= 12) {
      setNext(false);
    }
    if (index >= 12) setPreview(true);
  };

  const fnpreview = (event) => {
    event.preventDefault();
    setNumPage(numPage - 1);
    const index = (numPage - 1) * 12;
    console.log(numPage + 1);
    console.log("tuki");
    setPokemon([...resultApi.slice(index, index * 12 || 12)]);
    if (index <= 0) {
      setNext(true);
      setPreview(false);
    }
    console.log("tuki");
    console.log(pokemons);
  };
  

  React.useEffect(() => {

    props.Pokemon.length > 12 ? setNext(true) : setNext(false);
  
  }, []);

  return (
    <div>
      <hr />
      {preview ? (
        <a href="/" onClick={(e) => fnpreview(e)}>
          preview
        </a>
      ) : (
        ""
      )}
      <span>#{numPage}</span>
      {next ? (
        <a href="/" onClick={(e) => fnNext(e)}>
          next
        </a>
      ) : (
        ""
      )}

      {/* <button onClick={fnAumentar}>aumenta</button> */}
      <div>
        {pokemons.map((el) => (
          <Card 
            key={el.id} 
            name={el.name} 
            id={el.id} />
        ))}
      </div>
    </div>
  );
}
export const mapStateToProps = (state) => {
  return {
    Pokemon: state.Pokemon,
  };
};


export default connect(mapStateToProps, null)(Pokemons);
