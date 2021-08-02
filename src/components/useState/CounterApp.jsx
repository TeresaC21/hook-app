import React, { useState } from 'react';
import './counter.css';

const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
    });

    const {counter1, counter2} = counter;

    const handleChange = () => {
        setCounter({
            ...counter,
            counter1: counter1 + 1
        })
    }

    return (
        <>
            <h2>Counter {counter1}</h2>
            <h2>Counter {counter2}</h2>
            <hr/>

            <button className="btn btn-primary" onClick={handleChange}>Agregar</button>
        </>
    )
}

export default CounterApp
