import { useState, useEffect } from 'react';
import MovieDisplay from './Components/MovieDisplay';
import Form from './Components/Form';


function App() {
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    const apiKey = "1410dd36"; // Use my API key
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`;
    const response = await fetch(url);
    const data = await response.json();
    setMovie(data);
  };

  //useEffect to fetch initial movie data when the component mounts
  useEffect(() => {
    getMovie("Clueless");
  }, []);


  return (
    <div className='App'>
      <Form movieSearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;