const express= require('express')
const cors= require('cors')
require('dotenv').config();

var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
process.env.ENVIORNMENT;

if (cluster.isMaster) {
    console.log("[ENV] " + process.env.ENVIORNMENT);
    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    Object.keys(cluster.workers).forEach(function (id) {
      console.log("I am running with ID : " + cluster.workers[id].process.pid);
    });

    cluster.on('exit', function (worker, code, signal) {
      console.log('worker ' + worker.process.pid + ' died');
    });

} else {
    const app= express();
    const port= process.env.port || 5000;

    app.use(cors());
    app.use(express.json());

    const db = require("./model");
    db.sequelize.sync();

    const category_router= require('./routes/category')
    const subcategory_router= require("./routes/subcategory")
    const product_router= require('./routes/product')
    const user_router= require('./routes/user')
    const home_router= require('./routes/home')
    const login_router= require('./routes/login')

    app.use('/category',category_router)
    app.use('/subcategory',subcategory_router)
    app.use('/product',product_router)
    app.use('/user',user_router)
    app.use('/home',home_router)
    app.use('/login',login_router)
    // app.use('/helper',helper_router)
    app.listen(port,()=> console.log(`app listenig at port ${port}`))

}

