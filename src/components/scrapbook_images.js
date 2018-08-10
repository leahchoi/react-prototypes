import React from 'react';

const ScrapbookImg = (props) => {
    console.log(props.about)
    const {src, style} = props.about;
    return(
        <img className='scrapbook-image' style={style} src= {src}/>
)
}

export default ScrapbookImg;
