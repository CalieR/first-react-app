import React from 'react';
import PropTypes from 'prop-types';

export default class PhotoGallery extends React.Component{
    static propTypes = {
        title: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.shape({
            original: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired
        })).isRequired
    }

    static defaultProps = {
        title: "Photo Gallery Title Not Set",
        images: []
    }

    constructor(props) {
        super(props)
        // You could set some internal properties for things to handle the state of the PhotoGallery
        this.showImages=true;
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                { this.renderImageList(this.props.images) }
                Click on a thumbnail to view image... 
            </div>)
    }

    renderImageList(images) {
        if (!this.showImages) {
            return;
        }

        return (            
            <ul>            
            {images.map((item, key) => (
                <li key={key} >
                    {item.original} - {item.thumbnail}
                    <img src={item.original} alt="What a lovely day" img-redundant-alt="true" />
                </li>
            ))}
        </ul>
        )
    }
}