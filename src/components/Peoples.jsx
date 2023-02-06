import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Peoples() {
  const [peoples, setPeoples] = useState([]);
  const [nextUrl, setNextUrl] = useState(1);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axios.get(
          `https://swapi.dev/api/people/?page=${nextUrl}`
        );
        setPeoples(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPeople();
  }, [nextUrl]);

  const nextPage = () => {
    if (nextUrl >= 1 && nextUrl < 9) {
      setNextUrl(nextUrl + 1);
    } else nextUrl;
  };

  const previousPage = () => {
    setNextUrl(nextUrl - 1);
  };
  return (
    <div>
      <div>
        {peoples
          ? peoples.map((people, key) => {
              return (
                <div key={key}>
                  <h2>{people.name}</h2>
                </div>
              );
            })
          : 'Loading ...'}
      </div>
      <div>page : {nextUrl}/9</div>
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
