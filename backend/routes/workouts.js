const express = require('express')
const {
    createWorkout, 
    getWorkouts,
    getWorkout
} = require('../controllers/workoutController')

const router = express.Router()

//get all workouts
router.get('/', getWorkouts)


//GET a single workout
router.get('/:id', getWorkout)


//POST a new workout
router.post('/', createWorkout)
    /*const{title, load, reps} =  req.body

    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
   // res.json({msg:'POST a new workout'})*/


//DEL a workout
router.delete('/:id',(req, res)=>{
    res.json({msg:'DELETE a workout'})
})

//UPDATE a workout
router.patch('/:id',(req, res)=>{
    res.json({msg:'UPDATE a workout'})
})
module.exports = router