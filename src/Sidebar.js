import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = props => {
  return(
    <section className="page-sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/planets">Planets</Link></li>
      </ul>
    </section>
  );
}

export default Sidebar