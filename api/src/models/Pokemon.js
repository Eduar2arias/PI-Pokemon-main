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
    speed:{
      type:DataTypes.FLOAT
    },
    heigth:{
      type:DataTypes.FLOAT
    },
    weigth:{
      type:DataTypes.FLOAT
    },
  },
  {timestamps:false}
  );
};
