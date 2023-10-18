import React from 'react';
import Image from './Image.jsx';

const Card = ({ imgSrc, heading, description, width = '300px', height = 'auto' }) => {
    const cardStyle = {
        width: width,
        height: height,
    };

    return (
        <div className="card" style={cardStyle}>
            <Image src={imgSrc}
                alt={heading}
                width={width}
                height={height}></Image>
                
            <div className="card-content">
                <h2>{heading}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Card;
