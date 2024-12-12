const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.dpriq.mongodb.net/');

const movieSchema = new mongoose.Schema({
  title:String,
  year:String,
  poster:String
});

const movieModel = new mongoose.model('myBooks',movieSchema);

app.get('/api/movies', async (req, res) => {
    const movies = await movieModel.find({});
    res.status(200).json({movies})
});

app.get('/api/movie/:id', async (req ,res)=>{
  const movie = await movieModel.findById(req.params.id);
  res.json(movie);
}) //get movie by id

app.put('/api/movie/:id', async (req, res)=>{
  const movie = await movieModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.send(movie);
}) //update movie

app.delete('/api/movie/:id', async (req, res) => {
  
  // Log the ID of the movie to be deleted
  console.log('Deleting movie with ID:', req.params.id);
  
  // Find the movie by ID and delete it from the database
  const movie = await movieModel.findByIdAndDelete(req.params.id);
  
  // Send a response indicating the movie was deleted successfully
  res.status(200).send({ message: "Movie deleted successfully", movie });
  
}); //delete movie

app.post('/api/movies',async (req, res)=>{
    console.log(req.body.title);
    const {title, year, poster} = req.body;

    const newMovie = new movieModel({title, year, poster});
    await newMovie.save();

    res.status(201).json({"message":"Movie Added!",Movie:newMovie});
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});