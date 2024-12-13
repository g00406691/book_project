import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Ensure our global styles are included

const Edit = () => {
    const { id } = useParams(); // Get the book ID from the URL, passed as a parameter
    const [title, setTitle] = useState(''); // State to store book title, author, genre, and cover image
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const navigate = useNavigate(); 

    useEffect(() => {
        axios.get('http://localhost:4000/api/book/' + id)
            .then((res) => {
                console.log("Success: " + res.data);
                setTitle(res.data.title);
                setAuthor(res.data.author);
                setGenre(res.data.genre);
                setCoverImage(res.data.coverImage);
            })
            .catch((err) => { console.log(err) });
    }, [id]); // Fetch book data when the component loads

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedBook = { title, author, genre, coverImage };
        console.log(updatedBook); // Log the updated book data

        axios.put('http://localhost:4000/api/book/' + id, updatedBook)
            .then((res) => {
                console.log("Edited: " + res.data);
                navigate('/read');
            })
            .catch((err) => {
                console.log(err);
            }); // Send a PUT request to update the book data
    }

    return (
        <div className="edit-page d-flex justify-content-center align-items-center"> {/* ClassNames for styling for the edit form */}
            <div className="card edit-card shadow-sm">
                <div className="card-body">
                    <h3 className="card-title text-center mb-4 edit-title">Edit Book Details</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label className="mb-1">Edit Book Title:</label>
                            <input type="text"
                                className="form-control"
                                value={title}
                                onChange={(e) => { setTitle(e.target.value) }} // Update title state
                                placeholder="e.g. The Great Gatsby"
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label className="mb-1">Edit Author:</label>
                            <input type="text"
                                className="form-control"
                                value={author}
                                onChange={(e) => { setAuthor(e.target.value) }} // Update author state
                                placeholder="e.g. F. Scott Fitzgerald"
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label className="mb-1">Edit Genre:</label>
                            <input type="text"
                                className="form-control"
                                value={genre}
                                onChange={(e) => { setGenre(e.target.value) }} // Update genre state
                                placeholder="e.g. Classic Literature"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="mb-1">Edit Cover Image URL:</label>
                            <input type="text"
                                className="form-control"
                                value={coverImage}
                                onChange={(e) => { setCoverImage(e.target.value) }} // Update cover image state
                                placeholder="e.g. https://example.com/cover.jpg"
                            />
                        </div>
                        <div className="text-center">
                            <input type="submit" value="Save Changes" className="btn btn-primary btn-lg" /> {/* Submit button to save changes */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Edit;
