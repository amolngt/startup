const router = require('express').Router();
let Exercise= require('../model/exercise');

router.route('/').get((req, res)=>{
    Exercise.find()
    .then(exercises=> res.json(exercises))
    .catch(err=> res.status(400).json('Error'+ err));
})

router.route('/add').post((req, res)=>{
    const username= req.body.username;
    const description= req.body.description;
    const date= Date.parse(req.body.date);
    const duration= Number(req.body.duration);
    const new_exercise= new Exercise({username, description, date, duration});
    new_exercise.save()
    .then(()=> res.json('Exercise added'))
    .catch(err=> res.status(400).json('Error'+ err));
})

router.route('/:id').get((req, res)=>{
    const id= req.params.id;
    Exercise.findById(id)
    .then((exercise)=> res.json(exercise))
    .catch(err=> res.status(400).json('Error'+ err));
})

router.route('/:id').delete((req, res)=>{
    const id= req.params.id;
    Exercise.findByIdAndDelete(id)
    .then(()=> res.json('exercise delete'))
    .catch(err=> res.status(400).json('Error'+ err));
})

router.route('/update/:id').post((req, res)=>{
    const id= req.params.id;
    Exercise.findById(id)
    .then((exercise)=> {
        exercise.username= req.body.username;
        exercise.description= req.body.description;
        exercise.date= Date.parse(req.body.date);
        exercise.duration= Number(req.body.duration);
        
        exercise.save()
        .then(()=> res.json('Exercise updated'))
        .catch(err=> res.status(400).json('Error'+ err));
    })
    .catch(err=> res.status(400).json('Error'+ err));
})
module.exports = router;