import React from 'react';
import './Menu.scss';

import { withRouter } from 'react-router-dom';

// items to shop

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (

    <div 
    // match and append url to history
      onClick={ () => history.push(`${match.url}${linkUrl}`)}
      style={{
        backgroundImage:`url(${imageUrl})`
      }} 
      className={`menu-item ${size}`} 
      >
      <div className="content">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>

    </div>
  );
}

export default withRouter(MenuItem);