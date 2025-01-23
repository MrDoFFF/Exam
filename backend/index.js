const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const cors = require('cors')

app.use(express.json())
app.use(cors())


mongoose.connect('mongodb+srv://muradovvmurad2706:muradovvmurad2706@clusterm.61pv5.mongodb.net/')

const UserSchema = new mongoose.Schema({
    image: String,
    description: String,
    name: String,
    price:Number
});
const Aroma = mongoose.model('Aroma', UserSchema);



app.get('/aromas', async (req, res) => {
    const getData = await Aroma.find()
    res.send(getData)
})
app.get('/aromas/:id', async (req, res) => {
    const {id} = req.params
    const getData = await Aroma.findById(id)
    res.send(getData)
})

app.delete('/aromas/:id', async (req,res) =>{
    const {id} = req.params

})

app.post('aromas', async (req,res)=> {

})

app.listen(port, () => {
    console.log(`Dinlenilirrr... ${port}`)
})