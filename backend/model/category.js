
var Sequelize = require("sequelize");
module.exports=function(sequelize, DataTypes){ 
    return Category = sequelize.define("category", {
    id: {
        type: DataTypes.INTEGER,    
        autoIncrement: !0,       
        primaryKey: !0
    },
    name: {               
        type: DataTypes.STRING
    },
    description: {                
        type: DataTypes.STRING
    },
    created_at:{
        type: Sequelize.DATE
    },
    updated_at:{
        type: Sequelize.DATE
    },
    is_active: {
        type: Sequelize.TINYINT(1),
        defaultValue:1
    },
    }, {
      freezeTableName: true, // Model tableName will be the same as the model name
      classMethods:{},
      underscored: true
    });
  };