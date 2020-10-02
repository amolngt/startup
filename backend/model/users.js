var Sequelize = require("sequelize");
module.exports=function(sequelize, DataTypes){ 
    return Users = sequelize.define("users", {
      id: {
        type: DataTypes.INTEGER,    
        autoIncrement: !0,       
        primaryKey: !0
      },
      name: {
        type: Sequelize.STRING
      },
      email_id: {
        type: Sequelize.STRING
      },
      phone_number:{
        type: Sequelize.STRING,
      },
      password:{
        type: Sequelize.STRING
      },
      created_at:{
        type: Sequelize.DATE
      },
      updated_at:{
        type: Sequelize.DATE
      },
      is_admin:{
        type: Sequelize.TINYINT(1),
        defaultValue:0
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
