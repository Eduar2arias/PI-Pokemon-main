import { GET_POKEMON  , GET_BY_NAME, GET_BY_ID, SET_FILTER, GET_TYPES} from "../actions/types";
const initialState = {
  Pokemon: [],
  detailPokemon :{},
  favorites: new Set(),
  types : [],
  pokemonFilter : []

};

const apiReducer = (state = initialState, actions) => {
  
  switch (actions.type) {
    case GET_POKEMON:
      return {
        ...state,
        Pokemon:actions.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,detailPokemon:actions.payload
      }
    case  GET_TYPES:
      return {
        state,types:[...actions.payload]
      }
    case GET_BY_ID:
      return {
        ...state,detailPokemon:actions.payload
      }
    case SET_FILTER:
      console.log(actions.payload,'reducer');
      console.log(actions.payload,'reduce');
      const allPokemon = state.Pokemon
      console.log(allPokemon, 'reduce');
      const resultFilter = allPokemon.filter( el => el.types.includes(actions.payload))
      console.log(resultFilter, 'reduce');
      return {
        ...state,pokemonFilter:resultFilter
      }
    default:
      console.log('holis');
      return { ...state };
  }
};

export default apiReducer;
