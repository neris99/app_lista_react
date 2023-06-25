import * as types from './types'

export function reducer(state, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case types.openModalSavePinType:
            return{
                ...state,
                mode: 'savePin'
            }
        case types.closeMoldalsType:
            return{
                ...state,
                mode: null
            }
        case types.fetchFoldersInitType:
            return{
                ...state
            }
        case types.fetchFoldersSuccessType:
            return{
                ...state,
                folders: action.payload
            }
        default:
            return state
    }
}