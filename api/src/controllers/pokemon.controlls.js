const { default: axios } = require("axios");
const { Pokemon, Type } = require("../db");
// const { Pokemon, Type } = require("../db");

let getPokemon = async (name) => {
  if (name) {
    
      const resultDB = await Pokemon.findAll({
        where: { name },
        include: { model: Type },
      });

      if (!resultDB.length) {
        
          let result = (await axios(`https://pokeapi.co/api/v2/pokemon/${name}`))
          .data;
        const arrType = result.types.map((el) => el.type.name);
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
          hp: hp.base_stat,
          attack: attack.base_stat,
          defense: defense.base_stat,
          speed: speed.base_stat,
          types: arrType,

          created: false,
        };

        return objPokemon;
        
        
      }
      return resultDB;
    
    
  } else {
    const resultDB = await Pokemon.findAll({
      attributes: ["name", "id"],
      include: { model: Type },
    });

    const resultAPi = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=40"
    );
    const arrPokemons = await Promise.all(
      resultAPi.data.results.map(async (character) => {
        const name = character.name;
        const { data } = await axios.get(character.url);
        const arrType = data.types.map((el) => el.type.name);
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
          image: data.sprites.front_default,
          // stats: arrStats,
          hp: hp.base_stat,
          attack: attack.base_stat,
          defense: defense.base_stat,
          speed: speed.base_stat,
          types: arrType,
          created: false,
        };
      })
    );

    return [...resultDB, ...arrPokemons];
  }
};

// let getPokemon = async (req, Pokemon, Type) => {
//   const {name} = req.query;
//   if (name) {
//     console.log('entre, controler');
//     const resultDB = await Pokemon.findAll({
//       where: { name },
//       include: { model: Type },
//     });
//     console.log(resultDB,'999');
//     if (!resultDB.length) {
//       let result = axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
//         .then((data) => {
//           const arrType = data.data.types.map((el) => el.type.name);
//           const arrStats = data.data.stats.map((el) => {
//             return {
//               name: el.stat.name,
//               base_stat: el.base_stat,
//             };
//           });
//           // console.log(arrStats,'asdas');
//           const [hp, attack, defense, speed] = arrStats;
//           let objDetail = {
//             name: data.data.name,
//             id: data.data.id,
//             weight: data.data.weight,
//             height: data.data.height,
//             image: data.data.sprites.other.home.front_default,
//             stats: data.data.stats,
//             hp: hp.base_stat,
//             attack: attack.base_stat,
//             defense: defense.base_stat,
//             speed: speed.base_stat,
//             types: arrType,

//             created: false,
//           };
//           delete objDetail.image.other;
//           delete objDetail.image.versions;
//           return objDetail;
//         })
//         .catch((err) => err.message);
//       return result;
//     }
//     return resultDB;
//   } else {
//     const resultDB = await Pokemon.findAll({
//       attributes: ["name", "id"],
//       include: { model: Type },
//     });

//     const resultAPi = await axios.get(
//       "https://pokeapi.co/api/v2/pokemon?limit=40"
//     );
//     const arrPokemons = await Promise.all(
//       resultAPi.data.results.map(async (character) => {
//         const name = character.name;
//         const { data } = await axios.get(character.url);
//         const arrType = data.types.map((el) => el.type.name);
//         const arrStats = data.stats.map((el) => {
//           return {
//             name: el.stat.name,
//             base_stat: el.base_stat,
//           };
//         });
//         // console.log(arrStats,'asdas');
//         const [hp, attack, defense, speed] = arrStats;

//         return {
//           name,
//           id: data.id,
//           weigth: data.weight,
//           heigth: data.height,
//           image: data.sprites.front_default,
//           // stats: arrStats,
//           hp: hp.base_stat,
//           attack: attack.base_stat,
//           defense: defense.base_stat,
//           speed: speed.base_stat,
//           types: arrType,
//           created: false,
//         };
//       })
//     );

//     return [...resultDB, ...arrPokemons];
//   }
// };

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
        const arrType = result.data.types.map((el) => el.type.name);
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
          hp: hp.base_stat,
          attack: attack.base_stat,
          defense: defense.base_stat,
          speed: speed.base_stat,
          types: arrType,

          created: false,
        };

        return objPokemon;
      });

    return resultApi;
  }
};

const postPokenon = (req, Pokemon, Type) => {
  const { name, type } = req.body;
  const resultPost = Pokemon.create({ name }).then((datapokemon) => {
    Type.findAll({ where: { name: type } }).then((data) => {
      console.log(data);
      datapokemon.addType(data);
    });
    return resultPost;
  });
};

module.exports = {
  getPokemon,
  getById,
  postPokenon,
};
