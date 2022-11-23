import { AUGMENTER, DIMINUER, INITIALIER } from "./ActionsTypes"


const initialState = {
    solde : 100,
}

const SoldeReducer = (state=initialState, action) => {
    switch(action.type) {
        case AUGMENTER: return {...state, solde: state.solde+action.payload}
        case DIMINUER: return {...state, solde: state.solde-action.payload}
        case INITIALIER: return {...state, solde: 10000}
    }
    return state
}

export default SoldeReducer;
