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

// Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.dpriq.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define a book schema instead
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  coverImage: String
});

// Naming the collection of books
const bookModel = mongoose.model('myBooks', bookSchema);

// GET all books
app.get('/api/books', async (req, res) => {
  const books = await bookModel.find({});
  res.status(200).json({ books });
});

// GET a book by ID
app.get('/api/book/:id', async (req, res) => {
  const book = await bookModel.findById(req.params.id);
  res.json(book);
});

// UPDATE a book by ID
app.put('/api/book/:id', async (req, res) => {
  const book = await bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(book);
});

// DELETE a book by ID
app.delete('/api/book/:id', async (req, res) => {
  console.log('Deleting book with ID:', req.params.id);
  
  const book = await bookModel.findByIdAndDelete(req.params.id);
  
  res.status(200).send({ message: "Book deleted successfully", book });
});

// ADD a new book
app.post('/api/books', async (req, res) => {
  console.log(req.body.title);
  const { title, author, genre, coverImage } = req.body;

  const newBook = new bookModel({ title, author, genre, coverImage });
  await newBook.save();

  res.status(201).json({ message: "Book Added!", Book: newBook });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
