const apiKey = '2f8f47e771e50c704742c4fe24a1becd';

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => displayMovies(data.results))
  .catch(error => console.log(error));

function displayMovies(movies) {
  const moviesContainer = document.getElementById('movies');

  movies.forEach(movie => {
    const movieElement = createMovieElement(movie);
    moviesContainer.appendChild(movieElement);
  });
}
function createMovieElement(movie) {
  const movieElement = document.createElement('div');
  movieElement.classList.add('movie');

  const posterElement = document.createElement('div');
  posterElement.classList.add('poster');
  
  const posterImage = document.createElement('img');
  posterImage.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  posterImage.alt = movie.title;
  posterElement.appendChild(posterImage);
  
  const detailsElement = document.createElement('div');
  detailsElement.classList.add('details');

  const titleElement = document.createElement('h2');
  titleElement.classList.add('title');
  titleElement.textContent = movie.title;
  detailsElement.appendChild(titleElement);

  const overviewElement = document.createElement('p');
  overviewElement.classList.add('overview');
  overviewElement.textContent = movie.overview;
  detailsElement.appendChild(overviewElement);

  const releaseDateElement = document.createElement('p');
  releaseDateElement.classList.add('release-date');
  releaseDateElement.textContent = `Release Date: ${movie.release_date}`;
  detailsElement.appendChild(releaseDateElement);

  movieElement.appendChild(posterElement);
  movieElement.appendChild(detailsElement);

  return movieElement;
}
