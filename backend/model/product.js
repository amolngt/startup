
var Sequelize = require("sequelize");
module.exports=function(sequelize, DataTypes){ 
    let products = sequelize.define("products", {
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
    image:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.DECIMAL,
        allowNull: true,
        defaultValue: '0.000'
    },
    category_id:{
        type:DataTypes.INTEGER
    },
    subcategory_id:{
        type:DataTypes.INTEGER
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
   products.deactivate=(id)=>{
        return new Promise((resolve, reject)=>{
            var sql = 'update products set is_active=0 and updatedAt=now() where id=:id';
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
    products.get_allproducts=()=>{
        return new Promise((resolve, reject)=>{
            var sql = 'select c.name as cat_name,sc.name as subcat_name,p.id,p.name,p.description,p.image,p.price from products p join category c on p.category_id=c.id join subcategory sc on sc.id=p.subcategory_id where sc.is_active=1 and c.is_active=1 and p.is_active=1 order by sc.id desc';
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
     return products;
  };