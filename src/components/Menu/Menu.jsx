import React, { Component } from 'react';
import MenuItem from "../Menu/Menu-item";


class Menu extends Component {

  constructor() {
    super();
    this.state = {
      categories: [{
        title: 'Clothes',
        imageUrl: '/images/lg-thumbnail-01.png',
        id: 1,
        size: 'lg',
        linkUrl: ''
      },
      {
        title: 'Pants',
        imageUrl: '/images/sm-thumbnail_290x300.jpg',
        id: 2,
        linkUrl: ''
      },
      {
        title: 'Skirts',
        imageUrl: '/images/md-thumbnail_479x300.jpg',
        id: 3,
        size: 'md',
        linkUrl: ''
      },
      {
        title: 'Shoes',
        imageUrl: '/images/md-thumbnail_479x300.jpg',
        id: 4,
        size: 'md',
        linkUrl: ''
      }
      ]
    }
  }

  render() {
    return (
      <div className="inner-wrapper">
      <div className="menu-container">
          {this.state.categories.map(({ id, ...itemsProps }) => {
            return (
              // <MenuItem key={id} title={title} img={imageUrl} size={size} />
              // spread operator
              <MenuItem key={id} {...itemsProps} />
            )
          })
          }
      </div>
      </div>
    );
  }
}

export default Menu;