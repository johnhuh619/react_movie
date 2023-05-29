import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>Detail</h1>
      {movie && (
        <>
          <div>
            <h2>{movie.title}</h2>
            <p>{movie.description_intro}</p>
          </div>
          <div>
            <h3>Rating : {movie.rating}</h3>
          </div>
        </>
      )}
    </div>
  );
}
export default Detail;
