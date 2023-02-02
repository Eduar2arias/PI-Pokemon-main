const {getType} = require('../controllers/type.controlls')




function getTypeHandler (req , res ){
    const resultType = getType()

    resultType
    .then( data =>  res.status(200).json(data))
    .catch( error => res.status(404).catch(error.message))
}



module.exports = getTypeHandler