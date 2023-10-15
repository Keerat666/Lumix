import React from 'react';

const Image = ({ alt='Image', src, width, height, onClick=null, className='' }) => {
  return (
    <img src={ src }
    alt={ alt } 
    style={ { width, height } }
    onClick={ onClick }
    className={className} />
  );
};

export default Image;
