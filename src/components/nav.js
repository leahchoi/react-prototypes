import React from 'react';
import {Link} from 'react-router-dom';

export default ()=> {
    return (
        <ul className= 'nav nav-tabs mt-3'>
            <li className='nav-item'>
                <Link className='nav-link' to='/'>Welcome</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/our-macarons'>Our Macarons</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/gifts-parties'>Gifts & Parties</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/contact'>Contact</Link>
            </li>
        </ul>
    )
}