import React from 'react';
import {Gallery, ImageList} from '../components/gallery';
import PhotoGallery from '../components/photo-gallery'
// import Message from './message';

// import { 
//     Link,
//     Route,
//     Switch 
// } from 'react-router-dom';


const florida = [
    {
        original: 'dolphins.jpg',
        thumbnail: 'dolphins-small.jpg'
    },{
        original: 'whale.jpg',
        thumbnail: 'whale-small.jpg'
    }
];


const Galleries = () => (
    <div>
        <h3>An example using the Gallery</h3>
        <Gallery title="Berlin 2016!" images={[
                {
                    original: 'puppy.jpg',
                    thumbnail: 'puppy-small.jpg'
                },{
                    original: 'kittens.jpg',
                    thumbnail: 'kitten-small.jpg'
                }
            ]} />

        <h3>An example using just the ImageList</h3>
        <ImageList images={florida} />

        
        <h3>An example using the PhotoGallery with properties</h3>
        <PhotoGallery title="Florida 2009" images={florida} />

        <h3>An example using the PhotoGallery no properties, but uses the defaults</h3>
        <PhotoGallery />        
        
    </div>
);


// const Galleries = ({ match }) => (
//     <div>
//         <ul>
//         {
//             [...Array(5).keys()].map(n => {
//                 return <li key={n}>
//                         <Link to={`${match.url}/${n+1}`}>
//                             Message {n+1}
//                         </Link>
//                         </li>;
//             })
//         }    
//         </ul> 
//         <Switch>
//             <Route path={`${match.url}/:id(\\d+)`} component={Message} /> 
//             <Route
//                 path={match.url}
//                 render={() => <h3>Please select a gallery to view the pics</h3>} 
//             />
//         </Switch> 
//     </div>
// );

export default Galleries;
