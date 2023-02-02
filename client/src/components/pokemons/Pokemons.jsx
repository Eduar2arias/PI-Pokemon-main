//* importamos la action a utilizar
import {
  addFilter,
  getTypes,
  getPokemon,
  getCreated,
  setSorts,
} from "../../redux/actions/action.js";
import { connect} from "react-redux";
import React, { useState, useEffect } from "react";
import Card from "../Card/Card";


import Types from "./Types.jsx";
import Paginated from "./Paginated.jsx";
import style from "./pokemons.module.css";

export function Pokemons(props) {
  //!estado general
  const { Pokemon, types } = props;
 
  const [numPage, setNumPage] = useState(1);
  const [numItem, setItems] = useState(12);
  const [next, setNext] = useState(true);
  const [prew, setPrew] = useState(false);
  const [order, setOrder] = useState("");
  // const [totalPages,seTotalPages] = useState(Pokemon.length)
  const lastIndexItems = numPage * numItem;
  const firstIndexItems = lastIndexItems - numItem;

  const pokemons = Pokemon.slice(firstIndexItems, lastIndexItems);



  const handlerNext = (e) => {
    e.preventDefault();
    if (pokemons.length < 12 || props.Pokemon === lastIndexItems) {
      return setNext(false);
    }
    setPrew(true);
    setNumPage(numPage + 1);
  };
  function handlerPrew(e) {
    e.preventDefault();
    if (firstIndexItems === 0) {
      console.log("entro");
      return setPrew(false);
    }
    setNumPage(numPage - 1);
  }

  function paginated(pageNumber, e) {
    e.preventDefault();
    setNumPage(pageNumber);
  }

  const handlerSort = (e) => {
    const value = e.target.value;
    props.setSorts(value);
    setNumPage(1);
    setOrder(`order-${value}`);
  };
  function changeCreated(e) {
    const value = e.target.value;
    props.getCreated(value);
  }

  const changeType = (e) => {
    const value = e.target.value;
    props.addFilter(value);
  };

  useEffect(() => {
  
    props.getPokemon();
    props.getTypes();
   

  }, []);

  return (
    <div>
      <section className={style.filter}>
        <label htmlFor="order">Order</label>
        <select id="order" onChange={(e) => handlerSort(e)}>
          <option value="default">----</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
          <option value="attack">biggest attack</option>
          <option value="less-attack">least attack</option>
        </select>
        <label htmlFor="creat">All Pokemon</label>
        <select id="creat" onChange={(e) => changeCreated(e)}>
          <option value="all">ALL</option>
          <option value="db">BY-DB</option>
          <option value="api">BY-API</option>
        </select>
        <label htmlFor="types">Types</label>
        <select id="types" onChange={(e) => changeType(e)}>
          <option value="all">ALL</option>
          {types &&
            types.map((option) => <Types key={option.id} name={option.name} />)}
        </select>
      </section>
      
      <section className={style.pags}>
        {prew && firstIndexItems > 0 ? (
          
            <span className={style.next} onClick={(e) => handlerPrew(e)}>⏮️</span>
         
        ) : (
          ""
        )}
        <span>
          {numPage}
        </span>
        {next && pokemons.length >= 12 ? (
          
            <span className={style.prew} onClick={(e) => handlerNext(e)}>⏭️</span>
          
        ) : (
          ""
        )}
      </section>
      <hr />
      <div className={style.containerCards}>
        {pokemons &&
          pokemons.map((el) => (
            <Card key={el.id} data={el} id={el.id} name={el.name} />
          ))}
      </div>
      <div className={style.pepe}>
        <Paginated
          paginated={paginated}
          pokemons={Pokemon}
          numItems={numItem}
        />
      </div>
    </div>
  );
}

export const mapStateToProps = (state) => {
  return {
    Pokemon: state.Pokemon,
    types: state.types,
    pokemonFilter: state.pokemonFilter,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    getTypes: () => dispatch(getTypes()),
    addFilter: (value) => dispatch(addFilter(value)),
    getPokemon: () => dispatch(getPokemon()),
    getCreated: (value) => dispatch(getCreated(value)),
    setSorts: (value) => dispatch(setSorts(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);

// export function Pokemons(props) {

//   const [resultApi, setRestlApy] = useState([...props.Pokemon]);
//   const [pokemons, setPokemon] = useState([...props.Pokemon.slice(0, 12)]);
//   const [numPage, setNumPage] = useState(0);
//   const [next, setNext] = useState(false);
//   const [preview, setPreview] = useState(false);
//   console.log(props.types);

//   const fnNext = (event) => {
//     event.preventDefault();
//     const toalData = props.Pokemon.length;
//     setNumPage(numPage + 1);
//     const index = (numPage + 1) * 12;
//     setPokemon([...resultApi.slice(index, (index + 1) * 12)]);
//     if (toalData - index <= 12) {
//       setNext(false);
//     }
//     if (index >= 12) setPreview(true);
//   };

//   const fnpreview = (event) => {
//     event.preventDefault();
//     setNumPage(numPage - 1);
//     const index = (numPage - 1) * 12;
//     console.log(numPage + 1);
//     console.log("tuki");
//     setPokemon([...resultApi.slice(index, index * 12 || 12)]);
//     if (index <= 0) {
//       setNext(true);
//       setPreview(false);
//     }
//     console.log("tuki");
//     console.log(pokemons);
//   };

//   React.useEffect(() => {

//     props.Pokemon.length > 12 ? setNext(true) : setNext(false);
//     console.log('llego');
//     props.getTypes()
//     console.log('llego');

//   }, []);

//   const changeType = (e) => {
//     const value = e.target.value
//     console.log(e.target);
//     console.log(value);
//     // setType(value)
//     // console.log(,'stado');
//     props.addFilter(value)
//     setRestlApy([...props.pokemonFilter])
//     console.log(resultApi);

//   }
//   return (
//     <div>
//       <div>
//         <select onChange={(e)=> changeType(e)}>
//           <option value='all'>ALL</option>
//           {props.types.map( e => {
//             return <Types
//               name={e.name}
//             />}
//           )}
//         </select>
//       </div>
//       <hr />
//       {preview ? (
//         <a href="/" onClick={(e) => fnpreview(e)}>
//           preview
//         </a>
//       ) : (
//         ""
//       )}
//       <span>#{numPage}</span>
//       {next ? (
//         <a href="/" onClick={(e) => fnNext(e)}>
//           next
//         </a>
//       ) : (
//         ""
//       )}

//       {/* <button onClick={fnAumentar}>aumenta</button> */}
//       <div>
//         {pokemons.map((el) => (
//           <Card
//             key={el.id}
//             name={el.name}
//             id={el.id} />
//         ))}
//       </div>
//     </div>
//   );
// }
// export const mapStateToProps = (state) => {
//   return {
//     Pokemon: state.Pokemon,
//     types: state.types,
//     pokemonFilter: state.pokemonFilter
//   };
// };
// export const mapDispatchToProps = (dispatch) => {
//   return {
//     getTypes: () => dispatch(getTypes()),
//     addFilter : (value)=> dispatch(addFilter(value))
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);
