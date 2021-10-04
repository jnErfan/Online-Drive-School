const addToStorage= item => {
    const storage = getStorage();
    if(item in storage){
        storage[item] = storage[item] + 1
    }else{
        storage[item] = 1
    }
    savedToStorage(storage);
}

const removeStorage = item => {
    const storage =  getStorage()
    delete storage[item];
    savedToStorage(storage);
}

const savedToStorage = storage => {
    // const storageStringify = JSON.stringify(storage)
    localStorage.setItem('Course-Buy',JSON.stringify(storage))
}

const getStorage = () => {
    let savedStorageItem = localStorage.getItem('Course-Buy')
    // const storageParse = JSON.parse(savedStorageItem)
    // if(savedStorageItem){
    //     savedStorageItem = JSON.parse(savedStorageItem);
    // }
    // else{
    //     savedStorageItem = {}
    // }
        return savedStorageItem ? JSON.parse(savedStorageItem) : {};
}

export {addToStorage, removeStorage,getStorage};