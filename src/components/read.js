import axios from "axios";
import { useState, useEffect } from "react";
import Books from "./books";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Ensure our global styles are included

function Read() {
  // State to hold the book data
  const [data, setData] = useState([]);

  // Function to reload book data from the server
  const Reload = () => {
    console.log("Reloading book data...");
    axios.get('http://localhost:4000/api/books')
      .then((response) => {
        // Extract the books array from the response and update state
        setData(response.data.books);
      })
      .catch((error) => {
        // Log any errors that occur during the fetch
        console.error("Error reloading data:", error);
      });
  };

  // useEffect hook to load data when the component mounts
  useEffect(() => {
    Reload();
  }, []);

  return (
    <div className="read-page d-flex flex-column align-items-center">
      <h2 className="read-title mt-4 mb-4">Browse Your Book Collection</h2>
      <div className="books-container">
        {/* Render the Books component with the fetched data and reload function */}
        <Books myBooks={data} ReloadData={Reload} />
      </div>
    </div>
  );
}

export default Read;
