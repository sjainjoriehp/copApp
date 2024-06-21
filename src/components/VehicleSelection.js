import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

function VehicleSelection() {
  const { city } = useParams();
  const [vehicles, setVehicles] = useState([]);
  const history = useHistory();
  let url=process.env.REACT_APP_BACKEND_URL

  useEffect(() => {
    axios.get(`${url}/api/vehicles/${city}`)
      .then(response => setVehicles(response.data))
      .catch(error => console.error('Error fetching vehicles:', error));
  }, [city]);

  const handleVehicleSelection = (vehicle) => {
    // Simulate capture logic here (could be extended with backend)

    // For demo purpose, assuming capture success and redirecting to result
    history.push('/result', { captureStatus: true, capturingCop: 'Cop A' });
  };

  return (
    <div>
      <h2>Select Vehicle</h2>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.kind}>
            <button onClick={() => handleVehicleSelection(vehicle)}>
              {vehicle.kind} - Range: {vehicle.range} KM
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VehicleSelection;
