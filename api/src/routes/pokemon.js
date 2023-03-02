const { Router } = require("express");
const axios = require("axios");
// const { Pokemon, Type } = require("../db");
// const { getPokemon , getById , postPokenon} = require("../controllers/pokemon.controlls");
const { Pokemon, Type } = require("../db");
const { getPokemon , getById , postPokenon} = require("../controllers/pokemon.controlls");
const {getPokemonHandler ,getByIdHandler, postPokemonHandler} = require('../handlers/pokemon.handler')
const pokemonRoute = Router();

function fnResolve(res, codigo, data) {
  res.status(codigo).json(data);
}
function fnReject(res, codigo, data) {
  res.status(codigo).json({err : data.message});
}

let sendResult = [];
pokemonRoute

  .get("/", getPokemonHandler)
 


  .get("/:id",getByIdHandler)

  // .get("/:id", (req , res)=> {
  //   const result = getById(req , Pokemon)
  //   result
  //   .then( data => fnResolve( res,200,data) )
  //   .catch( err => fnReject( res,404,err) )
  // })

  .post("/",postPokemonHandler)

  // .post("/", (req, res) => {
  //   const result = postPokenon(req , Pokemon , Type)
  //   result
  //   .then( data => fnResolve(res,200,data))
  //   .catch( err => fnReject(res , 404 , err))
  // });

module.exports = {
  pokemonRoute,
  sendResult,
};

// [ ] Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
//forma estan las imagenes
// [ ] Número de Pokemon (id)
// [ ] Estadísticas (vida, ataque, defensa, velocidad)
// [ ] Altura y peso

// pokemonRoute.get("/", (req, res) => {
//   let pokemons;

//   axios.get("https://pokeapi.co/api/v2/pokemon").then((data) => {
//       result = data.data.results.map((el) => {
//           const name = el.name
//           axios.get(el.url).then(data =>{
//               let datos = {}
//               console.log(data.data.id);
//               // console.log(data.id);
//               datos['id'] = data.data.id

//               console.log(datos);

//             })
//             console.log(datos,'----');
//       return {
//         name,
//         id:datos}
//     });
//     pokemons = [...result];
//     res.json(pokemons);
//   });
// });
