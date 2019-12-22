import React, { Component } from 'react';
import MenuItem from "../Menu/Menu-item";

class Menu extends Component {

  constructor() {
    super();
      this.state = {
        categories: [{
          title: 'Clothes',
          imageUrl:'https://airy-dreams-image.s3.amazonaws.com/dress-airy.jpg',
          id:1,
        },
        {
          title: 'Pants',
          imageUrl:'https://airy-dreams-image.s3.amazonaws.com/me-airy-2.jpg',
          id:2,
        },
        {
          title: 'Skirts',
          imageUrl:'https://airy-dreams-image.s3.amazonaws.com/dress-airy.jpg',
          id:3,
        },
        {
          title: 'Shoes',
          imageUrl:'https://airy-dreams-image.s3.amazonaws.com/me-airy-2.jpg',
          id:4,
        },
        {
          title: 'Jewelries',
          imageUrl:'https://airy-dreams-image.s3.amazonaws.com/dress-airy.jpg',
          id:5,
        }
      ]
      }
  }

  render() {
    return(
      <div>
        {this.state.categories.map(({ title, imageUrl, id }) => {
          return (
            <MenuItem key={id} title={title} img={imageUrl} />
          )
        })
      }

      </div>
    );
  }
}

export default Menu;