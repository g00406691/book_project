import axios from "axios";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Ensure we import our main CSS file for custom styling

const Create = () => {
    // State variables for book details
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [coverImage, setCoverImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { title, author, genre, coverImage };
        console.log(book);

        // Send POST request to add a new book
        axios.post('http://localhost:4000/api/books', book)
            .then((res) => { console.log(res.data) })
            .catch((error) => { console.error("Error adding book:", error); });
    }

    return (
        <div className="create-page d-flex justify-content-center align-items-center">
            <div className="card create-card shadow-sm">
                <div className="card-body">
                    <h3 className="card-title text-center mb-4 create-title">Add a New Book</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label className="mb-1">Book Title:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={title}
                                onChange={(e) => { setTitle(e.target.value) }}
                                placeholder="e.g. The Great Gatsby"
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label className="mb-1">Author:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={author}
                                onChange={(e) => { setAuthor(e.target.value) }}
                                placeholder="e.g. F. Scott Fitzgerald"
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label className="mb-1">Genre:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={genre}
                                onChange={(e) => { setGenre(e.target.value) }}
                                placeholder="e.g. Classic Literature"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="mb-1">Cover Image URL:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={coverImage}
                                onChange={(e) => { setCoverImage(e.target.value) }}
                                placeholder="e.g. https://example.com/cover.jpg"
                            />
                        </div>
                        <div className="text-center">
                            <input type="submit" value="Add Book" className="btn btn-primary btn-lg" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Create;
