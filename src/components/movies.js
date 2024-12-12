import MovieItem from "./movieitem";

// Define the Movies functional component
function Movies(props) {
    const movies = Array.isArray(props.myMovies) ? props.myMovies : [];

    return (
        <>
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <MovieItem
                        myMovie={movie}
                        key={movie._id}
                        Reload={props.ReloadData}
                    />
                ))
            ) : (
                <p>No movies available</p>
            )}
        </>
    );
}

Movies.defaultProps = {
    myMovies: [],
};

export default Movies;
