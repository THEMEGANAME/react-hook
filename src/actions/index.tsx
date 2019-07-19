import * as constant from '../constants'

export interface IncrementEnthusiasm {
    type: constant.INCREMENT_ENTHUSIASM
}
export interface DecrementEnthusiasm {
    type: constant.DECREMENT_ENTHUSIASM
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constant.INCREMENT_ENTHUSIASM
    }
}
export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constant.DECREMENT_ENTHUSIASM
    }
}