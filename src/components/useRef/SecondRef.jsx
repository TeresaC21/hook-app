
import React, { useState } from 'react';
import MultipleCustomHook from '../some/MultipleCustomHook';

import '../useEffect/effects.css';

const SecondRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h2>Second Ref</h2>
            <hr />

            { show && <MultipleCustomHook /> }

            <button
             className="btn btn-warning mt-5"
             onClick={ () => {
                 setShow(!show);
             }}
            >
                Mostrar/Ocultar
            </button>
        </div>
    )
}

export default SecondRef
