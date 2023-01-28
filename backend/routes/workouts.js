const express = require('express')
const {
    createWorkout, 
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

//get all workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id', getWorkout)

//POST a new workout
router.post('/', createWorkout)


//DEL a workout
router.delete('/:id',deleteWorkout)

//UPDATE a workout
router.patch('/:id',updateWorkout)

module.exports = router