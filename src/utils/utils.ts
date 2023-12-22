export const normalizeNumber = (number: any) => {
    if(typeof number !== "number") {
        return parseFloat(number)
    }
    return number
}

export const displayNumber = (number: string | number) => {
    const string = String(number)
    if (string.includes(',') || string.includes('.')) {
        return parseFloat(string).toFixed(2)
    }
    return parseInt(string).toFixed()
}