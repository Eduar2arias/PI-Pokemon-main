const { default: axios } = require("axios");
const { Pokemon, Type } = require("../db");
// const { Pokemon, Type } = require("../db");

let getPokemon = async (name) => {
  if (name) {
    
      const resultDB = await Pokemon.findAll({
        where: { name },
        include: { model: Type ,
          through: {
            attributes: []
          }
  }});

      if (!resultDB.length) {
        
          let result = (await axios(`https://pokeapi.co/api/v2/pokemon/${name}`))
          .data;
        const arrType = result.types.map((el) => {

          return{
            name : el.type.name
          }
        }
        );
        const arrStats = result.stats.map((el) => {
          return {
            name: el.stat.name,
            base_stat: el.base_stat,
          };
        });
        // console.log(arrStats,'asdas');
        const [hp, attack, defense, speed] = arrStats;

        let objPokemon = {
          name: result.name,
          id: result.id,
          weight: result.weight,
          height: result.height,
          image: result.sprites.other.home.front_default,
          stats: result.stats,
          life: hp.base_stat,
          stroke: attack.base_stat,
          defense: defense.base_stat,
          speed: speed.base_stat,
          Types: arrType,

          created: false,
        };

        return objPokemon;
        
        
      }
      return resultDB;
    
    
  } else {
    const resultDB = await Pokemon.findAll({
      include: { model: Type ,through: {
        attributes: []
      }},
    });

    const resultAPi = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=40"
    );
    const arrPokemons = await Promise.all(
      resultAPi.data.results.map(async (character) => {
        const name = character.name;
        const { data } = await axios.get(character.url);
        const arrType = data.types.map((el) => {
          return{
            name : el.type.name
          }
        });
        const arrStats = data.stats.map((el) => {
          return {
            name: el.stat.name,
            base_stat: el.base_stat,
          };
        });
        // console.log(arrStats,'asdas');
        const [hp, attack, defense, speed] = arrStats;

        return {
          name,
          id: data.id,
          weight: data.weight,
          height: data.height,
          image: data.sprites.other.dream_world.front_default,
          // stats: arrStats,
          life: hp.base_stat,
          stroke: attack.base_stat,
          defense: defense.base_stat,
          speed: speed.base_stat,
          Types: arrType,
          created: false,
        };
      })
    );

    return [...resultDB, ...arrPokemons];
  }
};



const getById = (id) => {

  if (id.length > 5) {
    const resultDB = Pokemon.findByPk(id, {
      include: { model: Type, attributes: ["name", "id"] },
    }).then((data) => data);
    return resultDB;
  } else {
    const resultApi = axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((result) => {
        const arrType = result.data.types.map((el) => {

          return{
            name : el.type.name
          }
        }
        
        );
        const arrStats = result.data.stats.map((el) => {
          return {
            name: el.stat.name,
            base_stat: el.base_stat,
          };
        });
        // console.log(arrStats,'asdas');
        const [hp, attack, defense, speed] = arrStats;

        let objPokemon = {
          name: result.data.name,
          id: result.data.id,
          weight: result.data.weight,
          height: result.data.height,
          image: result.data.sprites.other.home.front_default,
          // stats: result.data.stats,
          life: hp.base_stat,
          stroke: attack.base_stat,
          defense: defense.base_stat,
          speed: speed.base_stat,
          Types: arrType,

          created: false,
        };

        return objPokemon;
      });

    return resultApi;
  }
};

const postPokenon = async (body) => {
  const { name, image, height ,weight,stroke,life,defense,speed, type } = body
  
  const resultPost = await Pokemon.create({ name, image, height ,weight,stroke,life,defense,speed })
  const resultType = await Type.findAll({ where: { name: type } })
  console.log(resultType);
  console.log(resultPost,'asdsa');

  resultPost.addType(resultType)

  return resultPost;
};

// const postPokenon = async (req, Pokemon, Type) => {
//   const { name, image, height ,weight,stroke,life,defense,speed, type } = req.body;
//   console.log(req.body);
//   const resultPost = await Pokemon.create({ name, image, height ,weight,stroke,life,defense,speed })
//   const resultType = await Type.findAll({ where: { name: type } })
//   console.log(resultType);
//   console.log(resultPost,'asdsa');

//   resultPost.addType(resultType)
//   // .then((datapokemon) => {
//     // Type.findAll({ where: { name: type } }).then((data) => {
//     //   console.log(data);
//     //   datapokemon.addType(data);
//     // });
//   // });
//   return resultPost;
// };

module.exports = {
  getPokemon,
  getById,
  postPokenon,
};
