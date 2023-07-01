/**
 * getfFolders()
 * saveFolder()
 * savePinInFolder()
 * so aceita string
 * transformar objeto em string => localStorage.getItem(user, JSON.stringify(user))
 * depois de transformado para salvar => 
 * JSON.parse(localStorage.getItem(user)).name
 */

export const getFolders = async () => {
    return JSON.parse(localStorage.getItem('folders'))  || []  /**caso não tenha ele retorna um array vazio */
}


export const saveFolder = async (folderName) => {
    /**Passos
     * Pegar lista/array de pastas -> getFolders()
     * adicionar a pasta dentro desse array
     * salvar novamente no localStorage
     */
    const generateId = () => {
        return `${(Math.floor(Math.random() * 100_000)).toString(16)}-${
        (Math.floor(Math.random() * 100_000)).toString(16)}`
    }

    const saveFolders = async (folders) => {
        localStorage.setItem('folders', JSON.stringify(folders))
    }


    const folders = await getFolders()

    const newFolder = {
        id: generateId(),
        name: folderName,
        pins: []
    }

    folders.push(newFolder)

    await saveFolders(folders)

    return newFolder
}

export const savePinInFolder = async (folderId, pinId) => {
    /**
     * listar coleção/array de pastas do Storage
     * encontrar a pasta que queremos adicionar o pin
     * adicionar o pinId na pasta
     * salvar a pasta no storage novamente
     */

    const saveFolders = async (folders) => {
        localStorage.setItem('folders', JSON.stringify(folders))
    }

    
    const folders = await getFolders()

    const folderIndex = folders.findIndex(function(folder){
        return folder.id === folderId
    })

    if (folderIndex !== -1) {
        folders[folderIndex].pins.push(pinId);
    }

    await saveFolders(folders)

    return {...folders[folderIndex]}
}

export const getPins = async () => {
    return [
        {
            id: '123',
            title: 'Trigronometria',
            image: 'https://picsum.photos/200/300?53',
            total: 0,
        },
        {
            id: '133',
            title: 'JavaScript',
            image: 'https://picsum.photos/200/300?13',
            total: 0,
        },
        {
            id: '134',
            title: 'React JS',
            image: 'https://picsum.photos/200/300?52',
            total: 0,
        }
    
    ]
}