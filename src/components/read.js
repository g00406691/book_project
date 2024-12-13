import axios from "axios";
import { useState, useEffect } from "react";
import Books from "./books";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Read() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const Reload = () => {
    console.log("Reloading book data...");
    axios.get('http://localhost:4000/api/books')
      .then((response) => {
        setData(response.data.books);
      })
      .catch((error) => {
        console.error("Error reloading data:", error);
      });
  };

  useEffect(() => {
    Reload();
  }, []);

  const filteredBooks = data.filter(book => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(lowerSearch) ||
      book.genre.toLowerCase().includes(lowerSearch)
    );
  });

  return (
    <div className="read-page d-flex flex-column align-items-center">
      <h2 className="read-title mt-4 mb-4">Browse Your Book Collection</h2>
      
      {/* Search Bar */}
      <div className="search-bar-container mb-4">
        <div className="search-bar-wrapper">
          <span className="search-icon">&#x1F50D;</span>
          <input
            type="text"
            placeholder="Search by title or genre..."
            className="form-control search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="books-container">
        <Books myBooks={filteredBooks} ReloadData={Reload} />
      </div>
    </div>
  );
}

export default Read;
