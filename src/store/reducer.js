import * as types from './types'

export function reducer(state, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case types.openModalSavePinType:
            return{
                ...state,
                type: types.openModalSavePinType,
                mode: 'savePin',
                activePinId: action.payload
            }
        case types.closeMoldalsType:
            return{
                ...state,
                type: types.closeMoldalsType,
                mode: null
            }
        case types.fetchFoldersInitType:
            return{
                ...state,
                type: types.fetchFoldersInitType
            }
        case types.fetchFoldersSuccessType:
            return{
                ...state,
                type: types.fetchFoldersSuccessType,
                folders: action.payload
            }
        case types.openModalCreatFolderType:
            return{
                ...state,
                type: types.openModalCreatFolderType,
                mode: 'createFolder'
            }
        
        case types.saveFolderSuccessType:
            return{
                ...state,
                type: types.saveFolderSuccessType,
                folders: [
                    ...state.folders,
                    action.payload
                ]
            }
        default:
            return {
                ...state,
                type: action.type
            }
    }
}