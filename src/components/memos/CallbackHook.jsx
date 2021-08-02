import React, { useCallback, useState } from "react";
import ShowIncrement from "./ShowIncrement";

import "../useEffect/effects.css";

const CallbackHook = () => {

    const [counter, setCounter] = useState(1);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback( (num) => {
        setCounter(c => c + num)
    }, [setCounter] )

  return (
    <div>
      <h2>Callback Hook {counter} </h2>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallbackHook;
