import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function BookItem(props) {
    if (!props.myBook) return null; // Ensure myBook exists

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/book/' + props.myBook._id) // Send DELETE request to delete book
            .then(() => {
                props.Reload();
            })
            .catch(error => console.error("Error deleting book:", error));
    };

    return (
        <div className="book-card">
            <Card className="h-100">
                <Card.Header className="book-card-header">{props.myBook.title}</Card.Header> {/* Display title from myBook */}
                <Card.Body className="book-card-body">
                    <div className="book-image-container">
                        <img
                            className="book-cover-image"
                            src={props.myBook.coverImage} // Use coverImage from myBook
                            alt={props.myBook.title} // Use title from myBook
                        />
                    </div>
                    <blockquote className="blockquote mb-0 mt-3">
                        <p><strong>Author:</strong> {props.myBook.author}</p> {/* Display author from myBook */}
                        <p><strong>Genre:</strong> {props.myBook.genre}</p> {/* Display genre from myBook */}
                    </blockquote>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Link className="btn btn-primary me-2" to={"/edit/" + props.myBook._id}>Edit</Link> {/* Link to edit page */}
                    <Button variant="danger" onClick={handleDelete}>Delete</Button> {/* Button to delete book */}
                </Card.Footer>
            </Card>
        </div>
    );
}

export default BookItem;
