import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CitySelection() {
  const [cities, setCities] = useState([]);
  let url=process.env.REACT_APP_BACKEND_URL

  useEffect(() => {
    axios.get('${url}/api/cities')
      .then(response => setCities(response.data))
      .catch(error => console.error('Error fetching cities:', error));
  }, []);

  return (
    <div>
      <h2>Select City</h2>
      <ul>
        {cities.map(city => (
          <li key={city.name}>
            <Link to={`/vehicle-selection/${city.name}`}>
              {city.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CitySelection;
