import React from 'react'

const ShowIncrement = React.memo(({increment}) => {

    console.log('get back! :v');
    return (
        <button
            className="btn btn-warning"
            onClick={() => {
                increment(5);
            }}
        >
            Incrementar
        </button>
    )
})

export default ShowIncrement
