const {DataTypes} = require('sequelize')

module.exports = (Sequelize) => {
    Sequelize.define('Type',{
        id:{
            type :DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement : true
        },
        name:{
            type: DataTypes.STRING,
            allowNull : false
        }
    },
    {timestamps:false}
    )
}


