import React, { Component } from 'react';
import MenuItem from "../Menu/Menu-item";

class Menu extends Component {

  constructor() {
    super();
      this.state = {
        categories: [{
          title: 'Clothes',
          imageUrl:'/dress-airy.jpg',
          id:1,
          size: 'lg'
        },
        {
          title: 'Pants',
          imageUrl:'/me-airy-2.jpg',
          id:2,
        },
        {
          title: 'Skirts',
          imageUrl:'/dress-airy.jpg',
          id:3,
          size: 'md'
        },
        {
          title: 'Shoes',
          imageUrl:'/me-airy-2.jpg',
          id:4,
          size: 'md'
        }
      ]
      }
  }

  render() {
    return(
      <div className="menu-container">
        {this.state.categories.map(({ title, imageUrl, id, size }) => {
          return (
            <MenuItem key={id} title={title} img={imageUrl} size={size} />
          )
        })
      }

      </div>
    );
  }
}

export default Menu;