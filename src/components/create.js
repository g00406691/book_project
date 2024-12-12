import axios from "axios";
import { useState } from "react";

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
        <div>
            <h3>Add a New Book</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Genre: </label>
                    <input type="text"
                        className="form-control"
                        value={genre}
                        onChange={(e) => { setGenre(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Cover Image URL: </label>
                    <input type="text"
                        className="form-control"
                        value={coverImage}
                        onChange={(e) => { setCoverImage(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Book" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}

export default Create;
