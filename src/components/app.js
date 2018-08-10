import React from 'react';
import ContactList from './contact_list';
import ContactForm from './contact_form';
import './app.css';
import Scrapbook from './scrapbook';

function App(){
    return (
    <div className = 'main-container'>
        <h1 className = 'main-title'>Scrapbook</h1>
        <Scrapbook/>
    </div>
    )
}

export default App;
