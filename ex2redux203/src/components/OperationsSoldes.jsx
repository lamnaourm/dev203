import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { augumenter, diminuer, initialiser } from '../redux/ActionsCreators';

const OperationsSoldes = () => {

    const dispatch = useDispatch();
    const [val, SetVal] = useState();

    return (
        <div>
            <input type="text" value={val} onChange={(e) => SetVal(e.target.value)}/> <br/>
            <button onClick={() => dispatch(augumenter(parseFloat(val)))}>Augumenter</button>
            <button onClick={() => dispatch(diminuer(parseFloat(val)))}>Diminuer</button>
            <button onClick={() => dispatch(initialiser())}>Initialiser</button>
        </div>
    );
}

export default OperationsSoldes;
