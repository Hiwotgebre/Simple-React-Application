function MovieDisplay({ movie }) {
    if (!movie) return <h1>No Movie to Display</h1>;

    return (
        <>
            <h1>{movie.Title}</h1>
            <h2>{movie.Genre}</h2>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.year}</h2>
        </>
    );
};

export default MovieDisplay;