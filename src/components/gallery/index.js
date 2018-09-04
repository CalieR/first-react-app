import React from 'react';
import PropTypes from 'prop-types';

export const Gallery = ({title, images}) => (
    <div>
        <h2>{title}</h2>
        { ImageList({images}) }
    </div>
);

export const ImageList = ({images}) => (
    <div>
        <h3>The images</h3>
        <ul>
            {images.map((item, key) => (
                <li key={key}>
                    {item.original} - {item.thumbnail}
                </li>
            ))}
        </ul>
    </div>
);


Gallery.propTypes = {
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
        original: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired
    })).isRequired
}

ImageList.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        original: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired
    })).isRequired
}