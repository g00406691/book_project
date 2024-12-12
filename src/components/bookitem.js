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
        <div>
            <Card>
                <Card.Header>{props.myBook.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img 
                            src={props.myBook.coverImage} 
                            alt={props.myBook.title} 
                            style={{ maxWidth: '200px', height: 'auto' }}
                        />
                        <footer>
                            <strong>Author:</strong> {props.myBook.author}<br/>
                            <strong>Genre:</strong> {props.myBook.genre}
                        </footer>
                    </blockquote>
                </Card.Body>
                <Link className="btn btn-primary" to={"/edit/" + props.myBook._id}>Edit</Link>
                <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </Card>
        </div>
    );
}

export default BookItem;
