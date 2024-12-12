import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
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
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedBook = { title, author, genre, coverImage };
        console.log(updatedBook);

        axios.put('http://localhost:4000/api/book/' + id, updatedBook)
            .then((res) => {
                console.log("Edited: " + res.data);
                navigate('/read');
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <h3>Edit Book Details</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Genre: </label>
                    <input type="text"
                        className="form-control"
                        value={genre}
                        onChange={(e) => { setGenre(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Cover Image URL: </label>
                    <input type="text"
                        className="form-control"
                        value={coverImage}
                        onChange={(e) => { setCoverImage(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Edit Book" className="btn btn-primary"></input>
                </div>
            </form>
        </div>
    );
}
export default Edit;
