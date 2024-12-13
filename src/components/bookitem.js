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
        axios.delete('http://localhost:4000/api/book/' + props.myBook._id)
            .then(() => {
                props.Reload();
            })
            .catch(error => console.error("Error deleting book:", error));
    };

    return (
        <div className="book-card">
            <Card className="h-100">
                <Card.Header className="book-card-header">{props.myBook.title}</Card.Header>
                <Card.Body className="book-card-body">
                    <div className="book-image-container">
                        <img
                            className="book-cover-image"
                            src={props.myBook.coverImage}
                            alt={props.myBook.title}
                        />
                    </div>
                    <blockquote className="blockquote mb-0 mt-3">
                        <p><strong>Author:</strong> {props.myBook.author}</p>
                        <p><strong>Genre:</strong> {props.myBook.genre}</p>
                    </blockquote>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Link className="btn btn-primary me-2" to={"/edit/" + props.myBook._id}>Edit</Link>
                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default BookItem;
