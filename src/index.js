import React from 'react';
import ReactDOM from 'react-dom';

function luckyNumber(){
    var random = Math.floor(Math.random() * 1000) + 1;
    return random;
}
const userObj = {
    name: "Soora",
    luckyNumber: luckyNumber(),
}
function greeting(userObj){
    return <div className= "container">
        <h1>{userObj.name}</h1>
        <h2 className= "text-muted">Your lucky number is: {userObj.luckyNumber}</h2>
    </div>
}

ReactDOM.render(
    greeting(userObj),
    document.getElementById('root')
);

import App from './components/app'