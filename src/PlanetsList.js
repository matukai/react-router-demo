import React from 'react';
import { Link } from 'react-router-dom';

const PlanetsList = props => {
  return(
  <div className="planets-list">
    {
      props.planets.map(planet => {
        const planetId = planet.url.split('/').slice(-2, -1).pop();
        return(
          <div key={planetId} className="planet-link">
            <Link to={`/planets/${planetId}`}>{planet.name}</Link>
          </div>
        );
      })
    }
  </div>
)};

export default PlanetsList

