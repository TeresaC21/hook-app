import React, { useMemo, useState } from 'react';
import { heavyProcess } from '../../helpers/heavyProcess';

import useCounter from '../../hooks/useCounter';

import '../useEffect/effects.css'

const MemoHook = () => {

    const { counter, increment } = useCounter(10);
    const [ show, setShow ] = useState(true);

    const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter])

    return (
        <div>
            <h2>MemoHook</h2>
            <h4>Counter: <small>{counter}</small> </h4>
            <hr />

            <p>{memoHeavyProcess}</p>

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

export default MemoHook
