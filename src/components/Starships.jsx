import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Starships() {
  const [starships, setStarships] = useState([]);
  const [nextUrl, setNextUrl] = useState(1);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await axios.get(
          `https://swapi.dev/api/starships/?page=${nextUrl}`
        );
        setStarships(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStarships();
  }, [nextUrl]);

  const nextPage = () => {
    if (nextUrl >= 1 && nextUrl < 4) {
      setNextUrl(nextUrl + 1);
    } else nextUrl;
  };

  const previousPage = () => {
    setNextUrl(nextUrl - 1);
  };
  return (
    <div>
      <div>
        {starships
          ? starships.map((starship, key) => {
              return (
                <div key={key}>
                  <h2>{starship.name}</h2>
                </div>
              );
            })
          : 'loading'}
      </div>
      <div>page : {nextUrl}/4</div>
      <div>
        {nextUrl > 1 ? (
          <button type='button' onClick={previousPage}>
            Previous Page
          </button>
        ) : null}
      </div>
      <div>
        {nextUrl >= 1 ? (
          <button type='button' onClick={nextPage}>
            Next Page
          </button>
        ) : null}
      </div>
    </div>
  );
}
