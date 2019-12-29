import React, { Component } from 'react';
import SHOP_DATA from './Shop.data';
import CollectionPreview from '../../components/Preview/Preview';

class Shoppage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      collections:SHOP_DATA
    }
  }


  render() {

    const {collections} = this.state;

    return(
      <div className="shop-page inner-wrapper"> 
        {
          collections.map( ({id, ...otherCollectionProps}) => {
            return (
              <div>
                <CollectionPreview key={id} {...otherCollectionProps}/>
              </div>
            )
          })
        }
      </div>
    )
  }


}

export default Shoppage;