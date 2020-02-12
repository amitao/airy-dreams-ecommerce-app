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
            .map((item) => {
              return (
                <PreviewItem key={item.id} item={item} />
              )
            })}
        </div>
    </div>
  )
}


export default Preview;