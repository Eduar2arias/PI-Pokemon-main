// import { GET_POKEMON } from './types.js'
import axios from "axios";
import { GET_POKEMON ,GET_BY_NAME , GET_BY_ID, SET_FILTER, GET_TYPES, GET_CREATED ,GET_SORT} from "./types";


export const getTypes= () => {
  return (dispatch)=>{
    axios(`http://localhost:3001/types`)
    .then( result => dispatch({type:GET_TYPES,payload:result.data}))
    .catch( err => err.message)

  }
}
export const addFilter  = (value)=> {
    console.log(value);
  return {type:SET_FILTER,payload:value}
}

export function getCreated (value){
  return {
    type:GET_CREATED,
    payload:value
  }
}

export function setSorts (value){
  return{
    type:GET_SORT,
    payload:value
  }
}

export const getPokemonById= (id) => {
  return (dispatch)=>{
    axios(`http://localhost:3001/pokemons/${id}`)
    .then( result => 
      { console.log(result.data);
      dispatch({type:GET_BY_ID,payload:result.data})})
    .catch( err=> 
      {console.log(err)
        })

  }
}

export const getPokemon = (name) => {
  if(name){
    console.log(name);
    return (dispatch) => {
      axios(`http://localhost:3001/pokemons?name=${name}`)
      .then(result =>{
        console.log(result.data)
        dispatch({type:GET_BY_NAME,payload:result.data})})
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
