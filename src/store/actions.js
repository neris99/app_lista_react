import * as types from "./types";
import * as pinService from '../services/pinService'

export const openModalSavePin = () => ({
    type: types.openModalSavePinType
})

export const closeModalsAction = () => ({
    type: types.closeMoldalsType
})

export const fetchFoldersInitAction = () => ({
    type: types.fetchFoldersInitType
})

export const fetchFoldersSuccessAction = (folders) => ({
    type: types.fetchFoldersSuccessType,
    payload: folders
})

export const fetchFoldersAction = async (dispatch) => {
    dispatch(fetchFoldersInitAction())
    const folders = await pinService.getFolders()
    dispatch(fetchFoldersSuccessAction(folders))
}