const router = require('express').Router();
let User= require('../model/users');

router.route('/').get((req, res)=>{
    User.find()
    .then(users=> res.json(users))
    .catch(err=> res.status(400).json('Error'+ err));
})

router.route('/add').post((req, res)=>{
    const username= req.body.username;
    const new_user= new User({username});
    new_user.save()
    .then(()=> res.json('user added'))
    .catch(err=> res.status(400).json('Error'+ err));
})

module.exports = router;