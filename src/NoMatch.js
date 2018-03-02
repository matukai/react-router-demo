import React from'react';

const NoMatch = props => {
  const {location: { pathname}} = props;
  return (
    <div className="no-match">
      <h2>No match found for requested path: {pathname}</h2>
    </div>
  )
}

export default NoMatch;