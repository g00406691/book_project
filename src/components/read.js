import axios from "axios";
import { useState, useEffect } from "react";
import Books from "./books";

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
    <div>
      <h2>Book List</h2>
      {/* Render the Books component with the fetched data and reload function */}
      <Books myBooks={data} ReloadData={Reload} />
    </div>
  );
}

export default Read;
