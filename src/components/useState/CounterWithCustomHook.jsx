import React from 'react';
import useCounter from '../../hooks/useCounter';

import './counter.css';

const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter(20);

    return (
        <>
            <h2>Counter with hook {state} </h2>
            <hr/>

            <button onClick={() => increment()} className="btn btn-primary">+1</button>
            <button onClick={reset} className="btn btn-secondary">Reset</button>
            <button onClick={() => decrement()} className="btn btn-secondary">-1</button>
        </>
    )
}

export default CounterWithCustomHook
