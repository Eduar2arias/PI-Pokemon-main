const { default: axios } = require("axios");

let getPokemon = async (req, Pokemon,Type) => {
  const { name } = req.query;
  if (name) {
    const resultDB = await Pokemon.findAll({ where: { name },include:{ model:Type} });
    if (!resultDB.length) {
      let result = axios(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
        (data) => {

          const arrType = data.data.types.map( el => el.type.name)
          let objDetail = {
            name: data.data.name,
            id: data.data.id,
            weight: data.data.weight,
            height: data.data.height,
            image: data.data.sprites.front_default,
            stats: data.data.stats,
            types: arrType,
          };
          delete objDetail.image.other;
          delete objDetail.image.versions;
          return objDetail;
        }
      ).catch(err => 'error')
      return result;
    }
    return resultDB;
  } else {
    const resultDB = await Pokemon.findAll({
      attributes: ["name", "id"],
      include: { model: Type },
    });

    const resultAPi = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=40");
    const arrPokemons = await Promise.all(
      resultAPi.data.results.map(async (character) => {
        const name = character.name;
        const { data } = await axios.get(character.url);
        const arrType = data.types.map( el => el.type.name)
        const arrStats = data.stats.map( el => {
          return {
            name : el.stat.name,
            base_stat : el.base_stat
          }
        })
        return {
          name,
          id: data.id,
          weigth: data.weight,
          heigth: data.height,
          image: data.sprites.front_default,
          stats: arrStats,
          types: arrType,
        };
      })
    );

    return [...resultDB, ...arrPokemons];
  }
};

const getById = (req, Pokemon) => {
  const { id } = req.params;
  if (id.length > 5) {
    const resultDB = Pokemon.findByPk(id,{include:{ model: Type,attributes: ["name", "id"] }}).then((data) => data);
    return resultDB;
  } else {
    const resultApi = axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((data) => {
        const arrType = data.data.types.map( el => el.type.name)
        let objDetail = {
          name: data.data.name,
          weigth: data.data.weight,
          heigth: data.data.height,
          id: data.data.id,
          image: data.data.sprites.front_default,
          stats: data.data.stats,
          types: arrType,
        };
        delete objDetail.image.other;
        delete objDetail.image.versions;

        return objDetail;
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
  postPokenon
};
