import React, { useState } from 'react';

import useCounter from '../../hooks/useCounter';
import Small from './Small';

import '../useEffect/effects.css'

const Memorize = () => {

    const { counter, increment } = useCounter(10);
    const [ show, setShow ] = useState(true);

    return (
        <div>
            <h2>Counter <Small value={counter} /> </h2>
            <hr />

            <button 
                onClick={increment}
                className="btn btn-warning"
            >
                +1
            </button>

            <button
                className="btn btn-outline-warning ml-3"
                onClick={ () => setShow(!show)}
            >
                Mostrar/Ocultar {JSON.stringify(show)}
            </button>
        </div>
    )
}

export default Memorize
