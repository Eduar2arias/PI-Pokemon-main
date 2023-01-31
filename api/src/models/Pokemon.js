const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV1,
      primaryKey : true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:DataTypes.UUIDV1,
      
    },
    life:{
      type:DataTypes.INTEGER,
      validate:{
        min : 10,
        max:100
      }
    },
    stroke:{
      type:DataTypes.FLOAT
    },
    defense:{
      type:DataTypes.FLOAT
    },
    speed:{
      type:DataTypes.FLOAT
    },
    height:{
      type:DataTypes.FLOAT
    },
    weight:{
      type:DataTypes.FLOAT
    },
  },
  {timestamps:false}
  );
};
