import axios from "axios";
import { useState, useEffect } from "react";
import Books from "./books";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

// Read component
function Read() {
  const [data, setData] = useState([]); // State to store books data
  const [searchTerm, setSearchTerm] = useState(''); // State to store search term

  // Function to reload book data
  const Reload = () => {
    console.log("Reloading book data...");
    axios.get('http://localhost:4000/api/books')
      .then((response) => {
        setData(response.data.books); // Set data state with book data
      })
      .catch((error) => {
        console.error("Error reloading data:", error);
      });
  };

  // Load book data on component load
  useEffect(() => {
    Reload();
  }, []);

  // Filter books based on search term
  const filteredBooks = data.filter(book => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(lowerSearch) ||
      book.genre.toLowerCase().includes(lowerSearch)
    );
  });

  // Render Read component
  return (
    <div className="read-page d-flex flex-column align-items-center">
      <h2 className="read-title mt-4 mb-4">Browse Your Book Collection</h2>
      
      {/* Search Bar */}
      <div className="search-bar-container mb-4">
        <div className="search-bar-wrapper">
          <span className="search-icon">&#x1F50D;</span> {/* Magnifying glass icon */}
          <input
            type="text"
            placeholder="Search by title or genre..."
            className="form-control search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} //Update search term state
          />
        </div>
      </div>

      <div className="books-container"> 
        <Books myBooks={filteredBooks} ReloadData={Reload} /> {/* Pass filtered books data and Reload function to Books component */}
      </div>
    </div>
  );
}

export default Read;
