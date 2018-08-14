import React from 'react';

export default (props) => {
    const { info } = props;
    return (
        console.log('props.info: ', props.info),
        
        <div>
            <img src={info["im:image"][2].label}/>
            <h3>{info['im:name'].label}</h3>
            <p>{info.summary.label}</p>
        </div>
    )
}

