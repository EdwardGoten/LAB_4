const getSameParity = (array) => {
    const newArray = [''];
    if (Math.abs(array[0]) % 2 === 0){
        let j = 0;
        for (let i = 0; i < array.length; i++){
            if (array[i] % 2 === 0) {
                newArray[j] = array[i];
                j++;
            }
        }
    }
    else if (Math.abs(array[0]) % 2 !== 0){
        let k = 0;
        for (let i = 0; i < array.length; i++){
            if (array[i] % 2 !== 0) {
                newArray[k] = array[i];
                k++;
            }
        }
    }
    return newArray;
}

const numbers = [1, 2, 3];
console.log(getSameParity(numbers));