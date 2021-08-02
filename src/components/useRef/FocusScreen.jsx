import React, { useRef } from "react";

import "../useEffect/effects.css";

const FocusScreen = () => {

const inputRef = useRef();

const handleClick = () => {
    inputRef.current.select();
}

  return (
    <div>
      <h2>Focus Screen</h2>
      <hr />

      <input 
        className="form-control" 
        placeholder="Su nombre" 
        ref={inputRef}
      />

      <button
       onClick={handleClick}
       className="btn btn-outline-warning mt-5">
          Focus
      </button>
    </div>
  );
};

export default FocusScreen;
