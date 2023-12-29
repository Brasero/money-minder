const resetStorage = () => {
    localStorage.clear();
}

export const checkIfStorageIsAtDate = () => {
    const actualMonth = (new Date()).getMonth();
    const storageMonth = localStorage.getItem('money-minder-last-save');
    if (!storageMonth || actualMonth.toString() !== storageMonth) {
        resetStorage()
    }
}

export const getStorageSlice = (selector: (state: any) => any, defaultValue: any) => {
    const storage = localStorage.getItem('money-minder-store')
    if(!storage) {
        return defaultValue;
    }
    return selector(JSON.parse(storage));
}

export const saveStorage = (state: any) => {
    localStorage.setItem('money-minder-store', JSON.stringify(state));
}

export const saveMounth = (mounth: number|string) => {
    localStorage.setItem('money-minder-last-save', JSON.stringify(mounth))
}