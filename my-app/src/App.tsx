import React from 'react';
import './App.css';



function App() {
    return (
        <div>
            This is App Component
            <Rating/>
            <Accordion/>
        </div>

    )
}

function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Accordion() {
    return (
        <div>
            <h3>Меню</h3>
        </div>
    )
}

function Star (){
    return(
        <div>
            Star
        </div>
    )
}

export default App;
