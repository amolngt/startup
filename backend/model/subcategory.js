
var Sequelize = require("sequelize");
module.exports=function(sequelize, DataTypes){ 
    let subcategory = sequelize.define("subcategory", {
    id: {
        type: DataTypes.INTEGER,    
        autoIncrement: !0,       
        primaryKey: !0
    },
    category_id:{
        type:DataTypes.INTEGER
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
   subcategory.deactivate=(id)=>{
        return new Promise((resolve, reject)=>{
            var sql = 'update subcategory set is_active=0 and updatedAt=now() where id=:id';
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
   subcategory.get_all_subcategories=()=>{
        return new Promise((resolve, reject)=>{
            var sql = 'select c.name as cat_name,sc.id,sc.name as subcat_name,sc.description as subcat_description from subcategory sc join category c on sc.category_id=c.id where sc.is_active=1 and c.is_active=1 order by sc.id desc';
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
    };
    subcategory.get_by_category_id=(id)=>{
        return new Promise((resolve, reject)=>{
            var sql = 'select id,name from subcategory where category_id=:id and is_active=1 order by id desc';
            sequelize.query(sql, {
              replacements: {id:id},
              raw: true,
              type: sequelize.QueryTypes.SELECT
            }).then((data)=>{
                resolve(data);
            }).catch((err)=>{
                reject(err);
            });
        })
    }
    return subcategory;
  };