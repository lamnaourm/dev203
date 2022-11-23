import React from 'react';
import { useSelector } from 'react-redux';

const ShowSolde = () => {

    const val = useSelector(state => state.solde);

    return (
        <div>
            <h1>Votre Solde {val}</h1>
        </div>
    );
}

export default ShowSolde;
