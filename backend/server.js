require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//express app
const app = express()

//middleware

app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//route
/*
app.get('/', (reg, res)=> {
    res.json({msg:'welcome to the app'})
})
*/
app.use('/api/workouts', workoutRoutes)


//connect to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{})

//listen for requests
    app.listen(process.env.PORT, () => {
        console.log('listening on port', process.env.PORT)
    })
    
    .catch((error)=>{
        console.log(error)
    })



process.env
