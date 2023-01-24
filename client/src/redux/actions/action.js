// import { GET_POKEMON } from './types.js'
import axios from "axios";
import { GET_POKEMON ,GET_BY_NAME , GET_BY_ID, SET_FILTER ,} from "./types";



export const getTypes = ()=> {
  return (dispatch)=>{
    axios(`http://localhost:3001/types`)
    .then( result => dispatch({type:GET_BY_ID,payload:result.data}))

  }
}
export const addFilter  = (value)=> {
  console.log(value,'acions');
  return {type:SET_FILTER,payload:value}
}

export const getPokemonById= (id) => {
  return (dispatch)=>{
    axios(`http://localhost:3001/pokemons/${id}`)
    .then( result => dispatch({type:GET_BY_ID,payload:result.data}))

  }
}

export const getPokemon = (name) => {
  if(name){
    console.log(name);
    return (dispatch) => {
      axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(result => dispatch({type:GET_BY_NAME,payload:result.data}))
      .catch( err => dispatch({type:GET_BY_NAME,payload:{}}))

    }
    
  }else{
  return async (dispatch) => {
    console.log("entre 2");
    const result = await axios.get("http://localhost:3001/pokemons");
    dispatch({ type: GET_POKEMON, payload: result.data });
    // .then( data => dispatch({type:GET_POKEMON,payload:data.data}))
    // .catch( err => err.message)
  };
}
};

// console.log(getPokemon())
