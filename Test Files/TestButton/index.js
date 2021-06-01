import React, { useState } from 'react'

const TestButton = () => {
    const [state, setState] = useState();

    const setBoolean = () => {
        setState(!state);
    }

    return (
        <div>
            {state ? <p>State is True!</p> : <p>State is False!</p>}
            <button onClick={ () => setBoolean()}>Click Here!</button>
        </div>
    )
}

export default TestButton;