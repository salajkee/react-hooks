import { useState, useEffect } from 'react';
import spinner from '../spinner.svg';

function RandomUser() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=1')
      .then((response) => response.json())
      .then((json) => setUser(json.results[0]))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (error) {
    return console.error(error);
  } else {
    return (
      <div className="random-user">
        {isLoading ? (
          <img className="spinner" src={spinner} alt="loading" />
        ) : (
          <div className="card">
            <img src={user.picture.large} alt="img" />
            <p>Customer data</p>
            <p>Name: {user.name.first}</p>
          </div>
        )}
      </div>
    );
  }
}

export default RandomUser;
