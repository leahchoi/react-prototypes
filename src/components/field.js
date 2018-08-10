import React from 'react';

// export default (props) => {
//     return (
//         <div className = "form-group">
//             <label>{props.name}</label>
//             <input className = 'form-control'/>
//         </div>
//     )
// }

const Field = (props) =>{
    return (
        <div className="form-group">
            <label>{props.name}</label>
            <input className='form-control' />
        </div>
    )
}

export default Field;