const express = require('express');
const app = express();
require('dotenv').config()

const PORT = process.env.PORT || 5000 ;

// Dummy data (replace with actual data handling)
const cities = [
  { name: 'Yapkashnagar', distance: 60 },
  { name: 'Lihaspur', distance: 50 },
  { name: 'Narmis City', distance: 40 },
  { name: 'Shekharvati', distance: 30 },
  { name: 'Nuravgram', distance: 20 }
];

const vehicles = {
  Yapkashnagar: [
    { kind: 'EV Bike', range: 60 },
    { kind: 'EV Car', range: 100 },
    { kind: 'EV SUV', range: 120 }
  ],
  Lihaspur: [
    { kind: 'EV Bike', range: 60 },
    { kind: 'EV Car', range: 100 },
    { kind: 'EV SUV', range: 120 }
  ],
  // Define vehicles for other cities as needed
};

app.use(express.json());

// API endpoints
app.get('/api/cities', (req, res) => {
  res.json(cities);
});

app.get('/api/vehicles/:city', (req, res) => {
  const { city } = req.params;
  if (vehicles[city]) {
    res.json(vehicles[city]);
  } else {
    res.status(404).send('City not found');
  }
});

app.post('/api/capture', (req, res) => {
  // Simulate capture logic here based on cop choices
  // For simplicity, assume random capture or matching with fugitive location
  const captureStatus = Math.random() < 0.5; // 50% chance of capture success
  if (captureStatus) {
    const capturingCop = 'Cop A'; // Replace with actual cop's name or identifier
    res.json({ captureStatus, capturingCop });
  } else {
    res.json({ captureStatus });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
