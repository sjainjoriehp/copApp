import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CitySelection from './components/CitySelection';
import VehicleSelection from './components/VehicleSelection';
import Result from './components/Result';

function App() {
 
   console.log("APP URL",process.env.REACT_APP_BACKEND_URL)

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/city-selection" component={CitySelection} />
          <Route path="/vehicle-selection" component={VehicleSelection} />
          <Route path="/result" component={Result} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
