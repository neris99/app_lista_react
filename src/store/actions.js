import * as types from "./types";
import * as pinService from '../services/pinService'

const sleep = (time) => (
    new Promise(resolve => {
        setTimeout(resolve, time)
    })
)

export const openModalSavePin = (pinId) => ({
    type: types.openModalSavePinType,                                                   
    payload: pinId
})

export const openModalCreatFolder = () => ({
    type: types.openModalCreatFolderType
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


// ---

export const saveFolderInitAction = () => ({
    type: types.saveFolderInitType
})

export const saveFolderSuccessAction = (folder) => ({
    type: types.saveFolderSuccessType,
    payload: folder
})

export const saveFolderAction = async (dispatch, folderName, pinId) => {
    dispatch(saveFolderInitAction())

    // demore 1s
    await sleep(1000)

    const newFolder = await pinService.saveFolder(folderName)
    const folder = await pinService.savePinInFolder(newFolder.id, pinId)
    dispatch(saveFolderSuccessAction(folder))
}

// ---

export const savePinInFolderInitAction = () => ({
    type: types.savePinInFolderInitType
})

export const savePinInFolderSuccessAction = (folders) => ({
    type: types.savePinInFolderSuccessType,
    pauload: folders,
})

export const savePinInFolderAction = async (dispatch, pinId, folderId) => {
    dispatch(savePinInFolderInitAction())

    await sleep(1000)
    
    await pinService.savePinInFolder(folderId, pinId)
    const folders = await pinService.getFolders()
    dispatch(savePinInFolderSuccessAction(folders))
}

//--

export const fetchPinsInitAction = () => ({
    type: types.fetchPinsInitType
})

export const fetchPinsSuccessAction = (pinsData) => ({
    type: types.fetchPinsSuccessType,
    payload: pinsData
})

export const fetchPinsAction = async (dispatch) => {
    dispatch(fetchPinsInitAction())  //dispatch iniciando 
    const pinsData = await pinService.getPins() //getPins service
    dispatch(fetchPinsSuccessAction(pinsData))  //dispatch sucesso
}