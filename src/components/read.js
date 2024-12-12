import axios from "axios";
import { useState, useEffect } from "react";
import Movies from "./movies";

function Read() {
  // State to hold the movie data
  const [data, setData] = useState([]);

  // Function to reload movie data from the server
  const Reload = () => {
    console.log("Reloading movie data...");
    axios.get('http://localhost:4000/api/movies')
      .then((response) => {
        // Extract the movies array from the response and update state
        setData(response.data.movies);
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
      <h2>Movie List</h2>
      {/* Render the Movies component with the fetched data and reload function */}
      <Movies myMovies={data} ReloadData={Reload} />
    </div>
  );
}

export default Read;