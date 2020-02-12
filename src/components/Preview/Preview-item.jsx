import React from 'react';
import './Preview.scss';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../Custom-button/Custom-button';

const PreviewItem = ({ item, addItem }) => {

  const { name, price, imageUrl } = item;

  return (
    <div className="item">

      <div className="inner-wrapper item-container">
        <div
          className="image-item"
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        >
          <div className="preview-content">
            <p>{name}</p>
            <p>{price}</p>
          </div>
          <CustomButton onClick={()=> addItem(item)} inverted>Add to Cart</CustomButton>
        </div>
      </div>

    </div> // end of item
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(PreviewItem);