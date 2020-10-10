
var Sequelize = require("sequelize");
module.exports=function(sequelize, DataTypes){ 
    let category = sequelize.define("category", {
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
    is_active: {
        type: Sequelize.TINYINT(1),
        defaultValue:1
    },
    }, {
      freezeTableName: true,
      classMethods:{
        // associate: function (models) {
        // },
      },
    //   underscored: true
    });
    category.deactivate=(id)=>{
        return new Promise((resolve, reject)=>{
            var sql = 'update category set is_active=0,updatedAt=now() where id=:id';
            sequelize.query(sql, {
              replacements: {id:id},
              raw: true
            }).then((data)=>{
                resolve(data);
            }).catch((err)=>{
                reject(err);
            });
        })
    };
    category.get_all_counts=()=>{
        return new Promise((resolve, reject)=>{
            var sql = 'select count(*) as category from category c where is_active=1 '+
            'UNION ALL '+
            'select count(*) as subcategory from subcategory  where is_active=1 '+
            'UNION ALL '+
            'select count(*) as product from products where is_active=1';
            sequelize.query(sql, {
              replacements: {},
              raw: true,
              type: sequelize.QueryTypes.SELECT
            }).then((data)=>{
                resolve(data);
            }).catch((err)=>{
                reject(err);
            });
        })

    }
    return category
  };