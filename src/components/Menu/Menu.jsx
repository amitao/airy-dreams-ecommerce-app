import React, { Component } from 'react';
import MenuItem from "../Menu/Menu-item";


class Menu extends Component {

  constructor() {
    super();
      this.state = {
        categories: [{
          title: 'Clothes',
          imageUrl:'../../../public/images/lg-thumbnail-01.png',
          id:1,
          size: 'lg',
          linkUrl: ''
        },
        {
          title: 'Pants',
          imageUrl:'/me-airy-2.jpg',
          id:2,
          linkUrl: ''
        },
        {
          title: 'Skirts',
          imageUrl:'/dress-airy.jpg',
          id:3,
          size: 'md',
          linkUrl: ''
        },
        {
          title: 'Shoes',
          imageUrl:'/me-airy-2.jpg',
          id:4,
          size: 'md',
          linkUrl: ''
        }
      ]
      }
  }

  render() {
    return(
      <div className="menu-container">

        {this.state.categories.map(( {id, ...itemsProps} ) => {
          return (
            // <MenuItem key={id} title={title} img={imageUrl} size={size} />
            // spread operator
            <MenuItem key={id} {...itemsProps} />
          )
        })
      }

      </div>
    );
  }
}

export default Menu;