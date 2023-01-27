import {
  GET_POKEMON,
  GET_BY_NAME,
  GET_BY_ID,
  SET_FILTER,
  GET_TYPES,
  GET_CREATED,
  GET_SORT,
} from "../actions/types";
const initialState = {
  Pokemon: [],
  allPokemon: [],
  detailPokemon: {},
  pokemonById:{},
  favorites: new Set(),
  types: [],
  pokemonFilter: [],
};

const apiReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_POKEMON:
      //* creamos una copia del array para luego manipular y no perder la data
      return {
        ...state,
        Pokemon: actions.payload,
        allPokemon: actions.payload,
      };
    case GET_BY_NAME:
      console.log(actions.payload);
      return {
        ...state,
        detailPokemon: actions.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        types: actions.payload,
      };
    case GET_BY_ID:
      return {
        ...state,
        pokemonById: actions.payload,
      };
    case SET_FILTER:
      //? nos traemos a todos los pokemones desde la copia que nunca fue afectada
      let allPokemon = state.allPokemon;
      //?
      const filterTypes =
        actions.payload === "all"
          ? allPokemon
          : allPokemon.filter((el) => el.types.includes(actions.payload));
      return {
        ...state,
        Pokemon: filterTypes,
      };
    case GET_CREATED:
      let allPokemonCreated = state.allPokemon;
      switch (actions.payload) {
        case "db":
          const filterCreated = allPokemonCreated.filter(
            (el) => el.created === true
          );
          console.log(filterCreated);
          return {
            ...state,
            Pokemon: filterCreated,
          };
        case "api":
          return {
            ...state,
            Pokemon: allPokemonCreated.filter((el) => el.created === false),
          };

        default:
          return { ...state };
      }
    case GET_SORT:
      switch (actions.payload) {
        case "asc":
          let sortAsc = state.Pokemon.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (b.name > a.name) return -1;
            return 0;
          });
          return {
            ...state,
            Pokemon:sortAsc
          };

          case "desc":

          return{
            ...state,Pokemon:state.Pokemon.sort( (a , b)=> {
              if (a.name > b.name) return -1;
              if (b.name > a.name) return 1;
              return 0;
            })
          }
          case "attack":
            return{
              ...state,Pokemon:state.Pokemon.sort( (a , b)=> {
                if (a.attack > b.attack) return -1;
                if (b.attack > a.attack) return 1;
                return 0;
              })
            }
            case "less-attack":
              return{
                ...state,Pokemon:state.Pokemon.sort( (a , b)=> {
                  if (a.attack > b.attack) return 1;
                  if (b.attack > a.attack) return -1;
                  return 0;
                })
              }
            
             

        default:
          return { ...state };
      }
     
    default:
      return { ...state };
  }
};

export default apiReducer;
