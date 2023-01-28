const calculateSum = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] % 3 === 0){
            sum += array[i];
        }
    }
    return sum;
}

const massiv = [8, 9, 21, 19, 18, 22, 7];
console.log(calculateSum(massiv));