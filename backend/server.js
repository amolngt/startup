const express= require('express')
const cors= require('cors')
const mongoose= require('mongoose');
require('dotenv').config();

const app= express();
const port= process.env.port || 5000;

app.use(cors());
app.use(express.json());

const uri=process.env.MONGO_ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true });
const connection= mongoose.connection;
connection.once('open',()=> console.log(`mongo started`))

const exercise_router= require('./routes/exercise')
const user_router= require('./routes/user')

app.use('/exercise',exercise_router)
app.use('/user',user_router)
app.listen(port,()=> console.log(`app listenig at port ${port}`))

