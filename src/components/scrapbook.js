import React from 'react';
import './scrapbook.css';
import imageData from './image_data';
import ScrapbookImage from './scrapbook_images'; 

const Scrapbook = () => {
    console.log('imageData:', imageData)
    const images = imageData.map((img, index)=>{
        return (
            <ScrapbookImage key= {index} about = {img}/>
        )
    });
    return (
        <div className= 'scrapbook-container'>
            {images}
        </div>
    )
}

export default Scrapbook;
