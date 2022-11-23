import { AUGMENTER, DIMINUER, INITIALIER } from "./ActionsTypes"


const augumenter = (valeur) => {
    return {
        type: AUGMENTER,
        payload: valeur
    }
}

const diminuer = (valeur) => {
    return {
        type: DIMINUER,
        payload: valeur
    }
}

const initialiser = () => {
    return {
        type: INITIALIER
    }
}

export {augumenter, diminuer ,initialiser}