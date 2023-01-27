import React from "react";
import { Link, Route } from "react-router-dom";
import InfoById from "../detalle/infoById";
import Createpokemon from "../Forms/Createpokemon";
import PokemonDetaill from "../pokemons/PokemonDetaill";
import Pokemon from "../pokemons/Pokemons";
import SearchByName from "../searchs/SearchByName";
import Menu from "./menu";
import {useDispatch} from 'react-redux'
import {getPokemon} from '../../redux/actions/action.js'
import PokemonFilter from "../pokemons/PokemonFilter";

export default function Home(props) {
  const dispatch = useDispatch()
  const fnSearchByname = (name)=> {
    dispatch(getPokemon(name))
  }
  return (
    <div>
      <Link to="/">
        <input type="button" value="main" />
      </Link>
      <SearchByName fnSearchByname={fnSearchByname}/>
      <hr />
      <section>
        <Link to="/home/pokemons">Pokemon</Link>
        <Link to="/home/create">Create Pokemon</Link>
        <Menu/>
      </section>
      <hr/>
      <section>
        <Route path="/home/pokemons">
          <Pokemon />
        </Route>
        <Route path="/home/detalle/:name">
          <PokemonDetaill />
        </Route>
        <Route path="/home/create">
          <Createpokemon />
        </Route>
        <Route path="/home/info/:id">
          <InfoById />
        </Route>
        <Route path='/home/f/types'>
          <PokemonFilter/>
        </Route>  
      </section>
    </div>
  );
}

// //* importamos la action a utilizar
// import { getPokemon } from "../../redux/actions/action.js";
// import { connect } from "react-redux";
// import React,{useState} from "react";
// import Card from "../Card/card.jsx";
// import { Link, Route } from "react-router-dom";
// import SearchByName from '../searchs/SearchByName';

// export function Home(props) {

//   const [resultApi, setRestlApy] = useState([])
//   const [pokemons, setPokemon] = useState([])
//   const [numPage, setNumPage] = useState(0)
//   const [next , setNext] = useState(false)
//   const [preview , setPreview] = useState(false)
//   console.log(props.Pokemon);
//   // console.log(resultApi);
//   const fnNext = (event) => {

//       event.preventDefault();
//       console.log(props.Pokemon.length);
//       const toalData = props.Pokemon.length
//       setNumPage(numPage+1)
//       const index = (numPage +1) * 12
//       console.log(numPage+1);
//       console.log('tuki');
//       setPokemon([...resultApi.slice(index,(index+1)*12)])
//       if ((toalData - index) <= 12){
//         setNext(false)
//       }
//       if(index >= 12) setPreview(true)

//       console.log('tuki');
//       console.log(pokemons);
//   }

//   const fnpreview = (event) => {
//     event.preventDefault();
//     console.log(props.Pokemon.length);

//     setNumPage(numPage-1)
//     const index = (numPage -1) * 12
//     console.log(numPage+1);
//     console.log('tuki');
//     setPokemon([...resultApi.slice(index,(index)*12)])
//     if ((index) <= 0){
//       setNext(true)
//       setPreview(false)
//     }
//     console.log('tuki');
//     console.log(pokemons);
// }
// const fnSearchByname = (name) => {
//   console.log(name);
// }

//   React.useEffect(() => {
//       console.log('me subo')
//       props.getPokemon()
//       // console.log((props.getPokemon()).state);
//       setRestlApy([...props.Pokemon])
//       setPokemon([...props.Pokemon.slice(0,12)])
//       props.Pokemon.length > 12? setNext(true):setNext(false)
//       return () => {
//         console.log('me fui');
//         props.getPokemon()

//       }

//     // setPokemon([...props.Pokemon.splice(0,12)])
//   }, []);

//   return(
//     <div>
//     <SearchByName fnSearchByname={fnSearchByname}/>
//     <Link to='/'>
//     <input type="button" value="main"/>
//     </Link>
//     <hr/>
//     {preview ? <a href="/"onClick={(e)=>
//     fnpreview(e)}>preview</a>:''}
//     <span>#{numPage}</span>
//     {next ? <a href="/"onClick={(e)=>
//     fnNext(e)}>next</a>:''}
//     {/* <button onClick={fnAumentar}>aumenta</button> */}
//     <div>{
//        pokemons.map( el =>
//         <Card
//           key={el.id}
//           name = {el.name}
//           id = {el.id}
//         />
//        )

//     }
//     <Link to='/home/detalle'>
//     <input type="button" value="main"/>

//     </Link>
//     </div>

//       <Route path="/home/detalle">
//     <div>
//         <p>Probando cosas</p>
//     </div>
//       </Route>

//     </div>
//   )
// }
// export const mapStateToProps = (state) => {
//   return {
//     Pokemon: state.Pokemon,
//   };
// };

// export const mapDispatchToProps = (dispatch) => {
//   return {
//     getPokemon: () => dispatch(getPokemon()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Home);

// (mapStateToProps, mapDispatchToProps)
