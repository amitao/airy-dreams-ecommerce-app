import React from 'react';
import './Preview.scss';
import PreviewItem from '../Preview/Preview-item';

const Preview = ({ title, items }) => {
  return (
    <div className="preview-container">
        <h3>{title}</h3>

        <div className="item-preview">
        {/* this is a comment */}
          {items
            .filter((item, idx) => idx < 4)
            .map(({ id, ...otherItemProps }) => {
              return (
                <PreviewItem key={id} {...otherItemProps} />
              )
            })}
        </div>
    </div>
  )
}


export default Preview;