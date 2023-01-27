const { getPokemon  ,getById} = require("../controllers/pokemon.controlls");
// const { getPokemon , getById , postPokenon} = require("../controllers/pokemon.controlls");

const getPokemonHandler = async (req, res) => {
  const { name } = req.query;
  try {
    console.log(name);
    const result = await getPokemon(name);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error.message);
  }
};
const getByIdHandler = async(req , res) => {
    const { id } = req.params;
    try {
        const result = await getById(id)
        res.status(200).json(result)
    } catch (error) {
       return res.status(404).json(error.message)
        // return error.message
        
    }
}

module.exports = {
  getPokemonHandler,
  getByIdHandler,
};
